import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import TypingAnimatedText from "../../components/type/type";

function Home() {
    return (<>
        
        <main className="min-h-screen bg-[var(--color-dark-bg)] text-slate-100 relative overflow-hidden flex flex-col justify-between p-6 md:p-12">

            {/* Efeito de luz verde difusa no fundo (Gradiente Radial) */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Header / Navbar */}


            {/* Conteúdo Principal da Home */}
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto z-10">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Disponível para novos desafios
                    </div>

                    <TypingAnimatedText />

                    <p className="text-xl md:text-2xl text-slate-300 font-light">
                        Construindo soluções onde <span className="text-emerald-400 font-medium neon-text-glow">tecnologia encontra negócios e IA</span>.
                    </p>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Estudante de Engenharia de Software na PUC Minas e Estagiário de TI. Focado na interseção entre Produto, Negócios e Inteligência Artificial.
                    </p>

                    {/* Badges / Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-slate-300 rounded-md text-xs font-mono">19 anos</span>
                        <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-slate-300 rounded-md text-xs font-mono">Engenharia de Software</span>
                        <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-slate-300 rounded-md text-xs font-mono">Belo Horizonte, MG</span>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projetos" className="px-6 py-3 !bg-emerald-600 !hover:bg-emerald-500 !text-black font-semibold rounded-lg transition-all shadow-lg shadow-emerald-900/30 flex items-center gap-2 !no-underline">
                            Conheça meus projetos
                        </a>
                        <a href="#contato" className="px-6 py-3 !no-underline !bg-zinc-900 !hover:bg-zinc-800 !text-slate-200 border !border-zinc-700 !hover:border-emerald-500/50 rounded-lg !transition-all">
                            Entre em contato
                        </a>
                    </div>
                </div>

                {/* Lado Direito: Elemento visual / Gráfico estilizado com efeito neon */}
                <div className="relative hidden lg:flex justify-center items-center">
                    <div className="w-full max-w-md p-6 rounded-2xl bg-zinc-950/80 neon-glow backdrop-blur-md relative overflow-hidden">
                        {/* Detalhe de código simulado no fundo do card */}
                        <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-emerald-400 overflow-hidden p-4 select-none pointer-events-none">
                            <p>const user = &#123; name: "Gabriel", role: "TI & Product", focus: "AI & Business" &#125;;</p>
                            <p>function buildSolution() &#123; return value + efficiency; &#125;</p>
                            <p>// System online - PUC Minas / FS Consultores</p>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                                <span className="font-mono text-xs text-emerald-400">system_status.log</span>
                                <div className="flex gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                                    <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                </div>
                            </div>

                            <div className="space-y-2 font-mono text-xs text-slate-400">
                                <p className="text-emerald-400">&gt; initializing profile...</p>
                                <p>&gt; loading stack: Java, Spring, React, Node, AI</p>
                                <p className="text-emerald-400">&gt; status: ready for impact.</p>
                            </div>

                            <div className="pt-4 flex justify-between items-center text-xs text-slate-500 font-mono border-t border-zinc-800/60">
                                <span>GMV_V4.26</span>
                                <span className="text-emerald-500">SECURE_ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Simples */}
            <Footer />
        </main>

    </>
    )
}

export default Home;