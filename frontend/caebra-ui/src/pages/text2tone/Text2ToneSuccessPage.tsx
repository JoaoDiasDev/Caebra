import React from "react";
import { useSearchParams } from "react-router-dom";

const Text2ToneSuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const refUserId = searchParams.get("ref_user_id");
  const sessionId = searchParams.get("session_id");

  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold">Payment Successful!</h1>
      <p className="mt-4">
        Thank you for your purchase, user <strong>{refUserId}</strong>.
      </p>
      <p>
        Your session ID is: <code>{sessionId}</code>
      </p>
      <p>You can now start using Text2Tone with your updated credits!</p>
    </div>
  );
};

export default Text2ToneSuccessPage;
