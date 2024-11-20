namespace Caebra.API.Dtos;

public class VoiceGenerationPreviewRequestDto
{
    public required string Text { get; set; }
    public required string VoiceId { get; set; }
    public required string? SsmlText { get; set; }
}