import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function Text2Tone() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Text2Tone</h1>
      <p className="text-xl">
        Convert your text into natural-sounding speech with our advanced AI
        technology.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Choose from a variety of voices and accents</li>
        <li>Adjust speech rate and pitch</li>
        <li>Support for multiple languages</li>
        <li>Easy-to-use interface</li>
      </ul>
      <Button asChild>
        <Link to="/pricing/text2tone">Try Text2Tone Now</Link>
      </Button>
    </div>
  );
}
