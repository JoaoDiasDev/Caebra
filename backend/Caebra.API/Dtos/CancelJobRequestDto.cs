namespace Caebra.API.Dtos;

public class CancelJobRequestDto
{
    public required string JobId { get; set; }
    public required string UserId { get; set; }
}