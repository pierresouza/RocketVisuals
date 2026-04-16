"use client";

export default function Problem() {
  return (
    <section id="problema" className="bg-linear-to-b from-black to-gray-900 py-20">
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-black mb-4">PROBLEMA</h2>
        <p className="text-xl text-gray-400 mb-12">A realidade que a maioria dos negócios enfrenta</p>
        <p className="text-3xl md:text-4xl font-black mb-12 max-w-4xl">Por que a maioria dos vídeos não gera resultado?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            className="bg-linear-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-xl p-8 hover:border-red-500/60 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-4xl mb-4">❌</div>
            <h3 className="text-2xl font-bold mb-4">Vídeos improvisados</h3>
            <p className="text-gray-400">Sem planejamento, sem briefing, sem estratégia. Resultado? Conteúdo que não vende.</p>
          </div>
          <div
            className="bg-linear-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-xl p-8 hover:border-orange-500/60 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4">Sem direção criativa</h3>
            <p className="text-gray-400">Falta de visão estratégica e storytelling. O vídeo não conecta com a audiência.</p>
          </div>
          <div
            className="bg-linear-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-xl p-8 hover:border-yellow-500/60 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-4xl mb-4">🛍️</div>
            <h3 className="text-2xl font-bold mb-4">Produto parece comum</h3>
            <p className="text-gray-400">Sem VFX, sem efeitos visuais, sem diferenciação. Se perde entre a concorrência.</p>
          </div>
          <div
            className="bg-linear-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/30 rounded-xl p-8 hover:border-pink-500/60 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-4xl mb-4">📉</div>
            <h3 className="text-2xl font-bold mb-4">Marca perde atenção</h3>
            <p className="text-gray-400">Resultado negativo em vendas, engajamento e reconhecimento de marca.</p>
          </div>
        </div>
        <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-xl p-8 text-center mb-16">
          <p className="text-3xl md:text-4xl font-black text-white">Eu faço o cliente desejar. 🔥</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-black text-red-400 mb-2">72%</div>
            <p className="text-gray-400">dos vídeos em redes sociais são ignorados nos primeiros 3 segundos</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-black text-orange-400 mb-2">85%</div>
            <p className="text-gray-400">das empresas perdem oportunidades por falta de conteúdo estratégico</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl font-black text-yellow-400 mb-2">3x</div>
            <p className="text-gray-400">mais conversão com vídeo cinemático vs conteúdo comum</p>
          </div>
        </div>
      </div>
    </section>
  );
}
