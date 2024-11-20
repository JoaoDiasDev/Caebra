using Caebra.API.Data;
using Caebra.API.Entities;
using Caebra.API.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Caebra.API.Services.Implementations;

public class UserService(ApplicationDbContext context) : IUserService
{
    public async Task<User> CreateOrGetUserAsync(string canvaUserId, string applicationId)
    {
        var user = await context.Users.FirstOrDefaultAsync(u => u.CanvaUserId == canvaUserId);

        if (user == null)
        {
            user = new User
            {
                CanvaUserId = canvaUserId,
                Credits = 100,
                ApplicationId = applicationId
            };

            context.Users.Add(user);
            await context.SaveChangesAsync();
        }

        return user;
    }

    public async Task<int> GetUserCreditsAsync(string userId, string applicationId)
    {
        var user = await CreateOrGetUserAsync(userId, applicationId);
        return user.Credits;
    }

    public async Task AddUserCreditsAsync(string userId, string applicationId, int amount)
    {
        var user = await CreateOrGetUserAsync(userId, applicationId);
        user.Credits += amount;
        await context.SaveChangesAsync();
    }

    public async Task<bool> DeductUserCreditsAsync(string userId, string applicationId, int amount)
    {
        var user = await CreateOrGetUserAsync(userId, applicationId);

        if (user.Credits >= amount)
        {
            user.Credits -= amount;
            await context.SaveChangesAsync();
            return true;
        }
        else
        {
            throw new Exception("Insufficient credits.");
        }
    }
}