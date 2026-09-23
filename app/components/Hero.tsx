"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById("portfolio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="bg-linear-to-b from-black via-gray-950 to-black relative overflow-hidden min-h-[85vh] flex items-center py-24">
      {/* Ambient glowing color orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Foreground Content */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10" data-aos="fade-up">
        <div className="mb-12 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
            <span
              style={{
                backgroundImage: "linear-gradient(45deg, #60a5fa, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ROCKET
            </span>{" "}
            <span className="text-white">VISUALS</span>
          </h1>
          <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
            SOLUÇÕES AUDIOVISUAIS PARA POSICIONAMENTO E CONVERSÃO
          </span>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-200 text-center font-light drop-shadow-sm">
            Conteúdos cinemáticos com efeitos visuais e estratégias pensados para &nbsp;
            <span className="font-bold text-white">prender a atenção, gerar desejo e aumentar conversão.</span>
          </p>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300 text-center font-light drop-shadow-sm">
            Mais do que comprar um vídeo bonito, você investe em soluções criativas que vendem por você.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <button
            onClick={handleScrollToProjects}
            className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 rounded-lg text-lg cursor-pointer backdrop-blur-xs"
          >
            VER PROJETOS
          </button>
          <a
            href="https://wa.me/5511930188184?text=Olá! Gostaria de saber mais sobre seus serviços de produção audiovisual e pacotes."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 rounded-lg text-lg inline-flex items-center gap-2 cursor-pointer"
          >
            QUERO RESULTADOS
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
