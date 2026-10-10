import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { RealtimeAI } from "./sections/RealtimeAI";
import { ContextAwareAI } from "./sections/ContextAwareAI";
import { AIProviders } from "./sections/AIProviders";
import { SpeedSection } from "./sections/SpeedSection";
import { DesktopFirst } from "./sections/DesktopFirst";
import { GlobalShortcut } from "./sections/GlobalShortcut";
import { Features } from "./sections/Features";
import { PrivacySection } from "./sections/PrivacySection";
import { Pricing } from "./sections/Pricing";
import { ActivationCode } from "./sections/ActivationCode";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";
import { PurchaseModal } from "./components/Modal";
import { DownloadPage } from "./pages/DownloadPage";

export const App: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<"home" | "download">(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === "/download" || hash === "#download-page" || hash === "#download") {
        return "download";
      }
    }
    return "home";
  });

  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === "/download" || hash === "#download-page" || hash === "#download") {
        setActiveRoute("download");
      } else {
        setActiveRoute("home");
      }
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  const handleRouteChange = (route: "home" | "download") => {
    setActiveRoute(route);
    if (route === "download") {
      window.history.pushState({}, "", "/download");
    } else {
      window.history.pushState({}, "", "/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadClick = () => {
    handleRouteChange("download");
  };

  return (
    <div className="min-h-screen bg-[#080908] text-[#f4f4f5] selection:bg-zinc-800 selection:text-white flex flex-col font-sans">
      {/* Live Custom Cursor Interaction */}
      <CustomCursor />
      {/* Navigation */}
      <Navbar
        activeRoute={activeRoute}
        onRouteChange={handleRouteChange}
        onDownloadClick={handleDownloadClick}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {activeRoute === "download" ? (
          <DownloadPage onBackToHome={() => handleRouteChange("home")} />
        ) : (
          <>
            {/* 1. Hero */}
            <Hero onDownloadClick={handleDownloadClick} />

            {/* 2. Live Interview Workflow */}
            <HowItWorks />

            {/* 3. Real-Time AI & Audio-to-Answer Pipeline */}
            <RealtimeAI />

            {/* 4. Context-Aware AI Intelligence */}
            <ContextAwareAI />

            {/* 5. Multiple AI Providers (Gemini, Groq, OpenRouter) */}
            <AIProviders />

            {/* 6. Latency & Speed Section */}
            <SpeedSection />

            {/* 7. Dedicated Windows Desktop Experience */}
            <DesktopFirst onDownloadClick={handleDownloadClick} />

            {/* 8. Global Shortcut Access (Ctrl+D) */}
            <GlobalShortcut />

            {/* 9. Core Capabilities & Architecture */}
            <Features />

            {/* 10. Privacy & Runtime Security */}
            <PrivacySection />

            {/* 11. Transparent Pricing */}
            <Pricing onPurchaseClick={() => setPurchaseModalOpen(true)} />

            {/* 12. Manual Activation Code Issuance */}
            <ActivationCode onDownloadClick={handleDownloadClick} />

            {/* 13. Comprehensive FAQ */}
            <FAQ />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onDownloadClick={handleDownloadClick}
        onRouteChange={handleRouteChange}
      />

      {/* Purchase Modal Notice */}
      <PurchaseModal
        isOpen={purchaseModalOpen}
        onClose={() => setPurchaseModalOpen(false)}
        title="VEERA AI PRO"
        subtitle="Real-time AI-powered interview intelligence for your Windows desktop."
      />
    </div>
  );
};

export default App;