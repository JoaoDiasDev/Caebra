namespace Caebra.API.Dtos;

public class CreateCheckoutSessionRequestDto
{
    public required string RefUserId { get; set; }
    public required string ApplicationId { get; set; }
    public required int CreditsAmount { get; set; }
}