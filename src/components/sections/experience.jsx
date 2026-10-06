export default function Experience() {
  return (
    <section id="experiencias" className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-12">
        <div className="space-y-2">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">// Carreira</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">Experiência Profissional</h2>
        </div>

        <div className="relative border-l border-zinc-800 pl-6 ml-2 md:pl-8 space-y-12">
          
          {/* FS Consultores */}
          <div className="relative group">
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#050806]"></div>
            
            <div className="space-y-3">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-xl font-bold text-slate-100">Estagiário de TI</h3>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-500/20">
                  Janeiro de 2026 — Atual (6h/dia)
                </span>
              </div>
              <p className="text-slate-400 font-medium text-sm">FS Consultores • Belo Horizonte, MG</p>
              
              <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside pt-2 font-light">
                <li>Desenvolvimento de sistemas de gestão interna, incluindo sistema de orçamento e gestão de obras.</li>
                <li>Uso de ferramentas de Inteligência Artificial no fluxo de desenvolvimento (Claude Code) para ganho de produtividade.</li>
                <li>Suporte técnico aos usuários, manutenção de computadores e configuração de redes e softwares.</li>
                <li>Tratamento de dados e automação de processos internos utilizando Excel, Power Query, Power Automate e n8n.</li>
              </ul>
            </div>
          </div>

          {/* Softbel Informática */}
          <div className="relative group">
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-700 border-4 border-[#050806]"></div>
            
            <div className="space-y-3">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-xl font-bold text-slate-100">Estagiário de TI / Desenvolvimento</h3>
                <span className="font-mono text-xs text-slate-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                  Agosto de 2025 — Janeiro de 2026 (Remoto)
                </span>
              </div>
              <p className="text-slate-400 font-medium text-sm">Softbel Informática</p>
              
              <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside pt-2 font-light">
                <li>Atuação no desenvolvimento web participando da modernização de um sistema contábil desktop para aplicação web.</li>
                <li>Criação de componentes e telas em React e integração com APIs em Node.js.</li>
                <li>Consultas e manipulação de banco de dados relacional Firebird (SQL) e testes de rotas com Postman.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}