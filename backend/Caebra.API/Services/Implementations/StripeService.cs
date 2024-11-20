using Caebra.API.Applications;
using Caebra.API.Services.Interfaces;
using Stripe;
using Stripe.Checkout;

namespace Caebra.API.Services.Implementations;

public class StripeService(IConfiguration configuration, IUserService userService) : IStripeService
{
    public async Task<string> CreateCheckoutSessionAsync(string refUserId, ApplicationBase application)
    {
        StripeConfiguration.ApiKey = configuration["Stripe:SecretKey"];

        var options = new SessionCreateOptions
        {
            PaymentMethodTypes = ["card"],
            LineItems =
            [
                new SessionLineItemOptions
                {
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        Currency = "usd",
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = $"Purchase Credits for {application.Name}"
                        },
                        UnitAmount = application.UnitAmount,
                    },
                    Quantity = 1
                }
            ],
            Mode = "payment",
            SuccessUrl = $"{application.SuccessUrl}?refUserId={refUserId}",
            CancelUrl = $"{application.CancelUrl}?refUserId={refUserId}",
            Metadata = new Dictionary<string, string>
            {
                { "refUserId", refUserId },
                { "applicationId", application.Id },
                { "planId", "credits_purchase" }
            }
        };

        var service = new SessionService();
        var session = await service.CreateAsync(options);

        return session.Url;
    }

    public async Task HandleWebhookAsync(string json, string signature)
    {
        StripeConfiguration.ApiKey = configuration["Stripe:SecretKey"];
        var endpointSecret = configuration["Stripe:WebhookSecret"];

        try
        {
            var stripeEvent = EventUtility.ConstructEvent(json, signature, endpointSecret);

            if (stripeEvent.Type.Equals("checkout.session.completed", StringComparison.OrdinalIgnoreCase))
            {
                if (stripeEvent.Data.Object is not Session session)
                {
                    throw new Exception("Stripe session error.");
                }

                var refUserId = session.Metadata["refUserId"];
                var applicationId = session.Metadata["applicationId"];

                await userService.AddUserCreditsAsync(refUserId, applicationId, 100);
                Console.WriteLine($"Payment successful for RefUserId: {refUserId}, ApplicationId: {applicationId}");
            }
        }
        catch (StripeException ex)
        {
            Console.WriteLine($"Stripe Webhook Error: {ex.Message}");
            throw;
        }
    }
}
