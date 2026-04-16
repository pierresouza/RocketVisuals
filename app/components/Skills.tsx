"use client";

export default function Skills() {
  return (
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
  );
}
