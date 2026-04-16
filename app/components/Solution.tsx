"use client";

export default function Solution() {
  return (
    <section id="solucao" className="bg-black relative overflow-hidden py-20">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-black mb-4">SOLUÇÃO ROCKET</h2>
        <p className="text-xl text-gray-400 mb-12">O que torna Rocket Visuals diferente</p>
        <p className="text-3xl md:text-4xl font-black mb-12 max-w-4xl">Como a Rocket Visuals muda seu jogo</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="group relative bg-linear-to-br from-blue-900/40 to-blue-900/20 border border-blue-500/30 rounded-xl p-8 hover:border-blue-400 transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Estética Cinemática</h3>
              <p className="text-gray-300">Visuals de alto nível cinematográfico. Cada frame é uma obra de arte.</p>
            </div>
          </div>

          <div
            className="group relative bg-linear-to-br from-purple-900/40 to-purple-900/20 border border-purple-500/30 rounded-xl p-8 hover:border-purple-400 transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/40 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Efeitos Visuais Premium</h3>
              <p className="text-gray-300">VFX que impressionam e deixam marca. Produção Hollywood no seu negócio.</p>
            </div>
          </div>

          <div
            className="group relative bg-linear-to-br from-pink-900/40 to-pink-900/20 border border-pink-500/30 rounded-xl p-8 hover:border-pink-400 transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-500/40 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Narrativa Forte</h3>
              <p className="text-gray-300">Histórias que conectam emocionalmente. Seu produto vira desejo.</p>
            </div>
          </div>

          <div
            className="group relative bg-linear-to-br from-green-900/40 to-green-900/20 border border-green-500/30 rounded-xl p-8 hover:border-green-400 transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl group-hover:bg-green-500/40 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Impacto Imediato</h3>
              <p className="text-gray-300">Resultados mensuráveis. Conversão, vendas e crescimento exponencial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
