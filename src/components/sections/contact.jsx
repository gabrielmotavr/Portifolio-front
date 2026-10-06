export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-8">
      <div className="space-y-3">
        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">// Vamos conversar</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">Entre em Contato</h2>
        <p className="text-slate-400 text-base max-w-lg mx-auto">
          Estou aberto a conexões, trocas sobre tecnologia, projetos, produtos e inteligência artificial.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 pt-4 font-mono text-sm">
        <a 
          href="https://github.com/gabrielmotavr" 
          target="_blank" 
          rel="noreferrer" 
          className="px-6 py-3 bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 rounded-lg !text-slate-200 transition-all !no-underline"
        >
          GitHub /gabrielmotavr
        </a>
        <a 
          href="https://linkedin.com/in/gabrielmotavr" 
          target="_blank" 
          rel="noreferrer" 
          className="px-6 py-3 bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 rounded-lg !text-slate-200 transition-all !no-underline"
        >
          LinkedIn /gabrielmotavr
        </a>
      </div>
    </section>
  );
}