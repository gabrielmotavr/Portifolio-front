import { createContext, useContext, useState } from 'react';

// Dicionário com todas as traduções do site
const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Mim",
      experience: "Experiências",
      projects: "Projetos",
      contact: "Contato"
    },
    hero: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedor Full Stack",
      ctaProjects: "Ver Projetos",
      ctaContact: "Entrar em Contato"
    },
    projects: {
      title: "Meus Projetos",
      notFound: "Nenhum projeto cadastrado no momento."
    },
    typing:{
      words: ["Gabriel Mota Valério", "Engenheiro de Software"]
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I am",
      role: "Full Stack Developer",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch"
    },
    projects: {
      title: "My Projects",
      notFound: "No projects registered at the moment."
    },
    typing: {
      words: ["Gabriel Mota Valério", "Software Engineer"]
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Salva no localStorage para manter a preferência do usuário ao recarregar a página
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'pt';
  });

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook customizado para facilitar o acesso nas páginas e componentes
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
}