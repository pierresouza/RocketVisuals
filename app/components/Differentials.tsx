"use client";

export default function Differentials() {
  return (
    <section className="bg-gray-950 border-t border-gray-800 py-16">
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h3 className="text-3xl font-black mb-4 text-white text-center">Por que escolher Rocket Visuals?</h3>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Somos mais que uma produtora. Somos seus parceiros estratégicos em transformação visual.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-lg p-6" data-aos="fade-right" data-aos-delay="100">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-lg font-bold text-white mb-2">Resultados Comprovados</h4>
            <p className="text-gray-400 text-sm">Clientes experimentam aumento de 340% em engajamento e 280% em conversão média.</p>
          </div>
          <div className="bg-linear-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg p-6" data-aos="fade-left" data-aos-delay="100">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-lg font-bold text-white mb-2">Entrega Rápida</h4>
            <p className="text-gray-400 text-sm">Projetos entregues em prazos ágeis sem comprometer a qualidade cinematográfica.</p>
          </div>
          <div className="bg-linear-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-lg p-6" data-aos="fade-right" data-aos-delay="200">
            <div className="text-3xl mb-3">💡</div>
            <h4 className="text-lg font-bold text-white mb-2">Inovação Constante</h4>
            <p className="text-gray-400 text-sm">Uso de IA, Motion Capture, Real-Time VFX e tecnologias de ponta.</p>
          </div>
          <div className="bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6" data-aos="fade-left" data-aos-delay="200">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="text-lg font-bold text-white mb-2">Parceria Estratégica</h4>
            <p className="text-gray-400 text-sm">Não apenas produzimos, consultamos estratégia para maximizar ROI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
