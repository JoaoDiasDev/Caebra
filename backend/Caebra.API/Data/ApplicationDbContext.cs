using Caebra.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace Caebra.API.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public virtual DbSet<User> Users { get; set; }
}