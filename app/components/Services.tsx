"use client";

export default function Services() {
  const services = [
    {
      icon: "🎬",
      title: "CONTEÚDO CINEMÁTICO",
      description: "Produção audiovisual de alto padrão cinematográfico. Roteiro, filmagem em 4K, direção criativa e edição profissional para destacar sua marca.",
      features: ["Gravação em RED ou Cinema", "Direção Criativa Premium", "Cor e Grading Profissional"],
      color: "purple",
    },
    {
      icon: "🤖",
      title: "CRIATIVOS IA",
      description: "Geração inteligente de conteúdo usando IA avançada. Mais rápido, escalável e alinhado com sua estratégia sem perder qualidade criativa.",
      features: ["Geração Automática", "Personalização em Massa", "Escalabilidade Infinita"],
      color: "blue",
    },
    {
      icon: "✨",
      title: "VFX PREMIUM",
      description: "Efeitos visuais de classe mundial que transformam ideias em realidade. Motion design, 3D, color grading e composição de excelência.",
      features: ["3D Animation Avançado", "Motion Graphics Profissional", "Composição Cinematográfica"],
      color: "pink",
    },
  ];

  return (
    <section id="servicos" className="bg-black py-20">
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-black mb-4">SERVIÇOS</h2>
        <p className="text-xl text-gray-400 mb-12">Soluções completas de conteúdo visual estratégico</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-slate-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              data-aos="flip-left"
              data-aos-delay={index * 100 + 100}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <p key={i} className="text-sm text-gray-400">
                      ✓ {feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
