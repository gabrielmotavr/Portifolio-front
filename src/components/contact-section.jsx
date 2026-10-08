import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import emailjs from '@emailjs/browser';

// TODO: coloque aqui o e-mail que vai receber as mensagens
const CONTACT_EMAIL = "gabrielmotavalerio@gmail.com";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all";

const labelClass = "block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2";

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({assunto:"", nome: "", email: "", descricao: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.send(
      'service_53emtra',
      'template_1pw15b7',
      form,
      { publicKey: 'NRAY13AnCvp8N1rZf' }
    ).then(
      () => {
        alert("Email enviado com sucesso!");
        setForm({ assunto:"", nome: "", email: "", descricao: "" }); //Limpa campos
      },
      (error) =>{
        //alert("Erro ao enviar o e-mail. Tente novamente.");
        console.error('Erro:', error.text);
         alert(`Erro: ${error.text || error.message || 'Erro desconhecido'}`);
      }
    )
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
        <label htmlFor="assunto" className={labelClass}>{t.contactForm.assunto}</label>
        <input
          id="assunto"
          name="assunto"
          type="text"
          required
          placeholder={t.contactForm.assuntoPlaceholder}
          value={form.assunto}
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
