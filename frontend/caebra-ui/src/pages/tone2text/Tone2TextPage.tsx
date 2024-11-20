import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function Tone2Text() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Tone2Text</h1>
      <p className="text-xl">
        Transcribe and analyze audio with our state-of-the-art speech
        recognition technology.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>High accuracy transcription</li>
        <li>Support for multiple languages and accents</li>
        <li>Speaker diarization</li>
        <li>Sentiment analysis and keyword extraction</li>
      </ul>
      <Button asChild>
        <Link to="/pricing/tone2text">Try Tone2Text Now</Link>
      </Button>
    </div>
  );
}
