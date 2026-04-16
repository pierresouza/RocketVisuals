"use client";

export default function FAQ() {
  const faqs = [
    {
      question: "💰 Qual é o valor de um projeto?",
      answer:
        "Cada projeto é único! Os valores variam de R$ 2.500 (vídeos simples) até R$ 50.000+ (campanhas enterprise). Oferço consultoria gratuita para definir o escopo e investimento ideal para sua necessidade.",
      color: "blue",
    },
    {
      question: "⏱️ Quanto tempo leva um projeto?",
      answer: "Dependendo da complexidade: Vídeos simples 2-3 semanas, Projetos médios 4-6 semanas, Campanhas completas 8-12 semanas. Prazos ágeis sob demanda com suplemento.",
      color: "purple",
    },
    {
      question: "📊 Como meço os resultados?",
      answer: "Acompanhamos KPIs como: Views, Engagement Rate, CTR, Conversão, ROI e Alcance. Fornecemos relatórios mensais de performance e otimizações contínuas.",
      color: "pink",
    },
    {
      question: "🎯 Vocês trabalham com qual tipo de marca?",
      answer: "Trabalhamos com qualquer marca: e-commerce, SaaS, educação, lifestyle, tech, agências, etc. Temos expertise em diversos setores e sabemos como comunicar sua mensagem.",
      color: "green",
    },
    {
      question: "🤝 Qual é o processo de começar?",
      answer: "Simples: (1) Fale comigo pelo WhatsApp, (2) Fazemos uma call para entender sua necessidade, (3) Envio proposta customizada, (4) Assinamos contrato e começamos!",
      color: "cyan",
    },
  ];

  const colorMap = {
    blue: "blue",
    purple: "purple",
    pink: "pink",
    green: "green",
    cyan: "cyan",
  };

  return (
    <section className="bg-black border-t border-gray-800 py-16">
      <div className="w-full max-w-4xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-black mb-12 text-center text-white">Perguntas Frequentes</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
              <h4 className="text-xl font-bold text-white mb-3">{faq.question}</h4>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
