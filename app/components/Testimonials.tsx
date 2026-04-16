"use client";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "Aumentamos nossas conversões em 320% após trabalhar com Gustavo. O vídeo foi exatamente o que precisávamos para destacar nossa marca.",
      author: "Rafael M.",
      role: "CEO E-commerce Fashion",
      color: "blue",
    },
    {
      rating: 5,
      text: "O que mais gostei foi a qualidade cinematográfica aliada à estratégia. Não era só um vídeo bonito, era um vídeo que vendia.",
      author: "Marina L.",
      role: "Diretora de Marketing SaaS",
      color: "purple",
    },
    {
      rating: 5,
      text: "Gustavo entendeu perfeitamente a visão da marca. Entrega rápida, comunicação clara, e resultados acima das expectativas.",
      author: "Carlos A.",
      role: "Founder Agência Digital",
      color: "pink",
    },
  ];

  return (
    <section className="bg-linear-to-b from-gray-950 to-black py-16">
      <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-black mb-12 text-center text-white">O que Clientes Dizem</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
              <div className="flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-300 mb-6 italic">{testimonial.text}</p>
              <div className="border-t border-gray-800 pt-4">
                <p className="font-bold text-white text-sm">{testimonial.author}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
