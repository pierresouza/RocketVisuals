"use client";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
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
