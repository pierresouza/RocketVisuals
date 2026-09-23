"use client";

export default function VideoReel() {
  const handleScrollToHero = () => {
    const el = document.getElementById("hero");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="reel"
      className="relative w-full h-[70vh] md:h-[88vh] lg:h-screen overflow-hidden bg-black flex items-end justify-center !pt-0"
    >
      {/* Background YouTube Video Reel without overlapping text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <iframe
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "100vh",
            minWidth: "177.78vh",
            minHeight: "56.25vw",
            transform: "translate(-50%, -50%)",
            border: 0,
          }}
          className="pointer-events-none scale-105"
          src="https://www.youtube.com/embed/siMzw7ScHNk?autoplay=1&mute=1&loop=1&playlist=siMzw7ScHNk&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1"
          title="Rocket Visuals Demo Reel 2026"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          tabIndex={-1}
        />
      </div>

      {/* Subtle top shade for header contrast */}
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/80 via-black/30 to-transparent pointer-events-none z-10" />

      {/* Subtle bottom gradient to blend seamlessly into the Hero section */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      {/* Reel Pill Badge and Scroll Indicator */}
      <div className="relative z-20 pb-8 flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-widest text-gray-300">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>Demo Reel 2026 • Gustavo Junior</span>
        </div>

        <button
          onClick={handleScrollToHero}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/70 hover:bg-black/95 border border-white/25 hover:border-white/60 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-black/80 group"
          aria-label="Rolar para a apresentação da Rocket Visuals"
        >
          <span>Conheça a Rocket Visuals</span>
          <span className="transition-transform group-hover:translate-y-0.5">↓</span>
        </button>
      </div>
    </section>
  );
}
