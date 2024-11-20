namespace Caebra.API.Applications;

public static class ApplicationManager
{
    private static readonly List<ApplicationBase> Applications =
    [
        new Text2Tone(),
        new Tone2Text()
    ];

    public static ApplicationBase? GetApplicationById(string applicationId)
    {
        return Applications.FirstOrDefault(app => app.Id == applicationId);
    }
}