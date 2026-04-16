"use client";

import { useState } from "react";

export function Header() {
  const [activeId, setActiveId] = useState<string>("hero");

  const navItems = [
    { label: "Video Reel", id: "hero" },
    { label: "Sobre", id: "sobre" },
    { label: "Problema", id: "problema" },
    { label: "Solução", id: "solucao" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Serviços", id: "servicos" },
    { label: "Processo", id: "processo" },
    { label: "Contato", id: "cta" },
  ];

  const handleNavClick = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-800/50">
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-center gap-12">
        <ul className="flex gap-8 flex-wrap justify-center items-center ">
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleNavClick(item.id)} className="nav-link text-white font-bold text-lg hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
