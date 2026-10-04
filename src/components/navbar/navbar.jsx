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

    // Função para aplicar estilos condicionais do link ativo (Nav):
    const getNavLinkClass = ({ isActive }) =>
    `!no-underline font-medium text-sm transition-colors px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
        isActive
            ? "!text-emerald-500 font-semibold border-b-2 border-emerald-500"
            : "!text-slate-700 dark:!text-slate-400 hover:!text-emerald-500"
    }`;

    return (
        <nav
            className="flex py-2 px-4 md:px-8 bg-white border-b border-emerald-500/20 dark:border-emerald-500/30 dark:bg-neutral-900 min-h-[68px] relative z-20 shadow-sm"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 w-full justify-between">

                {/* Logo com destaque Verde */}
                <div className="flex items-center gap-2">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded !no-underline"
                    >
                        {/* <span className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-emerald-500/30">
                            G
                        </span> */}
                        <span className="font-bold text-lg text-slate-800 dark:text-emerald-700 tracking-tight">
                            Gabriel Mota Valério<span className="text-emerald-800"></span>
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
                            } lg:block max-lg:bg-white dark:max-lg:bg-neutral-900 max-lg:border-l max-lg:border-emerald-500/20 max-lg:w-64 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-2xl max-lg:overflow-auto z-50 outline-none`}
                    >
                        {/* Header Mobile com botão fechar */}
                        <div className="py-4 px-6 flex justify-between items-center border-b border-slate-200 dark:border-neutral-800 lg:hidden">
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                                Menu
                            </span>
                            <button
                                type="button"
                                onClick={closeMenu}
                                className="p-1 cursor-pointer rounded-md text-slate-500 hover:text-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                            >
                                <span className="sr-only">Fechar Menu</span>
                                ✕
                            </button>
                        </div>

                        {/* Links de Navegação */}
                        <ul className="flex flex-col gap-4 lg:gap-6 lg:flex-row max-lg:p-6 items-start lg:items-center">
                            <li>
                                <NavLink to="/" end onClick={closeMenu} className={getNavLinkClass}>
                                    {t.nav.home}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/sobre-mim" onClick={closeMenu} className={getNavLinkClass}>
                                    {t.nav.about}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/experiencias" onClick={closeMenu} className={getNavLinkClass}>
                                    {t.nav.experience}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projetos" onClick={closeMenu} className={getNavLinkClass}>
                                    {t.nav.projects}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contato" onClick={closeMenu} className={getNavLinkClass}>
                                    {t.nav.contact}
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Botões de Troca de Idioma (PT / EN) */}
                    <div className="flex items-center bg-slate-100 dark:bg-neutral-800 p-1 rounded-lg border border-slate-200 dark:border-neutral-700">
                        <button
                            type="button"
                            onClick={() => toggleLanguage('pt')}
                            className={`px-4 py-1 text-xs font-semibold rounded-md transition-all ${language === 'pt'
                                ? 'bg-emerald-700 text-white shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:text-emerald-500'
                                }`}
                            aria-label="Mudar para Português"
                        >
                            PT
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleLanguage('en')}
                            className={`px-4 py-1 text-xs font-semibold rounded-md transition-all ${language === 'en'
                                ? 'bg-emerald-500 text-white shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:text-emerald-500'
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
                        className="cursor-pointer lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                        <span className="sr-only">Abrir menu</span>
                        <svg className="size-6 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}