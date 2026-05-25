"use client";

import Image from "next/image";

export default function Solution() {
  const solutions = [
    {
      title: "Estética Cinemática",
      description: "Qualidade que prende a atenção e posiciona sua marca como premium.",
      image: "https://drive.google.com/uc?export=view&id=1FKoZnSffRtxy91W_6fM74I7g1uOzNXCR",
      delay: "100",
    },
    {
      title: "Efeitos Visuais",
      description: "Diferenciação real que faz seu conteúdo se destacar.",
      image: "https://drive.google.com/uc?export=view&id=1ozONjJzuJVcbW1A4Os2kSEaDHkt4xXXW",
      delay: "200",
    },
    {
      title: "Narrativa Forte",
      description: "Storytelling pensado para gerar desejo.",
      image: "https://drive.google.com/uc?export=view&id=1qkIoLvSDfZd_5YwliIwxWRg9dEx-wN2l",
      delay: "300",
    },
    {
      title: "Impacto Imediato",
      description: "Conteúdo pensado para converter, não só impressionar.",
      image: "https://drive.google.com/uc?export=view&id=1rg_2KMVw2ULLyYNu_8CjD6iWwb2yERVu",
      delay: "400",
    },
  ];

  return (
    <section id="solucao" className="bg-black relative overflow-hidden py-20">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-96 mx-auto" data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase">A Solução</h2>
        <p className="text-xl text-gray-400 mb-12">Como transformamos conteúdos em resultados</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-4 justify-items-center">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative aspect-9/16 w-full max-w-82.5 overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
              data-aos="fade-up"
              data-aos-delay={solution.delay}
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                unoptimized
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="max-w-md space-y-3">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
                    Solução
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-tight">{solution.title}</h3>
                  <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-md">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
