using Caebra.API.Applications;

namespace Caebra.API.Services.Interfaces;

public interface IStripeService
{
    Task<string> CreateCheckoutSessionAsync(string refUserId, ApplicationBase application);
    Task HandleWebhookAsync(string json, string signature);
}