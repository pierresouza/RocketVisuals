"use client";

export default function Differentials() {
  return (
    <section className="bg-gray-950 border-t border-gray-800 py-16">
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h3 className="text-3xl font-black mb-4 text-white text-center uppercase">Por que escolher a Rocket Visuals?</h3>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Seu parceiro estratégico em posicionamento e comunicação audiovisual.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-lg p-6" data-aos="fade-right" data-aos-delay="100">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-lg font-bold text-white mb-2 uppercase">Resultados Comprovados</h4>
            <p className="text-gray-400 text-sm">Clientes experimentam um aumento de 10x mais alcance.</p>
          </div>
          <div className="bg-linear-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg p-6" data-aos="fade-left" data-aos-delay="100">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-lg font-bold text-white mb-2 uppercase">Entrega Rápida</h4>
            <p className="text-gray-400 text-sm">Prazos pensados para uma entrega otimizada que não comprometa a qualidade.</p>
          </div>
          <div className="bg-linear-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-lg p-6" data-aos="fade-right" data-aos-delay="200">
            <div className="text-3xl mb-3">💡</div>
            <h4 className="text-lg font-bold text-white mb-2 uppercase">Inovação Constante</h4>
            <p className="text-gray-400 text-sm">Uso de I.A integrada aos efeitos visuais VFX.</p>
          </div>
          <div className="bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6" data-aos="fade-left" data-aos-delay="200">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="text-lg font-bold text-white mb-2 uppercase">Parceria Estratégica</h4>
            <p className="text-gray-400 text-sm">Não é apenas produção, é crescimento com consultoria estratégica.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
