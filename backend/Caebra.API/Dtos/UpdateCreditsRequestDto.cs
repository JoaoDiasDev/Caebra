namespace Caebra.API.Dtos;

public class UpdateCreditsRequest
{
    public required string UserId { get; set; }
    public required int Amount { get; set; }
    public required string ApplicationId { get; set; }
}