using Caebra.API.Services.Interfaces;

namespace Caebra.API.Services.Implementations;

public class CanvaService : ICanvaService
{
    private string? _cachedUserId;

    public Task<string> GetCanvaUserIdAsync(string token)
    {
        if (!string.IsNullOrEmpty(_cachedUserId))
        {
            return Task.FromResult(_cachedUserId);
        }

        try
        {
            var payloadBase64 = token.Split('.')[1];
            var payloadJson = System.Text.Encoding.UTF8
                .GetString(Convert.FromBase64String(payloadBase64));
            var payload = System.Text.Json.JsonSerializer
                .Deserialize<Dictionary<string, string>>(payloadJson);

            if (payload != null && payload.TryGetValue("userId", out var value))
            {
                _cachedUserId = value;
                return Task.FromResult(_cachedUserId);
            }

            throw new Exception("Failed to retrieve user ID from token.");
        }
        catch
        {
            throw new Exception("Invalid token format.");
        }
    }

    public void ClearCachedUserId()
    {
        _cachedUserId = null;
    }
}