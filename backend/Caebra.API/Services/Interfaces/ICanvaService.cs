namespace Caebra.API.Services.Interfaces;

public interface ICanvaService
{
    Task<string> GetCanvaUserIdAsync(string token);
    void ClearCachedUserId();
}