namespace Caebra.API.Applications;

public record Tone2Text : ApplicationBase
{
    public Tone2Text()
    {
        Id = "filladi"; // TODO: Change id
        SuccessUrl = "https://mapps.vibetidesounds.com/success/tone2text";
        CancelUrl = "https://mapps.vibetidesounds.com/cancel/tone2text";
        UnitAmount = 500;
        ApplicationOrigin = "https://app-correctaid.canva-apps.com";
    }
}