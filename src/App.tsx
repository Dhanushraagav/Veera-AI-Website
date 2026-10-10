import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { AIProviders } from "./sections/AIProviders";
import { DesktopFirst } from "./sections/DesktopFirst";
import { PrivacySection } from "./sections/PrivacySection";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";
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
    <div className="min-h-screen bg-[#080908] text-[#F7F5EF] selection:bg-[#191D19] selection:text-[#D4AF72] flex flex-col font-sans">
      <CustomCursor />

      {/* Navigation (Contains Download Button #1) */}
      <Navbar
        activeRoute={activeRoute}
        onRouteChange={handleRouteChange}
        onDownloadClick={handleDownloadClick}
      />

      <main className="flex-grow">
        {activeRoute === "download" ? (
          <DownloadPage onBackToHome={() => handleRouteChange("home")} />
        ) : (
          <>
            {/* 1. Hero (Contains Download Button #2) */}
            <Hero onDownloadClick={handleDownloadClick} />

            {/* 2. 4 Features Cards */}
            <Features />

            {/* 3. Compact 3-Step: Capture -> Analyze -> Solve */}
            <HowItWorks />

            {/* 4. Compact AI Providers */}
            <AIProviders />

            {/* 5. Windows Desktop Specs (No redundant download button) */}
            <DesktopFirst />

            {/* 6. Concise Privacy */}
            <PrivacySection />

            {/* 7. Exactly 5 Useful FAQs */}
            <FAQ />
          </>
        )}
      </main>

      {/* Footer (No prominent download button) */}
      <Footer
        onDownloadClick={handleDownloadClick}
        onRouteChange={handleRouteChange}
      />
    </div>
  );
};

export default App;
