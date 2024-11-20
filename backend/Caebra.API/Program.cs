using Caebra.API.Data;
using Caebra.API.Middlewares;
using Caebra.API.Services.Implementations;
using Caebra.API.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IStripeService, StripeService>();
builder.Services.AddScoped<IVoiceService, VoiceService>();
builder.Services.AddScoped<ICanvaService, CanvaService>();

// Database configuration
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

// CORS Configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
    {
        policy.SetIsOriginAllowed(origin =>
                origin.EndsWith(".canva-apps.com"))
        .AllowAnyHeader()
        .AllowAnyMethod()
        .WithExposedHeaders("Authorization");
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigins");
app.UseMiddleware<CanvaAuthenticationMiddleware>();

app.UseAuthorization();

app.MapControllers();

app.Run();
