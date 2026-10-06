import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// TODO: coloque aqui o e-mail que vai receber as mensagens
const CONTACT_EMAIL = "seu-email@exemplo.com";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all";

const labelClass = "block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2";

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ nome: "", email: "", descricao: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `${t.contactForm.subject} - ${form.nome}`;
    const body = `${t.contactForm.bodyName}: ${form.nome}\n${t.contactForm.bodyEmail}: ${form.email}\n\n${form.descricao}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setForm({ nome: "", email: "", descricao: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto text-left space-y-5 p-6 md:p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
    >
      <div>
        <label htmlFor="nome" className={labelClass}>{t.contactForm.name}</label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder={t.contactForm.namePlaceholder}
          value={form.nome}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>{t.contactForm.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t.contactForm.emailPlaceholder}
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="descricao" className={labelClass}>{t.contactForm.message}</label>
        <textarea
          id="descricao"
          name="descricao"
          required
          rows={5}
          placeholder={t.contactForm.messagePlaceholder}
          value={form.descricao}
          onChange={handleChange}
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-black font-semibold rounded-lg transition-all shadow-lg shadow-emerald-900/30 cursor-pointer"
      >
        {t.contactForm.submit}
      </button>
    </form>
  );
}
