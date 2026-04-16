"use client";

interface Stat {
  value: string;
  label: string;
}

export default function Stats() {
  const stats: Stat[] = [
    { label: "Projetos", value: "150+" },
    { label: "Clientes Satisfeitos", value: "89%" },
    { label: "Crescimento Médio", value: "340%" },
    { label: "Anos Experiência", value: "8+" },
  ];

  return (
    <section className="bg-black border-y border-gray-800 py-16">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
