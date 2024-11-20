namespace Caebra.API.Dtos;

public class VoiceGenerationRequestDto
{
    public required string Text { get; set; }
    public required string VoiceId { get; set; }
}