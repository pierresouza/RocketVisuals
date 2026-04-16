"use client";

export default function CTA() {
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/rocketvisuals-vfx", "_blank");
  };

  return (
    <section id="cta" className="bg-linear-to-b from-black to-gray-950 relative overflow-hidden py-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">PRONTO PARA TRANSFORMAR?</h2>
          <p className="text-xl text-gray-400 mb-2">Sua marca merece conteúdo que venda</p>
          <p className="text-gray-500">Vamos conversar sobre como elevar sua estratégia de conteúdo ao próximo nível</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            className="bg-linear-to-br from-blue-900/40 to-blue-900/20 border border-blue-500/30 rounded-xl p-8 hover:border-blue-400 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-3">Chat Rápido</h3>
            <p className="text-gray-300 mb-6 flex-grow">Fale comigo diretamente no WhatsApp. Respondo em menos de 24h.</p>
            <a
              href="https://wa.me/5511930188184?text=Olá! Gostaria de saber mais sobre seus serviços de produção audiovisual e pacotes."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-linear-to-r from-green-500 to-green-600 text-white font-bold text-center rounded-lg hover:shadow-lg hover:shadow-green-600/50 transition-all duration-300 text-base uppercase tracking-wider"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div
            className="bg-linear-to-br from-purple-900/40 to-purple-900/20 border border-purple-500/30 rounded-xl p-8 hover:border-purple-400 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-white mb-3">Email Direto</h3>
            <p className="text-gray-300 mb-6 flex-grow">Envie seus detalhes e propostas. Ótimo para briefings completos.</p>
            <a
              href="mailto:contato@rocketvisuals.com"
              className="block w-full py-4 px-6 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold text-center rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 text-base uppercase tracking-wider"
            >
              Enviar Email
            </a>
          </div>

          <div
            className="bg-linear-to-br from-pink-900/40 to-pink-900/20 border border-pink-500/30 rounded-xl p-8 hover:border-pink-400 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-white mb-3">Consultoria Gratuita</h3>
            <p className="text-gray-300 mb-6 flex-grow">Agende uma call de 30min para explorar seu projeto.</p>
            <button
              onClick={handleCalendlyClick}
              className="block w-full py-4 px-6 bg-linear-to-r from-pink-500 to-red-500 text-white font-bold text-center rounded-lg hover:shadow-lg hover:shadow-pink-600/50 transition-all duration-300 text-base uppercase tracking-wider cursor-pointer"
            >
              Agendar Call
            </button>
          </div>
        </div>

        <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-xl p-12 text-center" data-aos="zoom-in">
          <p className="text-2xl md:text-3xl font-black text-white mb-4">Não deixe sua marca invisível no feed</p>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Juntos, vamos criar conteúdo que não apenas chama atenção, mas que vende. A Rocket Visuals está pronta para levar sua marca ao próximo nível.
          </p>
          <p className="text-sm text-gray-400">⏱️ Respondo em menos de 24h • 🎬 Consultoria estratégica gratuita • ✅ Sem compromissos iniciais</p>
        </div>
      </div>
    </section>
  );
}
