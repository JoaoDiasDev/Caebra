using Caebra.API.Dtos;
using Caebra.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Caebra.API.Controllers;

[ApiController]
[Route("api/voice")]
public class VoiceController(IVoiceService voiceService) : ControllerBase
{
    [HttpPost("queue-voice-generation")]
    public async Task<IActionResult> QueueVoiceGeneration([FromBody] VoiceGenerationRequestDto request)
    {
        var jobId = await voiceService.QueueVoiceGenerationAsync(request);
        return Ok(new { JobId = jobId });
    }

    [HttpPost("job-status")]
    public async Task<IActionResult> GetJobStatus([FromBody] VoiceGenerationStatusRequestDto request)
    {
        var status = await voiceService.GetJobStatusAsync(request.JobId);
        return Ok(status);
    }

    [HttpPost("cancel-job")]
    public async Task<IActionResult> CancelJob([FromBody] CancelJobRequestDto request)
    {
        var success = await voiceService.CancelJobAsync(request.JobId);
        return Ok(new { Success = success });
    }

    [HttpPost("preview-voice")]
    public async Task<IActionResult> PreviewVoice([FromBody] VoiceGenerationPreviewRequestDto request)
    {
        var audioBase64 = await voiceService.GenerateSpeechPreviewAsync(request);
        return Ok(new { AudioBase64 = audioBase64 });
    }

    [HttpGet("voices")]
    public async Task<IActionResult> GetAvailableVoices()
    {
        var voices = await voiceService.GetAvailableVoicesAsync();
        return Ok(voices);
    }
}
