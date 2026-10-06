import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  const openMenu = () => {
    lastFocusedElementRef.current = document.activeElement;
    setIsMenuOpen(true);
    setTimeout(() => {
      menuRef.current?.focus();
    }, 0);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      lastFocusedElementRef.current?.focus();
    }, 0);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  const navLinkStyle = "font-mono text-sm transition-colors duration-200 px-3 py-1.5 rounded-md !no-underline inline-flex items-center !text-slate-400 hover:!text-emerald-400 hover:bg-zinc-900/50 cursor-pointer";

  return (
    <nav
      className="w-full bg-[#050806]/90 backdrop-blur-md border-b border-emerald-500/20 py-3 px-6 md:px-12 min-h-[72px] fixed top-0 left-0 z-50 flex items-center shadow-lg shadow-emerald-950/20"
      aria-label="Navegação Principal"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded !no-underline group"
          >
            <span className="font-mono font-bold text-base !text-slate-100 tracking-tight group-hover:!text-emerald-400 transition-colors">
              <span className="!text-emerald-500 mr-1">&gt;</span>Gabriel Mota
            </span>
          </a>
        </div>

        {/* Links de navegação */}
        <div className="flex items-center gap-6">
          <div
            id="collapseMenu"
            ref={menuRef}
            tabIndex={-1}
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:block bg-[#050806] lg:bg-transparent border-l border-emerald-500/20 lg:border-none w-64 lg:w-auto fixed lg:static top-0 right-0 h-full lg:h-auto shadow-2xl lg:shadow-none overflow-auto z-50 outline-none p-6 lg:p-0`}
          >
            <div className="py-4 px-2 flex justify-between items-center border-b border-zinc-800 lg:hidden mb-4">
              <span className="font-mono text-xs font-semibold text-emerald-400">
                // MENU_SISTEMA
              </span>
              <button
                type="button"
                onClick={closeMenu}
                className="p-1 cursor-pointer rounded-md text-slate-400 hover:text-emerald-400 focus:outline-none"
              >
                ✕
              </button>
            </div>

            <ul className="flex flex-col gap-3 lg:gap-4 lg:flex-row items-start lg:items-center list-none p-0 m-0">
              <li>
                <a href="#home" onClick={closeMenu} className={navLinkStyle}>
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={closeMenu} className={navLinkStyle}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#experiencias" onClick={closeMenu} className={navLinkStyle}>
                  Experiência
                </a>
              </li>
              <li>
                <a href="#projetos" onClick={closeMenu} className={navLinkStyle}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contato" onClick={closeMenu} className={navLinkStyle}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Botão de Menu Mobile */}
          <button
            type="button"
            aria-controls="collapseMenu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
            className="cursor-pointer lg:hidden p-2 rounded-lg text-slate-300 hover:bg-zinc-900 border border-zinc-800 focus:outline-none"
          >
            <span className="sr-only">Abrir menu</span>
            <svg className="size-5 fill-current text-emerald-400" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}