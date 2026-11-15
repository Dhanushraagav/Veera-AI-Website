import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import { CartoonDownloadGuide } from "./CartoonDownloadGuide";

interface NavbarProps {
  activeRoute: "home" | "download";
  onRouteChange: (route: "home" | "download") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRoute, onRouteChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadHovered, setDownloadHovered] = useState(false);
  const [downloadClicked, setDownloadClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Stealth Mode", href: "#stealth-mode" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Reliability", href: "#providers" },
    { label: "FAQ", href: "#faq" },
    { label: "Download", href: "#download", isDownloadPage: true },
  ];

  const handleLinkClick = (link: { label: string; href: string; isDownloadPage?: boolean }) => {
    if (link.isDownloadPage) {
      onRouteChange("download");
      return;
    }
    if (activeRoute !== "home") {
      onRouteChange("home");
      setTimeout(() => {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#040605]/95 backdrop-blur-2xl border-b border-[#00F5D4]/20 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.9)] py-3"
          : "bg-transparent py-4.5"
      }`}
    >
      <div className="w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex items-center justify-between">
          {/* 2050 Sci-Fi Cyber Brand Logo */}
          <button
            onClick={() => onRouteChange("home")}
            className="flex items-center gap-3 group focus:outline-none rounded-lg p-1 text-left cursor-pointer"
            aria-label="Veera AI Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-[#0a0f0c] border border-[#00F5D4]/50 flex items-center justify-center transition-all duration-300 group-hover:border-[#00F5D4] group-hover:shadow-[0_0_20px_rgba(0,245,212,0.4)]">
              {/* Corner brackets */}
              <div className="cyber-reticle cyber-reticle-tl" />
              <div className="cyber-reticle cyber-reticle-tr" />
              <div className="cyber-reticle cyber-reticle-bl" />
              <div className="cyber-reticle cyber-reticle-br" />
              <svg className="w-4 h-4 text-[#00F5D4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l8 16 8-16" />
                <circle cx="12" cy="14" r="1.5" fill="#D4AF72" />
              </svg>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="font-cyber font-extrabold tracking-widest text-base sm:text-lg text-[#F7F5EF] leading-none group-hover:text-white">
                {SITE_CONFIG.SITE_NAME}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/35 text-[10px] font-mono text-[#00F5D4] leading-none hidden sm:inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
                <span>v{SITE_CONFIG.VERSION} // ARMED</span>
              </span>
            </div>
          </button>

          {/* Desktop Sci-Fi Cockpit Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0a0f0c]/90 border border-[#00F5D4]/20 backdrop-blur-xl shadow-inner" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link)}
                className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#9aa39e] hover:text-[#00F5D4] rounded-full transition-all hover:bg-[#00F5D4]/10 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Download Button #1 (Navbar) with Animated Cartoon Helper */}
          <div
            className="hidden md:flex items-center gap-3 relative py-1"
            onMouseEnter={() => setDownloadHovered(true)}
            onMouseLeave={() => setDownloadHovered(false)}
          >
            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#0a0f0c] border border-white/10 text-[11px] font-mono text-[#9aa39e]">
              <span className="text-[#00F5D4]">CLOAK:</span>
              <kbd className="px-1.5 py-0.5 rounded bg-black border border-[#00F5D4]/40 text-[#00F5D4] font-bold text-[10px]">Ctrl + D</kbd>
            </span>

            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              onClick={() => {
                setDownloadClicked(true);
                setTimeout(() => setDownloadClicked(false), 2800);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl cyber-btn-primary text-xs font-bold transition-all duration-200 active:scale-[0.98] cursor-pointer group"
            >
              <Download className="w-3.5 h-3.5 text-[#040605] transition-transform group-hover:-translate-y-0.5" />
              <span>DOWNLOAD v3.0.1</span>
            </a>

            {/* Cartoon Mascot Helper Animation */}
            <CartoonDownloadGuide isHovered={downloadHovered} isClicked={downloadClicked} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121512] border border-[#292D29] text-[#F7F5EF] text-xs font-medium cursor-pointer"
              aria-label="Download for Windows"
            >
              <Download className="w-4 h-4 text-[#087F5B]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#121512] border border-[#292D29] text-[#B4B7B0] hover:text-[#F7F5EF] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF72]" /> : <Menu className="w-5 h-5 text-[#D4AF72]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden border-b border-[#292D29] bg-[#080908]/98 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLinkClick(link);
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#B4B7B0] hover:text-[#F7F5EF] hover:bg-white/[0.04] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF72]" />
                  </a>
                ))}
              </nav>

              <div className="pt-2 border-t border-[#292D29]">
                <a
                  href={SITE_CONFIG.DOWNLOAD_URL}
                  download={SITE_CONFIG.INSTALLER_FILENAME}
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl metallic-button font-semibold text-xs shadow-md cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#087F5B]" />
                  <span>Download for Windows</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
