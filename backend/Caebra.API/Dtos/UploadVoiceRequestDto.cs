namespace Caebra.API.Dtos;

public class UploadVoiceRequestDto
{
    public required string FileName { get; set; }
    public required string AudioBuffer { get; set; }
}