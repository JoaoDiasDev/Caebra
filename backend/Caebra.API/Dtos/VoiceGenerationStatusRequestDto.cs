namespace Caebra.API.Dtos;

public class VoiceGenerationStatusRequestDto
{
    public required string JobId { get; set; }
    public required string UserId { get; set; }
}