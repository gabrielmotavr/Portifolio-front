import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.list;
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  return (
    <section id="projetos" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto border-b border-zinc-900">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-2">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">{t.projects.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100">{t.projects.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="group min-w-0 bg-zinc-950 rounded-xl border border-zinc-800/80 hover:border-emerald-500/40 transition-all overflow-hidden flex flex-col">
              {proj.img && (
                <button
                  type="button"
                  onClick={() => setPreview(proj)}
                  className="block w-full aspect-video overflow-hidden border-b border-zinc-800/80 bg-zinc-900 cursor-zoom-in"
                >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-contain object-top block transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              )}
              <div className="p-4 sm:p-6 space-y-4 flex flex-col justify-between flex-1">
                <div className="space-y-3">
                  <span className="inline-block text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    {proj.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 break-words">{proj.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed break-words">{proj.description}</p>
                </div>
                <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-zinc-900 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
        >
          <img
            src={preview.img}
            alt={preview.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}