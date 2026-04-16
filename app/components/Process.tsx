"use client";

export default function Process() {
  const steps = [
    { number: "1", title: "Briefing", color: "blue", description: "Conversamos sobre sua visão, objetivos, público-alvo e orçamento. Sem detalhes omitidos." },
    { number: "2", title: "Direção Criativa", color: "purple", description: "Desenvolvimento da estratégia visual, roteiro, storyboard e conceituação do projeto." },
    { number: "3", title: "Produção", color: "pink", description: "Filmagem em alta qualidade, gravação de conteúdo e captura de todos os elementos." },
    { number: "4", title: "Pós Produção + VFX", color: "cyan", description: "Edição profissional, cor grading, efeitos visuais e sound design de qualidade cinema." },
    { number: "5", title: "Entrega + Suporte", color: "green", description: "Projeto finalizado em todos os formatos. Suporte pós-lançamento e otimizações conforme necessário." },
  ];

  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    pink: "from-pink-500 to-pink-600",
    cyan: "from-cyan-500 to-cyan-600",
    green: "from-green-500 to-green-600",
  };

  return (
    <section id="processo" className="bg-linear-to-b from-gray-900 to-black py-20">
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-black mb-4">PROCESSO</h2>
        <p className="text-xl text-gray-400 mb-12">Metodologia comprovada e resultados garantidos</p>
        <p className="text-3xl md:text-4xl font-black mb-12 max-w-3xl">Como funciona trabalhar comigo</p>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start group" data-aos="fade-right" data-aos-delay={index * 100 + 100}>
              <div className="relative shrink-0">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br ${colorMap[step.color as keyof typeof colorMap]} text-white font-black text-2xl`}>
                  {step.number}
                </div>
                {index < steps.length - 1 && <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-linear-to-b from-${step.color}-500 to-transparent`}></div>}
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
