"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("reel");

  const navItems = [
    { label: "Video Reel", id: "reel", isLive: true },
    { label: "Sobre", id: "sobre" },
    { label: "Problema", id: "problema" },
    { label: "Solução", id: "solucao" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Serviços", id: "servicos" },
    { label: "Processo", id: "processo" },
    { label: "Contato", id: "cta" },
  ];

  // Detect scroll position to transform header appearance and track active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection matching exact page order
      const scrollPos = window.scrollY + 250;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(item.id);
          return;
        }
      }
      setActiveSection("reel");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-black/85 backdrop-blur-xl border-b border-gray-800/80 shadow-2xl shadow-black/80"
          : "py-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick("reel")}
          className="flex items-center gap-3.5 group cursor-pointer text-left focus:outline-none"
          aria-label="Ir para o topo"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gray-950/80 border border-gray-800/80 p-1.5 flex items-center justify-center group-hover:border-purple-500/60 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
            <Image
              src="/LOGO FOGUETE BRANCO.png"
              alt="Logo Rocket Visuals"
              width={26}
              height={26}
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="font-black tracking-wider text-lg leading-tight"
              style={{
                backgroundImage: "linear-gradient(45deg, #60a5fa, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ROCKET <span className="text-white">VISUALS</span>
            </span>
            <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
              Direção Criativa &amp; VFX
            </span>
          </div>
        </button>

        {/* Center: Modern Glassmorphic Nav Island (Desktop) */}
        <nav className="hidden lg:flex items-center bg-gray-950/70 border border-gray-800/80 backdrop-blur-md rounded-full px-3 py-1.5 shadow-inner">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? "text-white bg-white/10 shadow-sm"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.isLive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    )}
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: CTA Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5511930188184?text=Olá! Gostaria de saber mais sobre seus serviços de produção audiovisual e pacotes."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-md hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Falar no WhatsApp</span>
            <FaWhatsapp className="text-sm" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 text-white flex items-center justify-center transition-colors hover:border-gray-700 cursor-pointer"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-gray-800/80 backdrop-blur-2xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col gap-2 mb-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left py-3 px-4 rounded-xl text-sm font-bold text-gray-200 hover:text-white hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-all flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    {item.isLive && (
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    )}
                    {item.label}
                  </span>
                  <FaArrowRight className="text-xs text-gray-500" />
                </button>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/5511930188184?text=Olá! Gostaria de saber mais sobre seus serviços de produção audiovisual e pacotes."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg transition-transform active:scale-95"
          >
            <FaWhatsapp className="text-base" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
