using Amazon.Polly;
using Amazon.Polly.Model;
using Amazon.S3;
using Amazon.S3.Model;
using Caebra.API.Dtos;
using Caebra.API.Services.Interfaces;
using System.Collections.Concurrent;

namespace Caebra.API.Services.Implementations;

public class VoiceService(IConfiguration configuration) : IVoiceService
{
    private readonly AmazonPollyClient _pollyClient = new(
        configuration["AWS:AccessKeyId"],
        configuration["AWS:SecretAccessKey"],
        Amazon.RegionEndpoint.GetBySystemName(configuration["AWS:Region"])
    );
    private readonly AmazonS3Client _s3Client = new(
        configuration["AWS:AccessKeyId"],
        configuration["AWS:SecretAccessKey"],
        Amazon.RegionEndpoint.GetBySystemName(configuration["AWS:Region"])
    );

    private static readonly ConcurrentDictionary<string, string> CompletedJobs = new();
    private static readonly ConcurrentDictionary<string, bool> CancelledJobs = new();
    private static readonly ConcurrentDictionary<string, Task> JobQueue = new();

    public async Task<string> QueueVoiceGenerationAsync(VoiceGenerationRequestDto request)
    {
        var jobId = Guid.NewGuid().ToString();
        var fileName = $"{jobId}.mp3";

        JobQueue[jobId] = Task.Run(async () =>
        {
            try
            {
                if (CancelledJobs.ContainsKey(jobId))
                    return;

                var audioStream = await GenerateSpeechAsync(request.Text, request.VoiceId);
                await UploadAudioToS3Async(audioStream, fileName);

                CompletedJobs[jobId] = fileName;
            }
            catch
            {
                CancelledJobs[jobId] = true;
            }
        });

        return jobId;
    }

    public async Task<VoiceGenerationJobStatusResponseDto> GetJobStatusAsync(string jobId)
    {
        if (CancelledJobs.ContainsKey(jobId))
        {
            return new VoiceGenerationJobStatusResponseDto
            {
                Status = "cancelled",
                AudioPreviewUrl = null,
                SignedUrl = null,
                Credits = null,
                FileName = null
            };
        }

        if (CompletedJobs.TryGetValue(jobId, out var fileName))
        {
            var signedUrl = await GeneratePresignedUrlAsync(fileName);

            return new VoiceGenerationJobStatusResponseDto
            {
                Status = "completed",
                SignedUrl = signedUrl,
                FileName = fileName,
                AudioPreviewUrl = null,
                Credits = null
            };
        }

        return new VoiceGenerationJobStatusResponseDto
        {
            Status = "processing",
            AudioPreviewUrl = null,
            SignedUrl = null,
            Credits = null,
            FileName = null
        };
    }

    public Task<bool> CancelJobAsync(string jobId)
    {
        CancelledJobs[jobId] = true;
        return Task.FromResult(true);
    }

    public async Task<string> GenerateSpeechPreviewAsync(VoiceGenerationPreviewRequestDto request)
    {
        var synthRequest = new SynthesizeSpeechRequest
        {
            Text = request.SsmlText ?? request.Text,
            TextType = !string.IsNullOrEmpty(request.SsmlText) ? TextType.Ssml : TextType.Text,
            VoiceId = request.VoiceId,
            OutputFormat = OutputFormat.Mp3
        };

        var response = await _pollyClient.SynthesizeSpeechAsync(synthRequest);
        using var memoryStream = new MemoryStream();
        await response.AudioStream.CopyToAsync(memoryStream);
        return Convert.ToBase64String(memoryStream.ToArray());
    }

    public async Task UploadAudioToS3Async(Stream audioStream, string fileName)
    {
        var putRequest = new PutObjectRequest
        {
            BucketName = configuration["AWS:S3BucketName"],
            Key = fileName,
            InputStream = audioStream,
            ContentType = "audio/mp3"
        };

        await _s3Client.PutObjectAsync(putRequest);
    }

    public async Task<string> GeneratePresignedUrlAsync(string fileName)
    {
        var request = new GetPreSignedUrlRequest
        {
            BucketName = configuration["AWS:S3BucketName"],
            Key = fileName,
            Expires = DateTime.UtcNow.AddHours(1)
        };

        return await _s3Client.GetPreSignedURLAsync(request);
    }

    public async Task<IEnumerable<VoiceOptionDto>> GetAvailableVoicesAsync()
    {
        var response = await _pollyClient.DescribeVoicesAsync(new DescribeVoicesRequest());
        return response.Voices?.Select(voice => new VoiceOptionDto
        {
            Id = voice.Id,
            LanguageCode = voice.LanguageCode,
            LanguageName = voice.LanguageName,
            Gender = voice.Gender.ToString(),
            SupportedEngines = null
        }) ?? [];
    }

    private async Task<Stream> GenerateSpeechAsync(string text, string voiceId)
    {
        var request = new SynthesizeSpeechRequest
        {
            Text = text,
            VoiceId = voiceId,
            OutputFormat = OutputFormat.Mp3
        };

        var response = await _pollyClient.SynthesizeSpeechAsync(request);
        return response.AudioStream;
    }
}
