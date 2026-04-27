"use client";

export default function FAQ() {
  const faqs = [
    {
      question: "💰 Quanto custa um vídeo?",
      answer: "Depende da complexidade do projeto e do impacto que você quer gerar. Cada projeto é único! Não é sobre o vídeo – é sobre resultado.",
      color: "blue",
    },
    {
      question: "⏱️ Quanto tempo leva para produzir?",
      answer: "Tudo depende da complexidade. Após a reunião de briefing e definição da estratégia, o projeto inicia seguindo o planejamento aprovado no roteiro, tudo para otimizar a produção e evitar retrabalho em alterações futuras. Todos criativos são exclusivos e individuais, mas o prazo mínimo é de 2 dias.",
      color: "purple",
    },
    {
      question: "🎯 Como sei que é para mim?",
      answer: "Os vídeos são direcionados para quem quer criar um posicionamento digital forte, fugindo dos conteúdos genéricos e se destacar da concorrência. Hoje todo mundo posta e mostra seus produtos e serviços, mas quem domina a atenção e gera desejo? muda o jogo.",
      color: "pink",
    },
    {
      question: "📊 Para quais marcas e nichos?",
      answer: "Trabalhamos com qualquer marca: e-commerce, SaaS, educação, lifestyle, tech, agências, etc. A estratégia será estudada dentro do nicho e adaptada para como comunicar sua mensagem, gerando desejo e aumentando a percepção de valor.",
      color: "green",
    },
    {
      question: "🤝 Qual o processo para começar?",
      answer: "O processo é simples: (1) entre em contato pelo whatsapp; (2) Realizamos uma call de até 30 min para entender suas necessidades, dores e objetivos; (3) Apresento a proposta customizada (4) assinamos o contrato e começamos!",
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
