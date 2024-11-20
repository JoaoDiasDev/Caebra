namespace Caebra.API.Entities;

public class User
{
    public int Id { get; set; }
    public required string CanvaUserId { get; set; }
    public int Credits { get; set; }
    public required string ApplicationId { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

}