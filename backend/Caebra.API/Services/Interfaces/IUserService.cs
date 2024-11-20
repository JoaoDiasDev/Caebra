using Caebra.API.Entities;

namespace Caebra.API.Services.Interfaces;

public interface IUserService
{
    Task<User> CreateOrGetUserAsync(string canvaUserId, string applicationId);
    Task<int> GetUserCreditsAsync(string userId, string applicationId);
    Task AddUserCreditsAsync(string userId, string applicationId, int amount);
    Task<bool> DeductUserCreditsAsync(string userId, string applicationId, int amount);
}