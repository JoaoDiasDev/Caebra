namespace Caebra.API.Dtos;

public class VoiceGenerationResponseDto
{
    public required string JobId { get; set; }
    public required string AudioStreamUrl { get; set; }
}