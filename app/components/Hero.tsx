"use client";

export default function Hero() {
  return (
    <section id="hero" className="bg-linear-to-b from-gray-900 to-black relative overflow-hidden min-h-screen flex items-center py-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <div className="mb-12 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">ROCKET</span> VISUALS
          </h1>
          <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">Uma Experiência Audiovisual</span>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200 text-center font-light">
            Mais do que vídeos bonitos, criamos experiências visuais que conectam. A Rocket Visuals transforma sua visão em{" "}
            <span className="font-bold text-white">conteúdo com alma, estratégia e excelência cinematográfica.</span>
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <button className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 rounded-lg text-lg">VER PROJETOS</button>
          <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 rounded-lg text-lg">
            FALAR NO WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
}
