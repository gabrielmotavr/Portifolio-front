import { ExternalLink } from "lucide-react";
import ContactForm from "../contact-section";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-8">
      <div className="space-y-3">
        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">{t.contact.eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">{t.contact.title}</h2>
        <p className="text-slate-400 text-base max-w-lg mx-auto">
          {t.contact.description}
        </p>
      </div>

      <ContactForm />

      <div className="flex flex-wrap justify-center gap-6 pt-4 font-mono text-sm">
        
        <a
          href="https://github.com/gabrielmotavr"
          target="_blank"
          rel="noreferrer"
          className="group px-6 py-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-lg !text-slate-200 hover:!text-emerald-400 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-emerald-900/30 flex items-center gap-2 cursor-pointer !no-underline"
        >
          GitHub /gabrielmotavr
          <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href="https://linkedin.com/in/gabrielmotavr"
          target="_blank"
          rel="noreferrer"
          className="group px-6 py-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-lg !text-slate-200 hover:!text-emerald-400 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-emerald-900/30 flex items-center gap-2 cursor-pointer !no-underline"
        >
          LinkedIn /gabrielmotavr
          <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}