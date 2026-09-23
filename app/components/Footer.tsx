"use client";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-400">
            <a href="/" className="hover:text-white transition-colors duration-200">
              Início
            </a>
            <span className="text-gray-700">•</span>
            <a href="/politica-de-privacidade" className="hover:text-blue-400 transition-colors duration-200 font-medium text-gray-300">
              Política de Privacidade
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://wa.me/5511930188184?text=Olá! Gostaria de falar sobre os serviços da Rocket Visuals."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors duration-200"
            >
              Fale Conosco
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Desenvolvido com ❤️ por{" "}
            <a href="https://pierresouza.netlify.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-blue-400 transition-colors duration-300 underline">
              Pierre Souza
            </a>{" "}
            • Desenvolvedor Frontend
          </p>
          <p className="text-xs text-gray-500">© 2026 Rocket Visuals. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
