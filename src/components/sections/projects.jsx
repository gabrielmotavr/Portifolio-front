export default function Projects() {
  const projects = [
    {
      title: "Sistema de Orçamento de Obras",
      category: "Uso Interno Empresarial",
      description: "Solução desenvolvida para centralizar a criação e gestão de orçamentos de obras, organizando regras de negócio complexas e reduzindo o tempo de elaboração técnica.",
      tags: ["React", "Node.js", "Claude Code"]
    },
    {
      title: "VemDoar",
      category: "Projeto de Impacto Social",
      description: "Plataforma para engajamento e agendamento de doação de sangue. Focada em regras de negócio para triagem, acompanhamento de histórico e mecanismos de incentivo aos doadores.",
      tags: ["Java", "Spring Boot", "React"]
    },
    {
      title: "Módulo Contábil Web",
      category: "Migração de Sistema",
      description: "Modernização de módulos contábeis legados para a web. Foco na estruturação de dados de plano de contas, consumo de APIs e integração com banco relacional.",
      tags: ["React", "Firebird SQL", "Postman"]
    }
  ];

  return (
    <section id="projetos" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-b border-zinc-900">
      <div className="space-y-12">
        <div className="space-y-2">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">// Portfólio Prático</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">Projetos em Destaque</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-zinc-950 p-6 rounded-xl border border-zinc-800/80 hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  {proj.category}
                </span>
                <h3 className="text-xl font-bold text-slate-100">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{proj.description}</p>
              </div>
              <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 bg-zinc-900 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}