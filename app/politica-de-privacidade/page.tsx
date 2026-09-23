import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaFileContract,
  FaCookieBite,
  FaArrowLeft,
  FaWhatsapp,
  FaEnvelope,
  FaCheckCircle,
  FaUserCheck,
  FaBuilding,
  FaClock,
  FaShareAlt,
  FaSyncAlt,
  FaPhoneAlt,
  FaInstagram,
  FaGlobe,
  FaFilm,
  FaCalendarAlt,
  FaDollarSign,
  FaArrowRight,
  FaHome,
} from "react-icons/fa";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Rocket Visuals",
  description:
    "Conheça a Política de Privacidade da Rocket Visuals. Saiba como Gustavo Junior / Rocket Visuals coleta, utiliza e protege suas informações com total transparência e segurança.",
  openGraph: {
    title: "Política de Privacidade | Rocket Visuals",
    description:
      "Saiba como Gustavo Junior / Rocket Visuals coleta, utiliza e protege suas informações com total transparência.",
    type: "website",
  },
};

export default function PoliticaDePrivacidade() {
  const tableOfContents = [
    { id: "dados-coletados", label: "1. Dados coletados" },
    { id: "uso-dados", label: "2. Como utilizamos seus dados" },
    { id: "compartilhamento", label: "3. Compartilhamento de informações" },
    { id: "armazenamento-seguranca", label: "4. Armazenamento e segurança" },
    { id: "seus-direitos", label: "5. Seus direitos" },
    { id: "cookies", label: "6. Cookies e tecnologias" },
    { id: "alteracoes", label: "7. Alterações nesta Política" },
    { id: "contato", label: "8. Canal de atendimento" },
  ];

  const dadosList = [
    {
      icon: <FaUserCheck className="text-blue-400 text-xl" />,
      title: "Nome",
      description: "Identificação para atendimento personalizado.",
    },
    {
      icon: <FaWhatsapp className="text-green-400 text-xl" />,
      title: "Número de telefone / WhatsApp",
      description: "Canal principal para alinhamento rápido e retorno comercial.",
    },
    {
      icon: <FaEnvelope className="text-purple-400 text-xl" />,
      title: "Endereço de e-mail",
      description: "Envio de propostas detalhadas, orçamentos e formalização de serviços.",
    },
    {
      icon: <FaBuilding className="text-pink-400 text-xl" />,
      title: "Nome da empresa ou agência",
      description: "Compreensão do ecossistema e nicho da sua marca.",
    },
    {
      icon: (
        <div className="flex gap-1 text-pink-400 text-lg">
          <FaInstagram />
          <FaGlobe />
        </div>
      ),
      title: "Instagram, site ou outras informações voluntárias",
      description: "Análise prévia do seu posicionamento visual e estética atual.",
    },
    {
      icon: <FaFilm className="text-blue-400 text-xl" />,
      title: "Informações sobre o projeto ou serviço desejado",
      description: "Detalhes de escopo: edição, motion design, VFX ou produção audiovisual.",
    },
    {
      icon: (
        <div className="flex gap-1 text-amber-400 text-lg">
          <FaDollarSign />
          <FaCalendarAlt />
        </div>
      ),
      title: "Faixa de investimento e prazo",
      description: "Quando informados, para calibrar a melhor viabilidade e entrega estratégica.",
    },
  ];

  const usosList = [
    "Entrar em contato com você sobre sua solicitação;",
    "Entender suas necessidades e seu projeto;",
    "Elaborar propostas e orçamentos;",
    "Prestar os serviços contratados;",
    "Responder dúvidas e solicitações;",
    "Melhorar nossos serviços e atendimento.",
  ];

  const direitosList = [
    {
      title: "Confirmação e Acesso",
      desc: "Você pode solicitar informações claras sobre o tratamento de seus dados a qualquer momento.",
    },
    {
      title: "Correção de Informações",
      desc: "Solicitar a retificação ou atualização de qualquer dado cadastral incompleto ou incorreto.",
    },
    {
      title: "Exclusão de Dados",
      desc: "Pedir a exclusão de dados pessoais fornecidos, respeitados os prazos legais e contratuais aplicáveis.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 border border-gray-800 group-hover:border-blue-500/50 transition-colors">
              <Image
                src="/LOGO FOGUETE BRANCO.png"
                alt="Logo Rocket Visuals"
                width={26}
                height={26}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span
                className="font-black tracking-wider text-lg"
                style={{
                  backgroundImage: "linear-gradient(45deg, #60a5fa, #a855f7, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ROCKET <span className="text-white">VISUALS</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase -mt-1">
                Gustavo Junior
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-700"
            >
              <FaArrowLeft className="text-xs" />
              <span>Voltar ao site</span>
            </Link>
            <a
              href="https://wa.me/5511930188184?text=Olá! Gostaria de tirar uma dúvida sobre a Política de Privacidade e serviços da Rocket Visuals."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-linear-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-lg shadow-sm hover:shadow-green-500/20 transition-all duration-300"
            >
              <FaWhatsapp className="text-base" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="grow relative overflow-hidden">
        {/* Ambient Light Orbs */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-80 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="pt-12 pb-14 border-b border-gray-800/60">
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                <FaHome className="text-xs" />
                <span>Início</span>
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300 font-medium">Política de Privacidade</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-linear-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 border border-blue-500/30 text-blue-300 mb-6">
              <FaShieldAlt className="text-blue-400" />
              <span>Transparência &amp; Segurança da Informação</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span
                style={{
                  backgroundImage: "linear-gradient(45deg, #60a5fa, #a855f7, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                POLÍTICA DE PRIVACIDADE
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              Esta Política de Privacidade explica com clareza como{" "}
              <strong className="text-white font-semibold">Gustavo Junior / Rocket Visuals</strong> coleta, utiliza e
              protege as informações fornecidas por pessoas interessadas em nossos serviços de edição de vídeo, motion
              design, VFX e produção audiovisual.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-400">
              <div className="flex items-center gap-2 bg-gray-900/80 border border-gray-800 rounded-lg px-3.5 py-2">
                <FaClock className="text-blue-400" />
                <span>
                  Última atualização: <strong className="text-white">11 de agosto de 2026</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900/80 border border-gray-800 rounded-lg px-3.5 py-2">
                <FaUserShield className="text-purple-400" />
                <span>
                  Responsável: <strong className="text-white">Gustavo Junior / Rocket Visuals</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900/80 border border-gray-800 rounded-lg px-3.5 py-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-gray-300">Tempo estimado de leitura: ~3 min</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Sticky Sidebar */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Sticky Sidebar / Navigation */}
              <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                <div className="bg-gray-950/80 border border-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Sumário da Página
                  </h2>
                  <nav>
                    <ul className="space-y-2 text-sm">
                      {tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block py-2 px-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-900/80 transition-all duration-200 border border-transparent hover:border-gray-800"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Quick Contact Card */}
                <div className="bg-linear-to-br from-blue-950/40 via-purple-950/30 to-black border border-purple-500/20 rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                    <FaLock />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Dúvidas sobre seus dados?</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    Caso queira solicitar a exclusão, correção ou confirmação sobre o tratamento das suas informações, fale
                    direto conosco.
                  </p>
                  <a
                    href="https://wa.me/5511930188184?text=Olá Gustavo! Gostaria de informações a respeito dos meus dados conforme a Política de Privacidade."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
                  >
                    <FaWhatsapp className="text-sm text-green-600" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </div>
              </aside>

              {/* Main Document Content */}
              <article className="lg:col-span-8 space-y-16">
                {/* Introduction statement card */}
                <div className="relative overflow-hidden bg-linear-to-r from-gray-900/90 to-gray-950/90 border border-gray-800 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 items-center justify-center text-blue-400 text-xl">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">Compromisso com a sua privacidade</h2>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        A presente Política de Privacidade explica como{" "}
                        <span className="text-white font-semibold">Gustavo Junior / Rocket Visuals</span> coleta, utiliza e
                        protege as informações fornecidas por pessoas interessadas em nossos serviços de edição de vídeo,
                        motion design, VFX e produção audiovisual.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 1: Dados coletados */}
                <section id="dados-coletados" className="scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                      1
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">Dados coletados</h2>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    Ao preencher nossos formulários de contato, podemos coletar informações como:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {dadosList.map((dado, index) => (
                      <div
                        key={index}
                        className={`bg-gray-950/60 border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between ${
                          index === dadosList.length - 1 ? "sm:col-span-2" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0">
                            {dado.icon}
                          </div>
                          <h3 className="font-bold text-white text-sm">{dado.title}</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-11">{dado.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-900/40 border border-gray-800/80 rounded-xl p-4 text-xs text-gray-400 leading-relaxed">
                    💡 <strong className="text-gray-300">Nota:</strong> Todas as informações acima são fornecidas de forma
                    consciente e voluntária por você no momento em que busca orçamentos, diagnósticos ou alinhamento de
                    projetos conosco.
                  </div>
                </section>

                {/* Section 2: Como utilizamos seus dados */}
                <section id="uso-dados" className="scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
                      2
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">Como utilizamos seus dados</h2>
                  </div>

                  <p className="text-gray-300 leading-relaxed">As informações fornecidas são utilizadas para:</p>

                  <ul className="space-y-3">
                    {usosList.map((uso, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 bg-gray-950/60 border border-gray-800/80 rounded-xl p-4 hover:border-purple-500/30 transition-colors"
                      >
                        <FaCheckCircle className="text-purple-400 text-lg mt-0.5 shrink-0" />
                        <span className="text-gray-200 text-sm md:text-base leading-relaxed">{uso}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Anti-venda highlight banner */}
                  <div className="relative overflow-hidden bg-linear-to-r from-red-950/40 via-purple-950/40 to-blue-950/40 border-2 border-purple-500/40 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wider">
                          Garantia de Confiança
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-white">Não vendemos suas informações pessoais.</h3>
                        <p className="text-xs md:text-sm text-gray-300">
                          Seus dados nunca serão comercializados com empresas de mala direta, corretores de dados ou
                          terceiros não autorizados.
                        </p>
                      </div>
                      <div className="text-3xl sm:text-4xl text-purple-400 shrink-0 self-center">🛡️</div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Compartilhamento de informações */}
                <section id="compartilhamento" className="scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-sm">
                      3
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">Compartilhamento de informações</h2>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    Seus dados poderão ser utilizados por ferramentas e prestadores de serviços necessários para o
                    funcionamento do atendimento e da operação comercial, sempre dentro das finalidades descritas nesta
                    política.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-950/60 border border-gray-800 rounded-xl p-5">
                      <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <FaCheckCircle className="text-green-400 text-sm" />
                        Finalidades Permitidas
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Sistemas essenciais para a prestação de serviços (plataformas seguras de e-mail, canais de mensageria
                        como WhatsApp, plataformas de reunião e armazenamento de projetos em nuvem).
                      </p>
                    </div>

                    <div className="bg-gray-950/60 border border-gray-800 rounded-xl p-5">
                      <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <FaShieldAlt className="text-red-400 text-sm" />
                        Compromisso Expresso
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        <strong className="text-white">Não comercializamos seus dados pessoais com terceiros.</strong> Todo o
                        compartilhamento restringe-se estritamente à operação operacional e comercial do seu atendimento.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4: Armazenamento e segurança */}
                <section id="armazenamento-seguranca" className="scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                      4
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">Armazenamento e segurança</h2>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    Adotamos medidas razoáveis para proteger as informações fornecidas contra acesso, alteração, divulgação
                    ou utilização não autorizada.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    As informações serão mantidas pelo período necessário para cumprir as finalidades descritas nesta
                    política ou conforme exigido pela legislação aplicável.
                  </p>

                  <div className="bg-linear-to-r from-blue-950/30 to-purple-950/30 border border-blue-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl shrink-0">
                      <FaLock />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-white text-base">Boas Práticas de Proteção</h3>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Utilizamos controles de autenticação, ferramentas com protocolos criptografados e armazenamento em
                        ambientes confiáveis para salvaguardar a integridade das suas comunicações e arquivos.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Seus direitos */}
                <section id="seus-direitos" className="scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
                      5
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">Seus direitos</h2>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    Você pode solicitar informações sobre o tratamento de seus dados, bem como solicitar, quando aplicável,
                    a correção ou exclusão de suas informações pessoais.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {direitosList.map((direito, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-950/60 border border-gray-800 hover:border-gray-700 rounded-xl p-5 flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-blue-400 text-xs font-bold mb-3">
                            0{idx + 1}
                          </div>
                          <h3 className="text-sm font-bold text-white mb-2">{direito.title}</h3>
                          <p className="text-xs text-gray-400 leading-relaxed">{direito.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center sm:text-left">
                      <h3 className="text-base font-bold text-white">Como exercer seus direitos?</h3>
                      <p className="text-xs text-gray-400">
                        Para solicitar informações ou exercer seus direitos, entre em contato através do canal de atendimento
                        utilizado para sua solicitação.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/5511930188184?text=Olá Gustavo! Gostaria de exercer meus direitos referentes aos meus dados pessoais cadastrados."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-purple-500/25"
                    >
                      <span>Solicitar Atendimento</span>
                      <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                </section>

                {/* Section 6: Cookies e tecnologias semelhantes */}
                <section id="cookies" className="scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-sm">
                      6
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">Cookies e tecnologias semelhantes</h2>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    Caso nosso site utilize cookies ou tecnologias semelhantes, essas ferramentas poderão ser utilizadas
                    para melhorar a experiência de navegação, analisar o desempenho do site e medir resultados de campanhas
                    publicitárias.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gray-950/60 border border-gray-800 rounded-xl p-4">
                      <div className="text-2xl mb-2">🚀</div>
                      <h3 className="text-sm font-bold text-white mb-1">Navegação e Usabilidade</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Garantir carregamento otimizado de vídeos, fluidez visual e retenção de preferências básicas.
                      </p>
                    </div>
                    <div className="bg-gray-950/60 border border-gray-800 rounded-xl p-4">
                      <div className="text-2xl mb-2">📊</div>
                      <h3 className="text-sm font-bold text-white mb-1">Desempenho e Métricas</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Compreender quais páginas, produções ou cases atraem mais atenção para aprimorar o site.
                      </p>
                    </div>
                    <div className="bg-gray-950/60 border border-gray-800 rounded-xl p-4">
                      <div className="text-2xl mb-2">🎯</div>
                      <h3 className="text-sm font-bold text-white mb-1">Campanhas Estratégicas</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Mensurar a efetividade de anúncios de alcance e direcionar conteúdos para o público relevante.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 7: Alterações nesta Política */}
                <section id="alteracoes" className="scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                      7
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">Alterações nesta Política</h2>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    Esta Política de Privacidade poderá ser atualizada periodicamente para refletir alterações em nossos
                    serviços, processos ou requisitos legais.
                  </p>

                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 flex items-start gap-3">
                    <FaSyncAlt className="text-blue-400 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">Transparência Contínua</h3>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        A versão mais recente estará sempre disponível nesta página, contendo a data da última atualização no
                        topo do documento para sua consulta e acompanhamento.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8: Canal de Atendimento */}
                <section id="contato" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-800/80">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-sm">
                      8
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">Canal de Atendimento</h2>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    Tem dúvidas, solicitações ou deseja mais esclarecimentos sobre a nossa Política de Privacidade? Fale
                    diretamente com nosso time através dos nossos canais oficiais:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a
                      href="https://wa.me/5511930188184?text=Olá Gustavo! Gostaria de conversar a respeito da Política de Privacidade."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-linear-to-br from-green-950/30 to-gray-950 border border-green-500/30 hover:border-green-400 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-400 text-xl group-hover:scale-110 transition-transform">
                          <FaWhatsapp />
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">WhatsApp Oficial</span>
                          <h3 className="text-base font-bold text-white">+55 (11) 93018-8184</h3>
                        </div>
                      </div>
                      <span className="text-xs text-green-400 font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        Iniciar conversa <FaArrowRight className="text-[10px]" />
                      </span>
                    </a>

                    <a
                      href="mailto:contato@rocketvisuals.com?subject=Dúvida sobre Política de Privacidade"
                      className="group bg-linear-to-br from-purple-950/30 to-gray-950 border border-purple-500/30 hover:border-purple-400 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl group-hover:scale-110 transition-transform">
                          <FaEnvelope />
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">E-mail Comercial</span>
                          <h3 className="text-base font-bold text-white">contato@rocketvisuals.com</h3>
                        </div>
                      </div>
                      <span className="text-xs text-purple-400 font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        Enviar mensagem <FaArrowRight className="text-[10px]" />
                      </span>
                    </a>
                  </div>
                </section>

                {/* Back to Home CTA Banner */}
                <div className="bg-linear-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center space-y-4">
                  <h3 className="text-2xl font-black text-white">Pronto para elevar o visual da sua marca?</h3>
                  <p className="text-sm text-gray-400 max-w-xl mx-auto">
                    Conheça nossas produções cinematográficas, efeitos visuais e estratégias de vídeo criadas para prender a
                    atenção e gerar conversão.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <Link
                      href="/"
                      className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black font-bold text-sm transition-all duration-300 inline-flex items-center gap-2"
                    >
                      <FaHome className="text-sm" />
                      <span>Ir para a Página Inicial</span>
                    </Link>
                    <a
                      href="https://wa.me/5511930188184?text=Olá! Gostaria de saber mais sobre seus serviços de produção audiovisual e pacotes."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-purple-600/20"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Solicitar Proposta</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Unified Footer */}
      <Footer />
    </div>
  );
}
