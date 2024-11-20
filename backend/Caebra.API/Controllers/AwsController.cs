using Amazon.S3;
using Amazon.S3.Model;
using Caebra.API.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace Caebra.API.Controllers;

[ApiController]
[Route("api/aws")]
public class AwsController(IConfiguration configuration) : ControllerBase
{
    private readonly AmazonS3Client _s3Client = new(
        configuration["AWS:AccessKeyId"],
        configuration["AWS:SecretAccessKey"],
        Amazon.RegionEndpoint.GetBySystemName(configuration["AWS:Region"])
    );

    [HttpPost("upload-voice-s3")]
    public async Task<IActionResult> UploadToS3([FromBody] UploadVoiceRequestDto request)
    {
        if (string.IsNullOrEmpty(request.FileName) || string.IsNullOrEmpty(request.AudioBuffer))
        {
            return BadRequest("Filename and AudioBuffer are required.");
        }

        var buffer = Convert.FromBase64String(request.AudioBuffer);
        var putRequest = new PutObjectRequest
        {
            BucketName = configuration["AWS:S3BucketName"],
            Key = request.FileName,
            InputStream = new MemoryStream(buffer),
            ContentType = "audio/mp3"
        };

        await _s3Client.PutObjectAsync(putRequest);
        return Ok(new UploadVoiceResponseDto());
    }

    [HttpPost("get-signed-url")]
    public IActionResult GetSignedUrl([FromBody] GetSignedUrlRequestDto request)
    {
        var url = GeneratePresignedUrl(request.FileName);
        return Ok(new GetSignedUrlResponseDto { Url = url });
    }

    private string GeneratePresignedUrl(string fileName)
    {
        var request = new GetPreSignedUrlRequest
        {
            BucketName = configuration["AWS:S3BucketName"],
            Key = fileName,
            Expires = DateTime.UtcNow.AddHours(1)
        };

        return _s3Client.GetPreSignedURL(request);
    }
}
