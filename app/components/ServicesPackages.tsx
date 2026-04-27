"use client";

export default function ServicesPackages() {
  const packages = [
    {
      name: "STARTER (PRESENÇA)",
      subtitle: "Para começar a gerar presença digital",
      features: ["1 criativo", "Roteiro e storyboard", "1 revisão", "Produção e Pós produção cinemática", "1 post por IA"],
      timeline: "2-5 dias",
      color: "blue",
    },
    {
      name: "PROFESSIONAL (CRESCIMENTO)",
      subtitle: "Para quem busca crescimento",
      features: ["1 criativo Cinemático", "Roteiro e storyboard", "3 revisões", "1 Produção VFX", "1 post por IA", "Motion Graphics"],
      timeline: "10-15 dias",
      color: "purple",
      popular: true,
    },
    {
      name: "HERO PREMIUM",
      subtitle: "Para dominar seu mercado",
      features: ["1 criativo VFX PREMIUM", "Roteiro e storyboard", "5 revisões", "2 criativos cinemáticos", "2 Posts por IA", "Motion Graphics"],
      timeline: "20-25 dias",
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
