export default function SimpleRegistrationForm() {
  return (
    <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-neutral-800 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Contate-me
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
		Preencha o formulário abaixo para entrar em contato comigo. Estou ansioso para ouvir de você!
      </p>

      <form className="mt-6 flex flex-col gap-4">
        {/* Campo Nome */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
            Seu Nome
          </label>
          <input
            type="text"
            placeholder="Nome Completo"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-neutral-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Campo Email */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
            Seu Email
          </label>
          <input
            type="email"
            placeholder="nome@email.com"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-neutral-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Campo Mensagem */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
            Sua Mensagem
          </label>
          <input
            type="text"
            placeholder="Escreva sua mensagem aqui..."
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-neutral-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Botão Cadastrar */}
        <button
          type="submit"
          className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-lg shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
        >
          Cadastrar
        </button>

      </form>
    </div>
  );
}