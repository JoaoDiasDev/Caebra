namespace Caebra.API.Dtos;

public class VoiceGenerationJobStatusResponseDto
{
    public required string Status { get; set; }
    public required string? AudioPreviewUrl { get; set; }
    public required string? SignedUrl { get; set; }
    public required int? Credits { get; set; }
    public required string? FileName { get; set; }
}