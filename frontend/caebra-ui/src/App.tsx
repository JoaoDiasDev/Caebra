import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Text2TonePage from "./pages/Text2TonePage";
import Tone2TextPage from "./pages/Tone2TextPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Navbar is shown across all pages */}
      <Navbar />

      {/* Routes define which components to show for specific URLs */}
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
            </>
          }
        />

        {/* Features Page */}
        <Route
          path="/features"
          element={
            <>
              <FeaturesPage />
            </>
          }
        />

        {/* Pricing Page */}
        <Route
          path="/pricing"
          element={
            <>
              <PricingPage />
            </>
          }
        />

        {/* Text2Tone Page */}
        <Route
          path="/text2tone"
          element={
            <>
              <Text2TonePage />
            </>
          }
        />

        {/* Tone2Text Page */}
        <Route
          path="/tone2text"
          element={
            <>
              <Tone2TextPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
