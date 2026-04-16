"use client";

export default function ServicesPackages() {
  const packages = [
    {
      name: "STARTER",
      subtitle: "Para começar",
      features: ["1 Vídeo 30-60s", "Roteiro e Storyboard", "Gravação Profissional", "Edição e Cor", "2 Revisões"],
      timeline: "2-3 semanas",
      color: "blue",
    },
    {
      name: "PROFESSIONAL",
      subtitle: "Crescimento garantido",
      features: ["3 Vídeos 30-90s", "Estratégia Criativa", "Produção Multi-Locação", "Edição + VFX", "Motion Graphics", "5 Revisões"],
      timeline: "4-6 semanas",
      color: "purple",
      popular: true,
    },
    {
      name: "ENTERPRISE",
      subtitle: "Transformação completa",
      features: ["5+ Vídeos Customizados", "Consultoria Estratégica", "Produção com Equipamento Cinema", "VFX e 3D Avançado", "Sound Design Profissional", "Suporte Pós-Produção"],
      timeline: "8-12 semanas",
      color: "pink",
    },
  ];

  return (
    <section className="bg-linear-to-b from-black to-gray-950 border-t border-gray-800 py-16">
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h3 className="text-3xl font-black mb-12 text-center text-white">Pacotes e Soluções</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition-all duration-300 relative ${
                pkg.popular
                  ? "bg-linear-to-br from-blue-900/30 to-purple-900/30 border border-purple-500 hover:border-purple-400"
                  : "bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500"
              }`}
              data-aos="zoom-in"
              data-aos-delay={index * 100 + 100}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">MAIS POPULAR</div>
              )}
              <h4 className="text-2xl font-black text-white mb-2">{pkg.name}</h4>
              <p className={`font-bold mb-6 ${pkg.color === "purple" ? "text-purple-300" : pkg.color === "pink" ? "text-pink-400" : "text-blue-400"}`}>{pkg.subtitle}</p>
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <p key={i} className="text-gray-300">
                    <strong>✓</strong> {feature}
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-400 border-t border-gray-700 pt-4">Prazo: {pkg.timeline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
