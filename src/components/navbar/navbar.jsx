import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
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

    // Estilos limpos para os links com foco e hover inspirados em terminal
    const getNavLinkClass = ({ isActive }) =>
        `font-mono text-sm transition-colors duration-200 px-3 py-1.5 !rounded-md !no-underline !inline-flex !items-center ${isActive
            ? "!text-emerald-400 !bg-emerald-950/40 border border-emerald-500/30"
            : "!text-slate-400 hover:text-emerald-400 hover:bg-zinc-900/50"
        }`;

    return (
        <nav
            className="w-full bg-[#050806] border-b border-emerald-500/20 py-3 px-6 md:px-12 min-h-[72px] relative z-20 flex items-center shadow-lg shadow-emerald-950/20"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between w-full">

                {/* Logo com estilo Terminal */}
                <div className="flex items-center gap-2">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-1 !focus:outline-none focus-visible:ring-1 !focus-visible:ring-emerald-500 rounded !no-underline group"
                    >
                        <span className="font-mono font-bold text-base text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors">
                            <span className="text-emerald-500 mr-1">&gt;</span>Gabriel Mota
                        </span>
                    </Link>
                </div>

                {/* Container de Links + Botão de Idioma */}
                <div className="flex items-center gap-6">
                    {/* Menu Principal */}
                    <div
                        id="collapseMenu"
                        ref={menuRef}
                        tabIndex={-1}
                        className={`${isMenuOpen ? "block" : "hidden"
                            } lg:block bg-[#050806] lg:bg-transparent border-l border-emerald-500/20 lg:border-none w-64 lg:w-auto fixed lg:static top-0 right-0 h-full lg:h-auto shadow-2xl lg:shadow-none overflow-auto z-50 outline-none p-6 lg:p-0`}
                    >
                        {/* Header Mobile com botão fechar */}
                        <div className="py-4 px-2 flex justify-between items-center border-b border-zinc-800 lg:hidden mb-4">
                            <span className="font-mono text-xs font-semibold text-emerald-400">
                                // MENU_SISTEMA
                            </span>
                            <button
                                type="button"
                                onClick={closeMenu}
                                className="p-1 cursor-pointer rounded-md text-slate-400 hover:text-emerald-400 focus:outline-none"
                            >
                                <span className="sr-only">Fechar Menu</span>
                                ✕
                            </button>
                        </div>

                        {/* Links de Navegação */}
                        <ul className="flex flex-col gap-3 lg:gap-4 lg:flex-row items-start lg:items-center">
                            <li>
                                <NavLink to="/" end onClick={closeMenu} className={getNavLinkClass}>
                                    {t?.nav?.home || "Home"}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/sobre-mim" onClick={closeMenu} className={getNavLinkClass}>
                                    {t?.nav?.about || "Sobre"}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/experiencias" onClick={closeMenu} className={getNavLinkClass}>
                                    {t?.nav?.experience || "Experiência"}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projetos" onClick={closeMenu} className={getNavLinkClass}>
                                    {t?.nav?.projects || "Projetos"}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contato" onClick={closeMenu} className={getNavLinkClass}>
                                    {t?.nav?.contact || "Contato"}
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Botões de Troca de Idioma (PT / EN) */}
                    <div className="flex items-center bg-zinc-950 p-1 rounded-lg border border-zinc-800">
                        <button
                            type="button"
                            onClick={() => toggleLanguage('pt')}
                            className={`px-3 py-1 text-xs font-mono font-semibold rounded transition-all cursor-pointer ${language === 'pt'
                                    ? 'bg-emerald-600 text-black shadow-sm'
                                    : 'text-slate-400 hover:text-emerald-400'
                                }`}
                            aria-label="Mudar para Português"
                        >
                            PT
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleLanguage('en')}
                            className={`px-3 py-1 text-xs font-mono font-semibold rounded transition-all cursor-pointer ${language === 'en'
                                    ? 'bg-emerald-600 text-black shadow-sm'
                                    : 'text-slate-400 hover:text-emerald-400'
                                }`}
                            aria-label="Switch to English"
                        >
                            EN
                        </button>
                    </div>

                    {/* Botão de menu hamburguer (Mobile) */}
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