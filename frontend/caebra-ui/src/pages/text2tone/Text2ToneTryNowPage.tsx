import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function Text2ToneTryNowPage() {
  return (
    <div className="space-y-8 text-center">
      <h1 className="text-4xl font-bold">Try Our AI Voice Conversion Tools</h1>
      <p className="text-xl">
        Experience the power of Text2Tone with free credits.
      </p>
      <div className="space-y-4">
        <Button asChild size="lg">
          <Link to="/application/text2tone">Try Text2Tone</Link>
        </Button>
      </div>
      <p>No credit card required. Start your free trial today!</p>
    </div>
  );
}
