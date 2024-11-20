namespace Caebra.API.Dtos;

public class StripeWebhookEventDto
{
    public required string EventType { get; set; }
    public required Dictionary<string, string> Metadata { get; set; }
}