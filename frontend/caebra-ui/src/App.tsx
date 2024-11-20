import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Text2TonePage from "./pages/text2tone/Text2TonePage";
import Tone2TextPage from "./pages/tone2text/Tone2TextPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import Text2ToneSuccessPage from "./pages/text2tone/Text2ToneSuccessPage";
import Tone2TextSuccessPage from "./pages/tone2text/Tone2TextSuccessPage";
import Text2TonePricingPage from "./pages/text2tone/Text2TonePricingPage";
import Tone2TextPricingPage from "./pages/tone2text/Tone2TextPricingPage";
import Text2ToneTryNowPage from "./pages/text2tone/Text2ToneTryNowPage";
import Tone2TextTryNowPage from "./pages/tone2text/Tone2TextTryNowPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/application/text2tone" element={<Text2TonePage />} />
          <Route path="/application/tone2text" element={<Tone2TextPage />} />
          <Route path="/pricing/text2tone" element={<Text2TonePricingPage />} />
          <Route path="/pricing/tone2text" element={<Tone2TextPricingPage />} />
          <Route path="/try-now/text2tone" element={<Text2ToneTryNowPage />} />
          <Route path="/try-now/tone2text" element={<Tone2TextTryNowPage />} />
          <Route path="/success/text2tone" element={<Text2ToneSuccessPage />} />
          <Route path="/success/tone2text" element={<Tone2TextSuccessPage />} />
          <Route path="terms" element={<TermsOfServicePage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
