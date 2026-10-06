export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">// Visão & Propósito</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">Sobre mim</h2>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg font-light">
          <p>
            Meu nome é <strong className="text-slate-100 font-semibold">Gabriel Mota Valério</strong>, tenho 19 anos e sou estudante de Engenharia de Software na PUC Minas. Minha trajetória em tecnologia começou com o ensino técnico em Informática pelo COTEMIG, onde entendi que o verdadeiro valor da tecnologia está em resolver problemas reais.
          </p>
          
          <p>
            Atualmente sou estagiário de TI na <strong className="text-emerald-400 font-medium">FS Consultores</strong>. No dia a dia, atuo desenvolvendo sistemas de gestão interna, prestando suporte aos colaboradores e analisando processos. Essa vivência me ensinou a enxergar o desenvolvimento de software sob a ótica de <strong className="text-slate-100 font-semibold">produto e negócios</strong>, indo além de escrever linhas de código.
          </p>

          <blockquote className="p-4 border-l-2 border-emerald-500 bg-zinc-950/60 text-slate-300 font-mono text-sm my-6 rounded-r-lg">
            "Não vejo a Inteligência Artificial como uma ameaça ou muleta, mas como um acelerador de produtividade que permite focar no que realmente importa: arquitetar soluções inteligentes e gerar resultados para o negócio."
          </blockquote>

          <p>
            Utilizo ativamente ferramentas de IA (como Claude Code) na minha rotina de desenvolvimento para agilizar a criação e evolução de softwares. Tenho base prática em Java, Spring Boot, JavaScript, React, Node.js e SQL, mas meu objetivo profissional está direcionado para a área de <strong className="text-slate-100 font-semibold">Produto e Inteligência Artificial</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}