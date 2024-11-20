namespace Caebra.API.Applications;

public record Text2Tone : ApplicationBase
{
    public Text2Tone()
    {
        Id = "aagvr3m7fxa";
        SuccessUrl = "https://mapps.vibetidesounds.com/success/text2tone";
        CancelUrl = "https://mapps.vibetidesounds.com/cancel/text2tone";
        UnitAmount = 500;
        ApplicationOrigin = "https://app-aagvr3m7fxa.canva-apps.com";
    }
}