import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface NavbarProps {
  onDownloadClick: () => void;
  activeRoute: "home" | "download";
  onRouteChange: (route: "home" | "download") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick: _onDownloadClick, activeRoute, onRouteChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "AI Providers", href: "#providers" },
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
          ? "bg-[#080908]/92 backdrop-blur-xl border-b border-[#292D29] shadow-lg shadow-black/50 py-3"
          : "bg-transparent py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Emblem */}
          <button
            onClick={() => onRouteChange("home")}
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#087F5B]/50 rounded-lg p-1 text-left cursor-pointer"
            aria-label="Veera AI Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#121512] border border-[#D4AF72]/30 flex items-center justify-center transition-transform group-hover:scale-105 shadow-inner">
              <svg className="w-4 h-4 text-[#D4AF72]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l8 16 8-16" />
                <circle cx="12" cy="14" r="1.5" fill="#087F5B" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-wider text-base sm:text-lg text-[#F7F5EF] font-mono leading-none">
                {SITE_CONFIG.SITE_NAME}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF72] px-1.5 py-0.5 rounded bg-[#191D19] border border-[#292D29] leading-none hidden sm:inline">
                {SITE_CONFIG.SMALL_LABEL}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#121512]/80 border border-[#292D29] backdrop-blur-md" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link)}
                className="px-3.5 py-1 text-xs lg:text-sm font-medium text-[#B4B7B0] hover:text-[#F7F5EF] rounded-full transition-colors hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Download Button #1 (Navbar) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.DOWNLOAD_URL}
              download={SITE_CONFIG.INSTALLER_FILENAME}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl metallic-button text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#087F5B]" />
              <span>Download for Windows</span>
            </a>
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
