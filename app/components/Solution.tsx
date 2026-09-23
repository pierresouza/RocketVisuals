"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaPlay, FaTimes, FaClock, FaWhatsapp, FaShieldAlt } from "react-icons/fa";

interface SolutionItem {
  number: string;
  badge: string;
  title: string;
  description: string;
  videoId: string;
  duration: string;
  thumbnail: string;
  fallbackThumbnail: string;
  tag: string;
  delay: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    number: "01",
    badge: "ESTÉTICA CINEMÁTICA",
    title: "Estética Cinemática",
    description: "Qualidade cinematográfica que prende a atenção nos primeiros 3 segundos e posiciona sua marca como autoridade premium.",
    videoId: "8u8xb1mOa6U",
    duration: "0:22",
    thumbnail: "https://i.ytimg.com/vi/8u8xb1mOa6U/hqdefault.jpg",
    fallbackThumbnail: "/Hero-image.png",
    tag: "Alta Retenção",
    delay: "100",
  },
  {
    number: "02",
    badge: "EFEITOS VISUAIS & 3D",
    title: "Efeitos Visuais",
    description: "Diferenciação visual de alto nível com VFX, 3D e transições criativas pensadas para destacar seu produto da concorrência.",
    videoId: "pO0uIrTR_68",
    duration: "0:26",
    thumbnail: "https://i.ytimg.com/vi/pO0uIrTR_68/hqdefault.jpg",
    fallbackThumbnail: "/EFEITOS VISUAIS.png",
    tag: "Diferenciação Real",
    delay: "200",
  },
  {
    number: "03",
    badge: "NARRATIVA FORTE",
    title: "Narrativa Forte",
    description: "Storytelling estratégico estruturado para despertar desejo genuíno, conectar emocionalmente e guiar para a decisão de compra.",
    videoId: "0K0lc02wPTw",
    duration: "0:12",
    thumbnail: "https://i.ytimg.com/vi/0K0lc02wPTw/hqdefault.jpg",
    fallbackThumbnail: "/produção audiovisual.png",
    tag: "Storytelling",
    delay: "300",
  },
  {
    number: "04",
    badge: "ALTA CONVERSÃO",
    title: "Impacto Imediato",
    description: "Conteúdos que não são apenas vídeos bonitos — são ferramentas comerciais criadas para vender por você e gerar ROI real.",
    videoId: "mCTSufrvAE4",
    duration: "0:18",
    thumbnail: "https://i.ytimg.com/vi/mCTSufrvAE4/hqdefault.jpg",
    fallbackThumbnail: "/3D.png",
    tag: "Vendas & ROI",
    delay: "400",
  },
];

export default function Solution() {
  const [activeVideo, setActiveVideo] = useState<SolutionItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow || "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <section id="solucao" className="bg-linear-to-b from-black via-gray-950 to-gray-900 py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6" data-aos="fade-up">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-4">
              <FaShieldAlt className="text-xs" />
              <span>Nossos Pilares de Entrega</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase mb-4">
              A Solução
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Como transformamos conteúdos em resultados práticos. Clique em cada pilar para ver a solução aplicada em vídeo.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-400 bg-gray-900/60 border border-gray-800 rounded-full px-4 py-2">
            <span>💡 Clique em qualquer card para assistir ao exemplo</span>
          </div>
        </div>

        {/* 4 Pillars Grid in 9:16 Video Format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.title}
              onClick={() => setActiveVideo(solution)}
              data-aos="fade-up"
              data-aos-delay={solution.delay}
              className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-gray-950 border border-gray-800/80 hover:border-purple-500/60 shadow-xl hover:shadow-2xl hover:shadow-purple-600/25 transition-all duration-400 hover:-translate-y-2 cursor-pointer flex flex-col justify-between select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveVideo(solution);
                }
              }}
              aria-label={`Assistir exemplo da solução ${solution.title}`}
            >
              {/* Reliable Video Thumbnail Image */}
              <img
                src={solution.thumbnail}
                alt={solution.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== solution.fallbackThumbnail) {
                    e.currentTarget.src = solution.fallbackThumbnail;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Shimmer / Contrast Vignette Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/75 pointer-events-none group-hover:via-black/20 transition-colors duration-300" />

              {/* Top Bar: Number Badge & Duration */}
              <div className="relative z-10 p-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[11px] font-bold text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>{solution.number}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-[11px] font-bold text-gray-200">
                  <FaClock className="text-purple-400 text-[10px]" />
                  <span>{solution.duration}</span>
                </span>
              </div>

              {/* Center Play Button with Hover Animation */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(solution);
                  }}
                  className="w-14 h-14 rounded-full bg-white/20 group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 border border-white/40 group-hover:border-transparent flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 group-hover:scale-115 shadow-xl group-hover:shadow-purple-500/50 cursor-pointer"
                  aria-label="Reproduzir vídeo da solução"
                >
                  <FaPlay className="text-base ml-1" />
                </button>
              </div>

              {/* Bottom Info: Title, Description & Action */}
              <div className="relative z-10 p-5 pt-8 bg-linear-to-t from-black via-black/95 to-transparent">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest text-purple-400 mb-1.5">
                  {solution.badge}
                </span>
                <h3 className="text-xl font-black text-white leading-tight mb-2 group-hover:text-purple-300 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-3 line-clamp-3">
                  {solution.description}
                </p>

                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-gray-800/80">
                  <span className="text-gray-400 font-medium">{solution.tag}</span>
                  <span className="font-bold text-blue-400 group-hover:text-white group-hover:underline flex items-center gap-1 transition-colors">
                    Ver na prática <span>↗</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal (Mounted into document.body via React Portal) */}
      {mounted &&
        activeVideo &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveVideo(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.title}
          >
            {/* Modal Container */}
            <div
              className="relative flex flex-col items-center max-h-[92vh] max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button on Top Right Corner of Video */}
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 sm:-right-12 sm:top-0 z-30 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 hover:border-white/60 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-90"
                aria-label="Fechar vídeo"
              >
                <FaTimes className="text-lg" />
              </button>

              {/* 9:16 Video Player Container with full controls */}
              <div className="relative aspect-[9/16] h-[72vh] sm:h-[78vh] max-h-[760px] w-auto max-w-[90vw] rounded-2xl overflow-hidden bg-black border-2 border-purple-500/40 shadow-2xl shadow-purple-500/40">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&controls=1&rel=0&playsinline=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Video Info & CTA */}
              <div className="mt-3.5 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left px-2">
                <div className="max-w-md">
                  <span className="text-xs text-purple-400 font-extrabold uppercase tracking-wider block">
                    {activeVideo.badge}
                  </span>
                  <h3 className="text-sm font-bold text-white line-clamp-1">{activeVideo.title}</h3>
                </div>
                <a
                  href={`https://wa.me/5511930188184?text=Olá Gustavo! Vi a solução "${encodeURIComponent(
                    activeVideo.title
                  )}" no site e gostaria de aplicar essa estratégia na minha marca.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md"
                >
                  <FaWhatsapp className="text-sm" />
                  <span>Quero aplicar no meu negócio</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
