import { ArrowRight, Download, FolderGit2, Mail } from "lucide-react";
import TypingAnimatedText from "../type/type";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-6 md:p-12 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {t.hero.available}
          </div>

          <TypingAnimatedText />

          <p className="text-xl md:text-2xl text-slate-300 font-light">
            {t.hero.taglineStart}<span className="text-emerald-400 font-medium neon-text-glow">{t.hero.taglineHighlight}</span>.
          </p>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {t.hero.badges.map((badge) => (
              <span key={badge} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-slate-300 rounded-md text-xs font-mono">{badge}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projetos"
              className="group px-6 py-3 bg-emerald-600 hover:bg-emerald-500 !text-black font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer !no-underline"
            >
              <FolderGit2 className="w-5 h-5" />
              {t.hero.ctaProjects}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="group px-6 py-3 bg-zinc-900 hover:bg-zinc-800 !text-slate-200 border border-zinc-700 hover:border-emerald-500/50 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer !no-underline"
            >
              <Mail className="w-5 h-5 text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
              {t.hero.ctaContact}
            </a>
            <a
              href="/CurriculoGabrielMota.pdf"
              download="CurriculoGabrielMota.pdf"
              className="group px-6 py-3 bg-zinc-900 hover:bg-zinc-800 !text-slate-200 border border-zinc-700 hover:border-emerald-500/50 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer !no-underline"
            >
              <Download className="w-5 h-5 text-emerald-400 transition-transform duration-200 group-hover:translate-y-0.5" />
              {t.hero.ctaCurriculo}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="border rounded-full object-fit-contain w-90 h-auto">
            <img src="src\images\perfil-home.jpeg" alt={t.hero.photoAlt} className="rounded-full neon-glow h-auto w-90" />
          </div>
        </div>
      </div>
      
    </section>
  );
}