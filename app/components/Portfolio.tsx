"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  FaPlay,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaWhatsapp,
  FaMobileAlt,
} from "react-icons/fa";

export interface PortfolioVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  fallbackThumbnail: string;
  category: string;
}

const INITIAL_VIDEOS: PortfolioVideo[] = [
  {
    id: "GDQ9VaxA3BM",
    title: "I.A para vídeos automotivos",
    duration: "0:07",
    thumbnail: "https://i.ytimg.com/vi/GDQ9VaxA3BM/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/GDQ9VaxA3BM/mqdefault.jpg",
    category: "Automotivo",
  },
  {
    id: "mCTSufrvAE4",
    title: "Vídeo perfume Cebolinha - Posicionamento",
    duration: "0:18",
    thumbnail: "https://i.ytimg.com/vi/mCTSufrvAE4/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/mCTSufrvAE4/mqdefault.jpg",
    category: "Produto Hero",
  },
  {
    id: "NdbhInXJZ80",
    title: "BARBIE VFX TRANSIÇÕES",
    duration: "0:08",
    thumbnail: "https://i.ytimg.com/vi/NdbhInXJZ80/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/NdbhInXJZ80/mqdefault.jpg",
    category: "VFX & Transições",
  },
  {
    id: "pO0uIrTR_68",
    title: "VFX Para marcas",
    duration: "0:26",
    thumbnail: "https://i.ytimg.com/vi/pO0uIrTR_68/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/pO0uIrTR_68/mqdefault.jpg",
    category: "VFX & Marcas",
  },
  {
    id: "eeIVLZthwqI",
    title: "AUTOMOTIVO ELEANOR MUSTANG",
    duration: "0:18",
    thumbnail: "https://i.ytimg.com/vi/eeIVLZthwqI/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/eeIVLZthwqI/mqdefault.jpg",
    category: "Automotivo",
  },
  {
    id: "zyC0kESa4-o",
    title: "VFX PRODUTOS - MANSÃO MAROMBA",
    duration: "0:08",
    thumbnail: "https://i.ytimg.com/vi/zyC0kESa4-o/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/zyC0kESa4-o/mqdefault.jpg",
    category: "Produto Hero",
  },
  {
    id: "jXeChQ9fRfQ",
    title: "PRODUTO HERO - VFX ESCAPE LESTE",
    duration: "0:13",
    thumbnail: "https://i.ytimg.com/vi/jXeChQ9fRfQ/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/jXeChQ9fRfQ/mqdefault.jpg",
    category: "Produto Hero",
  },
  {
    id: "GwrW-rr4YBI",
    title: "Motion Control com I.A",
    duration: "0:16",
    thumbnail: "https://i.ytimg.com/vi/GwrW-rr4YBI/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/GwrW-rr4YBI/mqdefault.jpg",
    category: "IA Criativa",
  },
  {
    id: "icKJJt_GqSA",
    title: "CRIATIVO IA - PRODUTOS",
    duration: "0:11",
    thumbnail: "https://i.ytimg.com/vi/icKJJt_GqSA/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/icKJJt_GqSA/mqdefault.jpg",
    category: "IA Criativa",
  },
  {
    id: "mTxQ279vjQw",
    title: "CONTEÚDO CINEMÁTICO COM IA",
    duration: "0:55",
    thumbnail: "https://i.ytimg.com/vi/mTxQ279vjQw/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/mTxQ279vjQw/mqdefault.jpg",
    category: "IA Criativa",
  },
  {
    id: "wAZu605viPk",
    title: "VFX IRON MAN",
    duration: "0:32",
    thumbnail: "https://i.ytimg.com/vi/wAZu605viPk/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/wAZu605viPk/mqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "G21W2TR4g4w",
    title: "VFX EXCLUSIVO 2 - PROJETO SUPERMAN",
    duration: "0:09",
    thumbnail: "https://i.ytimg.com/vi/G21W2TR4g4w/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/G21W2TR4g4w/mqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "HgJsh2lj6WA",
    title: "VFX EXCLUSIVO 1 - ENERGÉTICO",
    duration: "0:12",
    thumbnail: "https://i.ytimg.com/vi/HgJsh2lj6WA/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/HgJsh2lj6WA/mqdefault.jpg",
    category: "Produto Hero",
  },
  {
    id: "IjAb4nT9PrQ",
    title: "Efeito VFX LASER OLHOS",
    duration: "0:04",
    thumbnail: "https://i.ytimg.com/vi/IjAb4nT9PrQ/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/IjAb4nT9PrQ/mqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "rdcYtvdP7LY",
    title: "Efeito Voando VFX",
    duration: "0:04",
    thumbnail: "https://i.ytimg.com/vi/rdcYtvdP7LY/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/rdcYtvdP7LY/mqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "JsssbN2tOxg",
    title: "OUTFIT - MOTION CONTROL 2",
    duration: "0:10",
    thumbnail: "https://i.ytimg.com/vi/JsssbN2tOxg/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/JsssbN2tOxg/mqdefault.jpg",
    category: "Motion Control",
  },
  {
    id: "8u8xb1mOa6U",
    title: "ESTÉTICA CINEMÁTICA",
    duration: "0:22",
    thumbnail: "https://i.ytimg.com/vi/8u8xb1mOa6U/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/8u8xb1mOa6U/mqdefault.jpg",
    category: "Cinematográfico",
  },
  {
    id: "0K0lc02wPTw",
    title: "NARRATIVA FORTE",
    duration: "0:12",
    thumbnail: "https://i.ytimg.com/vi/0K0lc02wPTw/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/0K0lc02wPTw/mqdefault.jpg",
    category: "Cinematográfico",
  },
  {
    id: "OIlfbC2bB50",
    title: "Efeito VFX Gêmeos",
    duration: "0:10",
    thumbnail: "https://i.ytimg.com/vi/OIlfbC2bB50/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/OIlfbC2bB50/mqdefault.jpg",
    category: "Efeitos Visuais",
  },
  {
    id: "CalSP2aHshU",
    title: "Projeto Ação I30 Automotivo",
    duration: "1:27",
    thumbnail: "https://i.ytimg.com/vi/CalSP2aHshU/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/CalSP2aHshU/mqdefault.jpg",
    category: "Automotivo",
  },
  {
    id: "YkwCkyMpLbE",
    title: "Vídeo curso Defesa Pessoal Feminina",
    duration: "1:47",
    thumbnail: "https://i.ytimg.com/vi/YkwCkyMpLbE/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/YkwCkyMpLbE/mqdefault.jpg",
    category: "Comercial",
  },
  {
    id: "siMzw7ScHNk",
    title: "Rocket Visuals (DemoReel) 2026",
    duration: "1:52",
    thumbnail: "https://i.ytimg.com/vi/siMzw7ScHNk/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/siMzw7ScHNk/mqdefault.jpg",
    category: "Demo Reel",
  },
  {
    id: "orCVt7UUpyg",
    title: "ENTRE EM CONTATO",
    duration: "0:05",
    thumbnail: "https://i.ytimg.com/vi/orCVt7UUpyg/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/orCVt7UUpyg/mqdefault.jpg",
    category: "Comercial",
  },
  {
    id: "zqv7flghCJs",
    title: "ENTREGA RÁPIDA",
    duration: "0:03",
    thumbnail: "https://i.ytimg.com/vi/zqv7flghCJs/hqdefault.jpg",
    fallbackThumbnail: "https://i.ytimg.com/vi/zqv7flghCJs/mqdefault.jpg",
    category: "Comercial",
  },
];

