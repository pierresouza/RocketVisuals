"use client";

export default function Portfolio() {
  const projects = [
    {
      title: "AUTOMOTIVO",
      description: "Campanha de lançamento de veículo premium com efeitos VFX cinemáticos",
      icon: "🏎️",
      color: "from-red-600 to-orange-600",
      tags: ["VFX 4K", "Motion Design", "3D"],
    },
    {
      title: "PRODUTO HERO",
      description: "Filme comercial de produto com narrativa emocional e storytelling impactante",
      icon: "✨",
      color: "from-green-600 to-emerald-600",
      tags: ["Cinematografia", "Storytelling", "Edição"],
    },
    {
      title: "CRIATIVO IA",
      description: "Geração de conteúdo criativo com IA + direção humana + edição profissional",
      icon: "🤖",
      color: "from-blue-600 to-indigo-600",
      tags: ["IA Criativa", "Automation", "Escalável"],
    },
  ];

  return (
    <section id="portfolio" className="bg-linear-to-b from-gray-900 to-black py-20">
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-black mb-4">PORTFÓLIO</h2>
        <p className="text-xl text-gray-400 mb-12">Projetos que transformaram marcas em fenômenos virais</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-gray-800 rounded-xl overflow-hidden" data-aos="zoom-in" data-aos-delay={index * 100 + 100}>
              <div className={`relative bg-linear-to-br ${project.color} w-full aspect-video flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-50 bg-pattern"></div>
                <div className="text-6xl">{project.icon}</div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-black mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-700/50 text-gray-200 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-6 w-full">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">Ver Projeto</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
