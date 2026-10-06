import TypingAnimatedText from "../type/type";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-6 md:p-12 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Disponível para novos desafios
          </div>

          <TypingAnimatedText />

          <p className="text-xl md:text-2xl text-slate-300 font-light">
            Construindo soluções onde <span className="text-emerald-400 font-medium neon-text-glow">tecnologia encontra negócios e IA</span>.
          </p>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Estudante de Engenharia de Software na PUC Minas e Estagiário de TI na FS Consultores. Focado na resolução de problemas reais de negócios através do uso estratégico de software e Inteligência Artificial.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-slate-300 rounded-md text-xs font-mono">19 anos</span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-slate-300 rounded-md text-xs font-mono">Engenharia de Software (PUC Minas)</span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-slate-300 rounded-md text-xs font-mono">Belo Horizonte, MG</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projetos"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 !text-black font-semibold rounded-lg transition-all shadow-lg shadow-emerald-900/30 flex items-center gap-2 !no-underline"
            >
              Conheça meus projetos
            </a>
            <a
              href="#contato"
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 !text-slate-200 border border-zinc-700 hover:border-emerald-500/50 rounded-lg transition-all !no-underline"
            >
              Entre em contato
            </a>
          </div>
        </div>

        <div className="border rounded-full object-fit-contain w-90 h-auto">
          <img src="src\images\perfil-home.jpeg" alt="" className="rounded-full neon-glow h-auto w-90" />
        </div>
      </div>
      
    </section>
  );
}