export default function Portfolio() {
  const [videos, setVideos] = useState<PortfolioVideo[]>(INITIAL_VIDEOS);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [activeVideo, setActiveVideo] = useState<PortfolioVideo | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mount flag for React Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch fresh playlist videos asynchronously
  useEffect(() => {
    async function loadPlaylist() {
      try {
        const res = await fetch("/api/portfolio");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.videos) && data.videos.length > 0) {
            setVideos(data.videos);
          }
        }
      } catch (err) {
        console.error("Erro ao carregar vídeos do portfólio:", err);
      }
    }

    loadPlaylist();
  }, []);

  // Lock body scroll and listen for Escape key when modal is open
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

  const categories = [
    "Todos",
    "Automotivo",
    "Produto Hero",
    "VFX & Transições",
    "IA Criativa",
    "Efeitos Visuais",
  ];

  const filteredVideos =
    selectedCategory === "Todos"
      ? videos
      : videos.filter((v) =>
          v.category?.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClick = (video: PortfolioVideo) => {
    setActiveVideo(video);
  };

  return (
    <section
      id="portfolio"
      className="bg-linear-to-b from-gray-900 via-black to-gray-950 py-24 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6" data-aos="fade-up">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-3">
              <FaMobileAlt />
              <span>Formato Reels &amp; Shorts (9:16)</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-3">
              PORTFÓLIO
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Projetos que transformaram marcas em fenômenos visuais. Clique em qualquer produção para assistir na íntegra.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-xl bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
              aria-label="Rolar para a esquerda"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-xl bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
              aria-label="Rolar para a direita"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                  : "bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800"
              }`}
            >
              {cat} {cat === "Todos" ? `(${videos.length})` : ""}
            </button>
          ))}
        </div>

        {/* 9:16 Video Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 focus:outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          aria-label="Carrossel de vídeos do portfólio"
        >
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => handleCardClick(video)}
              className="group relative w-[220px] sm:w-[260px] md:w-[280px] aspect-[9/16] shrink-0 snap-start rounded-2xl overflow-hidden bg-gray-950 border border-gray-800/80 hover:border-purple-500/60 shadow-xl hover:shadow-2xl hover:shadow-purple-600/25 transition-all duration-400 hover:-translate-y-2 cursor-pointer flex flex-col justify-between select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCardClick(video);
                }
              }}
              aria-label={`Assistir projeto ${video.title}`}
            >
              {/* Reliable HQ Thumbnail Image with no-referrer to prevent CDN blocks */}
              <img
                src={video.thumbnail}
                alt={video.title}
                loading={index < 5 ? "eager" : "lazy"}
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== video.fallbackThumbnail) {
                    e.currentTarget.src = video.fallbackThumbnail;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Shimmer / Contrast Vignette Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/70 pointer-events-none group-hover:via-black/10 transition-colors duration-300" />

              {/* Top Bar: Duration & Tag */}
              <div className="relative z-10 p-3.5 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-[11px] font-bold text-gray-200">
                  <FaClock className="text-blue-400 text-[10px]" />
                  <span>{video.duration || "0:15"}</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-purple-600/80 text-white backdrop-blur-xs">
                  {video.category || "VFX"}
                </span>
              </div>

              {/* Center Play Button with Hover Animation */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(video);
                  }}
                  className="w-14 h-14 rounded-full bg-white/20 group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 border border-white/40 group-hover:border-transparent flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 group-hover:scale-115 shadow-xl group-hover:shadow-purple-500/50 cursor-pointer"
                  aria-label="Reproduzir vídeo"
                >
                  <FaPlay className="text-base ml-1" />
                </button>
              </div>

              {/* Bottom Info: Title & Action */}
              <div className="relative z-10 p-4 pt-6 bg-linear-to-t from-black via-black/90 to-transparent">
                <h3 className="text-sm font-bold text-white line-clamp-2 mb-2 group-hover:text-purple-300 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <span className="text-gray-300 font-medium">9:16 Vertical</span>
                  <span className="font-semibold text-blue-400 group-hover:underline flex items-center gap-1">
                    Assistir <span>↗</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Footer info */}
        <div className="mt-8 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
          <span>💡 Arraste para o lado ou utilize as setas para navegar entre as 24 produções.</span>
        </div>
      </div>

      {/* Video Modal (Mounted into document.body via React Portal to prevent CSS clipping) */}
      {mounted &&
        activeVideo &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6"
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
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&controls=1&rel=0&playsinline=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Video Info & CTA */}
              <div className="mt-3.5 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left px-2">
                <div className="max-w-md">
                  <h3 className="text-sm font-bold text-white line-clamp-1">{activeVideo.title}</h3>
                  <span className="text-xs text-purple-400 font-semibold">{activeVideo.category}</span>
                </div>
                <a
                  href={`https://wa.me/5511930188184?text=Olá Gustavo! Vi o projeto "${encodeURIComponent(
                    activeVideo.title
                  )}" no portfólio e gostaria de um vídeo nesse estilo para minha marca.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md"
                >
                  <FaWhatsapp className="text-sm" />
                  <span>Quero um projeto assim</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
