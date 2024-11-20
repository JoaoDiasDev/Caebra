using Caebra.API.Dtos;

namespace Caebra.API.Services.Interfaces;

public interface IVoiceService
{
    Task<string> QueueVoiceGenerationAsync(VoiceGenerationRequestDto request);
    Task<VoiceGenerationJobStatusResponseDto> GetJobStatusAsync(string jobId);
    Task<bool> CancelJobAsync(string jobId);
    Task<string> GenerateSpeechPreviewAsync(VoiceGenerationPreviewRequestDto request);
    Task UploadAudioToS3Async(Stream audioStream, string fileName);
    Task<string> GeneratePresignedUrlAsync(string fileName);
    Task<IEnumerable<VoiceOptionDto>> GetAvailableVoicesAsync();
}
