namespace Caebra.API.Dtos;

public class StripeWebhookResponseDto
{
    public required bool Success { get; set; }
    public required string Message { get; set; }
}