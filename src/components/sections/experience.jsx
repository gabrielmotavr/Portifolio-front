import { useLanguage } from "../../context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experiencias" className=" py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-12">
        <div className="space-y-2">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">{t.experience.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">{t.experience.title}</h2>
        </div>

        <div className="relative border-l border-zinc-800 pl-6 ml-2 md:pl-8 space-y-12">
          {t.experience.jobs.map((job) => (
            <div key={job.company} className="relative group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
              <div
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-[var(--color-dark-bg)] ${
                  job.current ? "bg-emerald-500" : "bg-zinc-700"
                }`}
              ></div>

              <div className="space-y-3">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded border ${
                      job.current
                        ? "text-emerald-400 bg-emerald-950/50 border-emerald-500/20"
                        : "text-slate-400 bg-zinc-900 border-zinc-800"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>
                <p className="text-slate-400 font-medium text-sm">{job.company}</p>

                <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside pt-2 font-light">
                  {job.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
