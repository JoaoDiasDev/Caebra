using System.Text;
using System.Text.Json;

namespace Caebra.API.Middlewares;

public class CanvaAuthenticationMiddleware(RequestDelegate next)
{
    public async Task Invoke(HttpContext context)
    {
        if (!context.Request.Headers.TryGetValue("Authorization", out var authorizationHeader))
        {
            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
            await context.Response.WriteAsync("Authorization header is missing.");
            return;
        }

        var token = authorizationHeader.ToString().Replace("Bearer ", string.Empty);
        try
        {
            var payload = DecodeJwtPayload(token);
            var userId = payload["userId"]?.ToString();

            if (string.IsNullOrEmpty(userId))
            {
                throw new Exception("UserId is missing in the token.");
            }

            context.Items["CanvaUserId"] = userId;
        }
        catch
        {
            context.Response.StatusCode = StatusCodes.Status403Forbidden;
            await context.Response.WriteAsync("Invalid or expired Canva token.");
            return;
        }

        await next(context);
    }

    private Dictionary<string, object> DecodeJwtPayload(string token)
    {
        var parts = token.Split('.');
        if (parts.Length < 2)
        {
            throw new Exception("Invalid JWT token.");
        }

        var payload = parts[1];
        var json = Encoding.UTF8.GetString(Convert.FromBase64String(payload));
        return JsonSerializer.Deserialize<Dictionary<string, object>>(json)!;
    }
}