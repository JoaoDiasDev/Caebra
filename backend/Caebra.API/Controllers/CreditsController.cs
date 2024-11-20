using Caebra.API.Applications;
using Caebra.API.Dtos;
using Caebra.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Caebra.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CreditsController(IUserService userService, ICanvaService canvaService,
    IStripeService stripeService) : ControllerBase
{
    [HttpGet("credits")]
    public async Task<IActionResult> GetUserCredits([FromHeader(Name = "Authorization")] string authorization,
        [FromQuery] string applicationId)
    {
        if (string.IsNullOrEmpty(authorization))
        {
            return Unauthorized(new { error = "Authorization token missing." });
        }

        if (string.IsNullOrEmpty(applicationId))
        {
            return BadRequest(new { error = "Application ID is required." });
        }

        var token = authorization.Split(' ')[1];
        var canvaUserId = await canvaService.GetCanvaUserIdAsync(token);

        var credits = await userService.GetUserCreditsAsync(canvaUserId, applicationId);
        return Ok(new { credits });
    }

    [HttpPost("add-user-credits")]
    public async Task<IActionResult> AddUserCredits([FromBody] UpdateCreditsRequest request)
    {
        if (string.IsNullOrEmpty(request.UserId) || string.IsNullOrEmpty(request.ApplicationId))
        {
            return BadRequest(new { error = "UserId and ApplicationId are required." });
        }

        await userService.AddUserCreditsAsync(request.UserId, request.ApplicationId, request.Amount);
        return Ok(new { message = "Credits added successfully." });
    }

    [HttpPost("deduct-user-credits")]
    public async Task<IActionResult> DeductUserCredits([FromBody] UpdateCreditsRequest request)
    {
        if (string.IsNullOrEmpty(request.UserId) || string.IsNullOrEmpty(request.ApplicationId)
                                                 || request.Amount <= 0)
        {
            return BadRequest(new { error = "Invalid request. Check UserId, ApplicationId, and Amount." });
        }

        try
        {
            var result = await userService.DeductUserCreditsAsync(request.UserId,
                request.ApplicationId, request.Amount);
            return Ok(new { success = result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }

    [HttpPost("create-checkout-session")]
    public async Task<IActionResult> CreateCheckoutSession([FromBody] CreateCheckoutSessionRequestDto request)
    {
        if (string.IsNullOrEmpty(request.RefUserId) || string.IsNullOrEmpty(request.ApplicationId))
        {
            return BadRequest(new { error = "RefUserId and ApplicationId are required." });
        }

        var application = ApplicationManager.GetApplicationById(request.ApplicationId);
        if (application == null)
        {
            return NotFound(new { error = "Application not found." });
        }

        var checkoutUrl = await stripeService.CreateCheckoutSessionAsync(request.RefUserId, application);
        return Ok(new CreateCheckoutSessionResponseDto { CheckoutUrl = checkoutUrl });
    }


    [HttpPost("stripe-webhook")]
    public async Task<IActionResult> HandleStripeWebhook([FromBody] string json,
        [FromHeader(Name = "Stripe-Signature")] string signature)
    {
        try
        {
            await stripeService.HandleWebhookAsync(json, signature);
            return Ok(new StripeWebhookResponseDto { Success = true, Message = "Webhook handled successfully." });
        }
        catch (Exception ex)
        {
            return BadRequest(new StripeWebhookResponseDto
            { Success = false, Message = $"Webhook handling failed: {ex.Message}" });
        }
    }
}
