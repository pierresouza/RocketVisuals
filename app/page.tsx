"use client";

import "aos/dist/aos.css";

export default function Home() {
  const stats = [
    { label: "Projetos", value: "150+" },
    { label: "Clientes Satisfeitos", value: "89%" },
    { label: "Crescimento Médio", value: "340%" },
    { label: "Anos Experiência", value: "8+" },
  ];

  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* 1. HERO SECTION - VIDEO REEL */}
      <section id="hero" className="bg-linear-to-b from-gray-900 to-black relative overflow-hidden min-h-screen flex items-center py-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <div className="mb-8">
            <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Transformação Audiovisual</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            VIDEO <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">REEL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed text-gray-300">
            Transformo produtos comuns em <span className="text-white font-bold">conteúdos impossíveis de ignorar.</span>
          </p>
          <p className="text-lg text-gray-400 mb-12 font-medium">Direção criativa + VFX para marcas gigantes.</p>
          <div className="flex gap-6 flex-wrap">
            <button className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 rounded-lg text-lg">VER PROJETOS</button>
            <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 rounded-lg text-lg">
              FALAR NO WHATSAPP
            </button>
          </div>
        </div>
      </section>

      {/* ESTATÍSTICAS */}
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

      {/* 2. SOBRE O GUSTAVO */}
      <section id="sobre" className="bg-black py-20">
        <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1" data-aos="fade-right">
            <div className="relative bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl w-full aspect-square flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-black text-white text-center">Gustavo Junior</h3>
                <p className="text-white/80 mt-2 text-center px-4">Diretor Criativo & Videomaker</p>
              </div>
            </div>
          </div>
          <div className="flex-1" data-aos="fade-left">
            <h2 className="text-5xl md:text-6xl font-black mb-8">QUEM ESTÁ POR TRÁS</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Sou <span className="text-white font-bold">Gustavo Junior</span>, criador da Rocket Visuals. Com mais de 8 anos de experiência em produção audiovisual, transformei meu conhecimento em
              impacto visual estratégico para marcas que querem se destacar.
            </p>
            <div className="space-y-5">
              <div className="flex items-start">
                <span className="text-blue-500 text-2xl mr-4 shrink-0">▸</span>
                <div>
                  <h3 className="text-white font-bold text-lg">Diretor Criativo & Videomaker</h3>
                  <p className="text-gray-400 text-sm mt-1">Concepção visual de projetos audiovisuais de alto impacto</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 text-2xl mr-4 shrink-0">▸</span>
                <div>
                  <h3 className="text-white font-bold text-lg">Especialista em VFX e Motion Design</h3>
                  <p className="text-gray-400 text-sm mt-1">Efeitos visuais que criam narrativas memoráveis</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-pink-500 text-2xl mr-4 shrink-0">▸</span>
                <div>
                  <h3 className="text-white font-bold text-lg">Estratégia de Conteúdo para Marcas</h3>
                  <p className="text-gray-400 text-sm mt-1">Transformo estratégia criativa em resultados mensuráveis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS E EXPERTISE */}
      <section className="bg-linear-to-b from-black to-gray-950 py-16">
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h3 className="text-3xl font-black mb-8 text-white">Expertise & Ferramentas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-blue-300 mb-4">📹 Produção</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Cinematografia 4K/8K</li>
                <li>✓ Direção Criativa Premium</li>
                <li>✓ Produção de Set Profissional</li>
                <li>✓ Capturas Aéreas (Drone)</li>
                <li>✓ Equipamento Cinema Profissional</li>
              </ul>
            </div>
            <div className="bg-linear-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-purple-300 mb-4">✨ Pós-Produção</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Edição Adobe Premiere Pro</li>
                <li>✓ Color Grading DaVinci Resolve</li>
                <li>✓ Motion Graphics After Effects</li>
                <li>✓ VFX Cinema 4D & Nuke</li>
                <li>✓ Sound Design & Mix Profissional</li>
              </ul>
            </div>
            <div className="bg-linear-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-pink-300 mb-4">🎯 Estratégia</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Planejamento de Conteúdo</li>
                <li>✓ Storytelling Estratégico</li>
                <li>✓ Otimização para Redes Sociais</li>
                <li>✓ Analytics & Performance</li>
                <li>✓ Consultoria em Branding Visual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA */}
      <section id="problema" className="bg-linear-to-b from-black to-gray-900 py-20">
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4">PROBLEMA</h2>
          <p className="text-xl text-gray-400 mb-12">A realidade que a maioria dos negócios enfrenta</p>
          <p className="text-3xl md:text-4xl font-black mb-12 max-w-4xl">Por que a maioria dos vídeos não gera resultado?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
              className="bg-linear-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-xl p-8 hover:border-red-500/60 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold mb-4">Vídeos improvisados</h3>
              <p className="text-gray-400">Sem planejamento, sem briefing, sem estratégia. Resultado? Conteúdo que não vende.</p>
            </div>
            <div
              className="bg-linear-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-xl p-8 hover:border-orange-500/60 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold mb-4">Sem direção criativa</h3>
              <p className="text-gray-400">Falta de visão estratégica e storytelling. O vídeo não conecta com a audiência.</p>
            </div>
            <div
              className="bg-linear-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-xl p-8 hover:border-yellow-500/60 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-2xl font-bold mb-4">Produto parece comum</h3>
              <p className="text-gray-400">Sem VFX, sem efeitos visuais, sem diferenciação. Se perde entre a concorrência.</p>
            </div>
            <div
              className="bg-linear-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/30 rounded-xl p-8 hover:border-pink-500/60 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-2xl font-bold mb-4">Marca perde atenção</h3>
              <p className="text-gray-400">Resultado negativo em vendas, engajamento e reconhecimento de marca.</p>
            </div>
          </div>
          <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-xl p-8 text-center mb-16">
            <p className="text-3xl md:text-4xl font-black text-white">Eu faço o cliente desejar. 🔥</p>
          </div>

          {/* ESTATÍSTICAS DO PROBLEMA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-black text-red-400 mb-2">72%</div>
              <p className="text-gray-400">dos vídeos em redes sociais são ignorados nos primeiros 3 segundos</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-black text-orange-400 mb-2">85%</div>
              <p className="text-gray-400">das empresas perdem oportunidades por falta de conteúdo estratégico</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-black text-yellow-400 mb-2">3x</div>
              <p className="text-gray-400">mais conversão com vídeo cinemático vs conteúdo comum</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÃO ROCKET */}
      <section id="solucao" className="bg-black relative overflow-hidden py-20">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4">SOLUÇÃO ROCKET</h2>
          <p className="text-xl text-gray-400 mb-12">O que torna Rocket Visuals diferente</p>
          <p className="text-3xl md:text-4xl font-black mb-12 max-w-4xl">Como a Rocket Visuals muda seu jogo</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="group relative bg-linear-to-br from-blue-900/40 to-blue-900/20 border border-blue-500/30 rounded-xl p-8 hover:border-blue-400 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Estética Cinemática</h3>
                <p className="text-gray-300">Visuals de alto nível cinematográfico. Cada frame é uma obra de arte.</p>
              </div>
            </div>

            <div
              className="group relative bg-linear-to-br from-purple-900/40 to-purple-900/20 border border-purple-500/30 rounded-xl p-8 hover:border-purple-400 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Efeitos Visuais Premium</h3>
                <p className="text-gray-300">VFX que impressionam e deixam marca. Produção Hollywood no seu negócio.</p>
              </div>
            </div>

            <div
              className="group relative bg-linear-to-br from-pink-900/40 to-pink-900/20 border border-pink-500/30 rounded-xl p-8 hover:border-pink-400 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-500/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">📖</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Narrativa Forte</h3>
                <p className="text-gray-300">Histórias que conectam emocionalmente. Seu produto vira desejo.</p>
              </div>
            </div>

            <div
              className="group relative bg-linear-to-br from-green-900/40 to-green-900/20 border border-green-500/30 rounded-xl p-8 hover:border-green-400 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl group-hover:bg-green-500/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Impacto Imediato</h3>
                <p className="text-gray-300">Resultados mensuráveis. Conversão, vendas e crescimento exponencial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFÓLIO */}
      <section id="portfolio" className="bg-linear-to-b from-gray-900 to-black py-20">
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4">PORTFÓLIO</h2>
          <p className="text-xl text-gray-400 mb-12">Projetos que transformaram marcas em fenômenos virais</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-gray-800 rounded-xl overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
              <div className="relative bg-linear-to-br from-red-600 to-orange-600 w-full aspect-video flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-50 bg-pattern"></div>
                <div className="text-6xl">🏎️</div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-black mb-3">AUTOMOTIVO</h3>
                <p className="text-gray-300 mb-4">Campanha de lançamento de veículo premium com efeitos VFX cinemáticos</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full">VFX 4K</span>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">Motion Design</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">3D</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-6 w-full">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">Ver Projeto</button>
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-800 rounded-xl overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative bg-linear-to-br from-green-600 to-emerald-600 w-full aspect-video flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-50 bg-pattern"></div>
                <div className="text-6xl">✨</div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-black mb-3">PRODUTO HERO</h3>
                <p className="text-gray-300 mb-4">Filme comercial de produto com narrativa emocional e storytelling impactante</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Cinematografia</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">Storytelling</span>
                  <span className="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">Edição</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-6 w-full">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">Ver Projeto</button>
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-800 rounded-xl overflow-hidden" data-aos="zoom-in" data-aos-delay="300">
              <div className="relative bg-linear-to-br from-blue-600 to-indigo-600 w-full aspect-video flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-50 bg-pattern"></div>
                <div className="text-6xl">🤖</div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-black mb-3">CRIATIVO IA</h3>
                <p className="text-gray-300 mb-4">Geração de conteúdo criativo com IA + direção humana + edição profissional</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">IA Criativa</span>
                  <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">Automation</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">Escalável</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-6 w-full">
                  <button className="w-full py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">Ver Projeto</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS ROCKET */}
      <section className="bg-gray-950 border-t border-gray-800 py-16">
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h3 className="text-3xl font-black mb-4 text-white text-center">Por que escolher Rocket Visuals?</h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Somos mais que uma produtora. Somos seus parceiros estratégicos em transformação visual.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-lg p-6" data-aos="fade-right" data-aos-delay="100">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Resultados Comprovados</h4>
              <p className="text-gray-400 text-sm">Clientes experimentam aumento de 340% em engajamento e 280% em conversão média.</p>
            </div>
            <div className="bg-linear-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg p-6" data-aos="fade-left" data-aos-delay="100">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Entrega Rápida</h4>
              <p className="text-gray-400 text-sm">Projetos entregues em prazos ágeis sem comprometer a qualidade cinematográfica.</p>
            </div>
            <div className="bg-linear-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-lg p-6" data-aos="fade-right" data-aos-delay="200">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="text-lg font-bold text-white mb-2">Inovação Constante</h4>
              <p className="text-gray-400 text-sm">Uso de IA, Motion Capture, Real-Time VFX e tecnologias de ponta.</p>
            </div>
            <div className="bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-6" data-aos="fade-left" data-aos-delay="200">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="text-lg font-bold text-white mb-2">Parceria Estratégica</h4>
              <p className="text-gray-400 text-sm">Não apenas produzimos, consultamos estratégia para maximizar ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVIÇOS */}
      <section id="servicos" className="bg-black py-20">
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4">SERVIÇOS</h2>
          <p className="text-xl text-gray-400 mb-12">Soluções completas de conteúdo visual estratégico</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="group relative bg-linear-to-br from-slate-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🎬</div>
                <h3 className="text-2xl font-black mb-4 text-white">CONTEÚDO CINEMÁTICO</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Produção audiovisual de alto padrão cinematográfico. Roteiro, filmagem em 4K, direção criativa e edição profissional para destacar sua marca.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">✓ Gravação em RED ou Cinema</p>
                  <p className="text-sm text-gray-400">✓ Direção Criativa Premium</p>
                  <p className="text-sm text-gray-400">✓ Cor e Grading Profissional</p>
                </div>
              </div>
            </div>

            <div
              className="group relative bg-linear-to-br from-slate-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-black mb-4 text-white">CRIATIVOS IA</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Geração inteligente de conteúdo usando IA avançada. Mais rápido, escalável e alinhado com sua estratégia sem perder qualidade criativa.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">✓ Geração Automática</p>
                  <p className="text-sm text-gray-400">✓ Personalização em Massa</p>
                  <p className="text-sm text-gray-400">✓ Escalabilidade Infinita</p>
                </div>
              </div>
            </div>

            <div
              className="group relative bg-linear-to-br from-slate-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-pink-500 transition-all duration-300"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">✨</div>
                <h3 className="text-2xl font-black mb-4 text-white">VFX PREMIUM</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Efeitos visuais de classe mundial que transformam ideias em realidade. Motion design, 3D, color grading e composição de excelência.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">✓ 3D Animation Avançado</p>
                  <p className="text-sm text-gray-400">✓ Motion Graphics Profissional</p>
                  <p className="text-sm text-gray-400">✓ Composição Cinematográfica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS DETALHADOS */}
      <section className="bg-linear-to-b from-black to-gray-950 border-t border-gray-800 py-16">
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h3 className="text-3xl font-black mb-12 text-center text-white">Pacotes e Soluções</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* STARTER */}
            <div className="bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300" data-aos="zoom-in" data-aos-delay="100">
              <h4 className="text-2xl font-black text-white mb-2">STARTER</h4>
              <p className="text-blue-400 font-bold mb-6">Para começar</p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">
                  <strong>✓</strong> 1 Vídeo 30-60s
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Roteiro e Storyboard
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Gravação Profissional
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Edição e Cor
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> 2 Revisões
                </p>
              </div>
              <p className="text-sm text-gray-400 border-t border-gray-700 pt-4">Prazo: 2-3 semanas</p>
            </div>

            {/* PROFESSIONAL */}
            <div
              className="bg-linear-to-br from-blue-900/30 to-purple-900/30 border border-purple-500 rounded-xl p-8 hover:border-purple-400 transition-all duration-300 relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">MAIS POPULAR</div>
              <h4 className="text-2xl font-black text-white mb-2">PROFESSIONAL</h4>
              <p className="text-purple-300 font-bold mb-6">Crescimento garantido</p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">
                  <strong>✓</strong> 3 Vídeos 30-90s
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Estratégia Criativa
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Produção Multi-Locação
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Edição + VFX
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Motion Graphics
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> 5 Revisões
                </p>
              </div>
              <p className="text-sm text-gray-400 border-t border-gray-700 pt-4">Prazo: 4-6 semanas</p>
            </div>

            {/* ENTERPRISE */}
            <div
              className="bg-linear-to-br from-pink-900/30 to-red-900/30 border border-pink-500 rounded-xl p-8 hover:border-pink-400 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h4 className="text-2xl font-black text-white mb-2">ENTERPRISE</h4>
              <p className="text-pink-400 font-bold mb-6">Transformação completa</p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">
                  <strong>✓</strong> 5+ Vídeos Customizados
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Consultoria Estratégica
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Produção com Equipamento Cinema
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> VFX e 3D Avançado
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Sound Design Profissional
                </p>
                <p className="text-gray-300">
                  <strong>✓</strong> Suporte Pós-Produção
                </p>
              </div>
              <p className="text-sm text-gray-400 border-t border-gray-700 pt-4">Prazo: 8-12 semanas</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROCESSO */}
      <section id="processo" className="bg-linear-to-b from-gray-900 to-black py-20">
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4">PROCESSO</h2>
          <p className="text-xl text-gray-400 mb-12">Metodologia comprovada e resultados garantidos</p>
          <p className="text-3xl md:text-4xl font-black mb-12 max-w-3xl">Como funciona trabalhar comigo</p>
          <div className="space-y-6">
            <div className="flex items-start group" data-aos="fade-right" data-aos-delay="100">
              <div className="relative shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white font-black text-2xl">1</div>
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-linear-to-b from-blue-500 to-transparent"></div>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Briefing</h3>
                <p className="text-gray-400">Conversamos sobre sua visão, objetivos, público-alvo e orçamento. Sem detalhes omitidos.</p>
              </div>
            </div>

            <div className="flex items-start group" data-aos="fade-right" data-aos-delay="200">
              <div className="relative shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-purple-500 to-purple-600 text-white font-black text-2xl">2</div>
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-linear-to-b from-purple-500 to-transparent"></div>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Direção Criativa</h3>
                <p className="text-gray-400">Desenvolvimento da estratégia visual, roteiro, storyboard e conceituação do projeto.</p>
              </div>
            </div>

            <div className="flex items-start group" data-aos="fade-right" data-aos-delay="300">
              <div className="relative shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-pink-500 to-pink-600 text-white font-black text-2xl">3</div>
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-linear-to-b from-pink-500 to-transparent"></div>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition-colors">Produção</h3>
                <p className="text-gray-400">Filmagem em alta qualidade, gravação de conteúdo e captura de todos os elementos.</p>
              </div>
            </div>

            <div className="flex items-start group" data-aos="fade-right" data-aos-delay="400">
              <div className="relative shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-cyan-600 text-white font-black text-2xl">4</div>
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-linear-to-b from-cyan-500 to-transparent"></div>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Pós Produção + VFX</h3>
                <p className="text-gray-400">Edição profissional, cor grading, efeitos visuais e sound design de qualidade cinema.</p>
              </div>
            </div>

            <div className="flex items-start group" data-aos="fade-right" data-aos-delay="500">
              <div className="shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-green-500 to-green-600 text-white font-black text-2xl">5</div>
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">Entrega + Suporte</h3>
                <p className="text-gray-400">Projeto finalizado em todos os formatos. Suporte pós-lançamento e otimizações conforme necessário.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black border-t border-gray-800 py-16">
        <div className="w-full max-w-4xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-black mb-12 text-center text-white">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-xl font-bold text-white mb-3">💰 Qual é o valor de um projeto?</h4>
              <p className="text-gray-400">
                Cada projeto é único! Os valores variam de R$ 2.500 (vídeos simples) até R$ 50.000+ (campanhas enterprise). Oferço consultoria gratuita para definir o escopo e investimento ideal para
                sua necessidade.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-xl font-bold text-white mb-3">⏱️ Quanto tempo leva um projeto?</h4>
              <p className="text-gray-400">
                Dependendo da complexidade: Vídeos simples 2-3 semanas, Projetos médios 4-6 semanas, Campanhas completas 8-12 semanas. Prazos ágeis sob demanda com suplemento.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-pink-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-xl font-bold text-white mb-3">📊 Como meço os resultados?</h4>
              <p className="text-gray-400">Acompanhamos KPIs como: Views, Engagement Rate, CTR, Conversão, ROI e Alcance. Fornecemos relatórios mensais de performance e otimizações contínuas.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <h4 className="text-xl font-bold text-white mb-3">🎯 Vocês trabalham com qual tipo de marca?</h4>
              <p className="text-gray-400">
                Trabalhamos com qualquer marca: e-commerce, SaaS, educação, lifestyle, tech, agências, etc. Temos expertise em diversos setores e sabemos como comunicar sua mensagem.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
              <h4 className="text-xl font-bold text-white mb-3">🤝 Qual é o processo de começar?</h4>
              <p className="text-gray-400">
                Simples: (1) Fale comigo pelo WhatsApp, (2) Fazemos uma call para entender sua necessidade, (3) Envio proposta customizada, (4) Assinamos contrato e começamos!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMMONIALS */}
      <section className="bg-linear-to-b from-gray-950 to-black py-16">
        <div className="w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-black mb-12 text-center text-white">O que Clientes Dizem</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-300 mb-6 italic">Aumentamos nossas conversões em 320% após trabalhar com Gustavo. O vídeo foi exatamente o que precisávamos para destacar nossa marca.</p>
              <div className="border-t border-gray-800 pt-4">
                <p className="font-bold text-white text-sm">Rafael M.</p>
                <p className="text-gray-500 text-xs">CEO E-commerce Fashion</p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-purple-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-300 mb-6 italic">O que mais gostei foi a qualidade cinematográfica aliada à estratégia. Não era só um vídeo bonito, era um vídeo que vendia.</p>
              <div className="border-t border-gray-800 pt-4">
                <p className="font-bold text-white text-sm">Marina L.</p>
                <p className="text-gray-500 text-xs">Diretora de Marketing SaaS</p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-pink-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-300 mb-6 italic">Gustavo entendeu perfeitamente a visão da marca. Entrega rápida, comunicação clara, e resultados acima das expectativas.</p>
              <div className="border-t border-gray-800 pt-4">
                <p className="font-bold text-white text-sm">Carlos A.</p>
                <p className="text-gray-500 text-xs">Founder Agência Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section id="cta" className="bg-linear-to-b from-black via-blue-950/30 to-black relative overflow-hidden min-h-screen flex items-center py-20">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -z-10"></div>
        <div className="w-full max-w-4xl mx-auto px-6 text-center" data-aos="zoom-in">
          <h2 className="text-6xl md:text-7xl font-black mb-6">Domine o Feed</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">Sua marca merece conteúdo que venda.</p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Vamos conversar sobre como transformar sua estratégia de conteúdo? Estou aqui para ajudar sua marca a crescer e dominar as redes sociais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-12 py-5 bg-linear-to-r from-white to-gray-200 text-black font-black text-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 rounded-xl">
              FALAR NO WHATSAPP
            </button>
            <button className="px-12 py-5 border-2 border-white text-white font-black text-lg hover:bg-white hover:text-black transition-all duration-300 rounded-xl">ENVIAR EMAIL</button>
          </div>
          <p className="text-gray-500 text-sm">Respondo em menos de 24h • Consultoria gratuita</p>
        </div>
      </section>
    </main>
  );
}
