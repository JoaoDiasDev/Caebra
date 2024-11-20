namespace Caebra.API.Dtos
{
    public class VoiceOptionDto
    {
        public required string Id { get; set; }
        public required string LanguageCode { get; set; }
        public required string LanguageName { get; set; }
        public required string Gender { get; set; }
        public required List<string> SupportedEngines { get; set; }
    }

}
