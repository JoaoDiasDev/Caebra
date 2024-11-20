import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function Tone2TextTryNowPage() {
  return (
    <div className="space-y-8 text-center">
      <h1 className="text-4xl font-bold">Try Our AI Voice Conversion Tools</h1>
      <p className="text-xl">
        Experience the power of Tone2Text with free credits.
      </p>
      <div className="space-y-4">
        <Button asChild size="lg">
          <Link to="/application/tone2text">Try Tone2Text</Link>
        </Button>
      </div>
      <p>No credit card required. Start your free trial today!</p>
    </div>
  );
}
