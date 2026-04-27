"use client";

export default function About() {
  return (
    <section id="sobre" className="bg-black py-20">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1" data-aos="fade-right">
          <div className="relative rounded-2xl w-full aspect-square overflow-hidden group" style={{ backgroundImage: "url(/Hero-image.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-8">
              <div className="flex items-end gap-4">
                <div className="text-5xl">🎬</div>
                <div>
                  <h3 className="text-2xl font-black text-white leading-tight">Gustavo Junior</h3>
                  <p className="text-white/90 text-sm mt-1">Diretor Criativo & Videomaker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <h2 className="text-5xl md:text-5xl font-black mb-8">A MENTE POR TRÁS</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            <span className="text-white font-bold">Gustavo Junior</span>, criador da Rocket Visuals. Há mais de 8 anos produzindo conteúdos, com experiência no mercado corporativo, entendi uma coisa: Vídeo não é só conteúdo. É ferramenta de venda e posicionamento. Foi a partir disso que nasceu a Rocket Visuals. Hoje, desenvolvo soluções visuais estratégicas que aumentam percepção de valor, retenção e posicionamento de marcas. Unindo estética cinematográfica, efeitos visuais e estratégia, crio conteúdos que não passam despercebidos. Vídeos bonitos chamam atenção. Vídeos estratégicos geram resultado.
          </p>
          <div className="space-y-5">
            <div className="flex items-start">
              <span className="text-blue-500 text-2xl mr-4 shrink-0">▶</span>
              <div>
                <h3 className="text-white font-bold text-lg">Direção Criativa & Captação cinemática</h3>
                <p className="text-gray-400 text-sm mt-1">Soluções pensados para capturar atenção e gerar impacto real</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-purple-500 text-2xl mr-4 shrink-0">▶</span>
              <div>
                <h3 className="text-white font-bold text-lg">Edição em VFX & Motion Design</h3>
                <p className="text-gray-400 text-sm mt-1">Conteúdos que elevam a marca e criam posicionamento no mercado</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-pink-500 text-2xl mr-4 shrink-0">▶</span>
              <div>
                <h3 className="text-white font-bold text-lg">Estratégia de Conteúdo para Marcas</h3>
                <p className="text-gray-400 text-sm mt-1">Vídeos que não são apenas posts — são ativos que geram resultado no longo prazo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
