"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="bg-linear-to-b from-gray-900 to-black relative overflow-hidden min-h-screen flex items-center py-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
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
          <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">SOLUÇÕES AUDIOVISUAIS PARA POSICIONAMENTO E CONVERSÃO</span>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300 text-center font-light">
            Conteúdos cinematográficos com efeitos visuais e estratégias pensados para &nbsp;
            <span className="font-bold text-white">prender a atenção, gerar desejo e aumentar conversão.</span>
          </p>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300 text-center font-light">Mais do que comprar um vídeo bonito, você investe em soluções criativas que vendem por você.</p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <button className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 rounded-lg text-lg">VER PROJETOS</button>
          <a
            href="https://wa.me/5511930188184?text=Olá! Gostaria de saber mais sobre seus serviços de produção audiovisual e pacotes."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 rounded-lg text-lg inline-flex items-center gap-2"
          >
            QUERO RESULTADOS
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
