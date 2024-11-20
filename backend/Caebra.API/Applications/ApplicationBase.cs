namespace Caebra.API.Applications;

public abstract record ApplicationBase
{
    public string Id { get; init; } = string.Empty;
    public string Name { get; init; } = string.Empty;
    public string SuccessUrl { get; init; } = string.Empty;
    public string CancelUrl { get; init; } = string.Empty;
    public int UnitAmount { get; init; } = 500;
    public string ApplicationOrigin { get; init; } = string.Empty;
}