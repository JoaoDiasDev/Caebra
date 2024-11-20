"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function Tone2TextPricingPage() {
  const navigate = useNavigate();
  const [hasRefUserId, setHasRefUserId] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refUserId =
      urlParams.get("ref_user_id") || localStorage.getItem("ref_user_id");

    if (refUserId) {
      localStorage.setItem("ref_user_id", refUserId);
      setHasRefUserId(true);
    } else {
      navigate("/try-now");
    }
  }, [navigate]);

  if (!hasRefUserId) {
    return null;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Choose Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {["Basic", "Pro", "Enterprise"].map((plan) => (
          <div key={plan} className="border p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold">{plan}</h2>
            <ul className="space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <p className="text-3xl font-bold">$X/month</p>
            <Link
              to={`https://buy.stripe.com/test_aEU01idXIgagccE8wy?ref_user_id=${localStorage.getItem(
                "ref_user_id"
              )}`}
              target={"_blank"}
            >
              <Button className="w-full">Choose {plan}</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
