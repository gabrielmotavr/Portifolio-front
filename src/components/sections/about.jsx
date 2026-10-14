import { ExternalLink } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="sobre" className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">{about.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">{about.title}</h2>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg font-light">
          <p>
            {about.p1.before}<strong className="text-slate-100 font-semibold">Gabriel Mota Valério</strong>{about.p1.after}
          </p>

          <p>
            {about.p2.before}<strong className="text-emerald-400 font-medium">FS Consultores</strong>{about.p2.middle}<strong className="text-slate-100 font-semibold">{about.p2.highlight}</strong>{about.p2.after}
          </p>

          <blockquote className="p-4 border-l-2 border-emerald-500 bg-zinc-950/60 text-slate-300 font-mono text-sm my-6 rounded-r-lg">
            {about.quote}
          </blockquote>
         

          <p>
            {about.p3.before}<strong className="text-slate-100 font-semibold">{about.p3.highlight}</strong>{about.p3.after}
          </p>


          <Link to="/github">
            Ver estatísticas do GitHub
          </Link>

          <a
            href="/github"
            className="group px-6 py-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-lg !text-slate-200 hover:!text-emerald-400 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-emerald-900/30 flex items-center gap-2 cursor-pointer !no-underline"
          >
            Ver estatísticas do GitHub
            <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
