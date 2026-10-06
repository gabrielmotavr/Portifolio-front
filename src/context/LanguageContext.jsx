import { createContext, useContext, useEffect, useState } from 'react';

// Dicionário com todas as traduções do site
const translations = {
  pt: {
    nav: {
      ariaLabel: "Navegação Principal",
      menuTitle: "// MENU_SISTEMA",
      openMenu: "Abrir menu",
      home: "Home",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      switchLanguage: "Mudar idioma"
    },
    hero: {
      available: "Disponível para novos desafios",
      taglineStart: "Construindo soluções onde ",
      taglineHighlight: "tecnologia encontra negócios e IA",
      description: "Estudante de Engenharia de Software na PUC Minas e Estagiário de TI na FS Consultores. Focado na resolução de problemas reais de negócios através do uso estratégico de software e Inteligência Artificial.",
      badges: ["19 anos", "Engenharia de Software (PUC Minas)", "Belo Horizonte, MG"],
      ctaProjects: "Conheça meus projetos",
      ctaContact: "Entre em contato",
      photoAlt: "Foto de Gabriel Mota Valério"
    },
    typing: {
      words: ["Gabriel Mota Valério", "Engenheiro de Software"]
    },
    about: {
      eyebrow: "// Visão & Propósito",
      title: "Sobre mim",
      p1: {
        before: "Meu nome é ",
        after: ", tenho 19 anos e sou estudante de Engenharia de Software na PUC Minas. Minha trajetória em tecnologia começou com o ensino técnico em Informática pelo COTEMIG, onde entendi que o verdadeiro valor da tecnologia está em resolver problemas reais."
      },
      p2: {
        before: "Atualmente sou estagiário de TI na ",
        middle: ". No dia a dia, atuo desenvolvendo sistemas de gestão interna, prestando suporte aos colaboradores e analisando processos. Essa vivência me ensinou a enxergar o desenvolvimento de software sob a ótica de ",
        highlight: "produto e negócios",
        after: ", indo além de escrever linhas de código."
      },
      quote: "\"Não vejo a Inteligência Artificial como uma ameaça ou muleta, mas como um acelerador de produtividade que permite focar no que realmente importa: arquitetar soluções inteligentes e gerar resultados para o negócio.\"",
      p3: {
        before: "Utilizo ativamente ferramentas de IA (como Claude Code) na minha rotina de desenvolvimento para agilizar a criação e evolução de softwares. Tenho base prática em Java, Spring Boot, JavaScript, React, Node.js e SQL, mas meu objetivo profissional está direcionado para a área de ",
        highlight: "Produto e Inteligência Artificial",
        after: "."
      }
    },
    experience: {
      eyebrow: "// Carreira",
      title: "Experiência Profissional",
      jobs: [
        {
          role: "Estagiário de TI",
          period: "Janeiro de 2026 — Atual (6h/dia)",
          company: "FS Consultores • Belo Horizonte, MG",
          current: true,
          items: [
            "Desenvolvimento de sistemas de gestão interna, incluindo sistema de orçamento e gestão de obras.",
            "Uso de ferramentas de Inteligência Artificial no fluxo de desenvolvimento (Claude Code) para ganho de produtividade.",
            "Suporte técnico aos usuários, manutenção de computadores e configuração de redes e softwares.",
            "Tratamento de dados e automação de processos internos utilizando Excel, Power Query, Power Automate e n8n."
          ]
        },
        {
          role: "Estagiário de TI / Desenvolvimento",
          period: "Agosto de 2025 — Janeiro de 2026 (Remoto)",
          company: "Softbel Informática",
          current: false,
          items: [
            "Atuação no desenvolvimento web participando da modernização de um sistema contábil desktop para aplicação web.",
            "Criação de componentes e telas em React e integração com APIs em Node.js.",
            "Consultas e manipulação de banco de dados relacional Firebird (SQL) e testes de rotas com Postman."
          ]
        }
      ]
    },
    projects: {
      eyebrow: "// Portfólio Prático",
      title: "Projetos em Destaque",
      list: [
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
      ]
    },
    contact: {
      eyebrow: "// Vamos conversar",
      title: "Entre em Contato",
      description: "Estou aberto a conexões, trocas sobre tecnologia, projetos, produtos e inteligência artificial."
    },
    contactForm: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "nome@email.com",
      message: "Descrição",
      messagePlaceholder: "Conte um pouco sobre o que você precisa...",
      submit: "Enviar mensagem",
      subject: "Contato pelo portfólio",
      bodyName: "Nome",
      bodyEmail: "Email"
    },
    footer: {
      text: "© 2026 Gabriel Mota Valério. Engenharia de Software • PUC Minas."
    }
  },
  en: {
    nav: {
      ariaLabel: "Main Navigation",
      menuTitle: "// SYSTEM_MENU",
      openMenu: "Open menu",
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      switchLanguage: "Change language"
    },
    hero: {
      available: "Open to new challenges",
      taglineStart: "Building solutions where ",
      taglineHighlight: "technology meets business and AI",
      description: "Software Engineering student at PUC Minas and IT Intern at FS Consultores. Focused on solving real business problems through the strategic use of software and Artificial Intelligence.",
      badges: ["19 years old", "Software Engineering (PUC Minas)", "Belo Horizonte, Brazil"],
      ctaProjects: "See my projects",
      ctaContact: "Get in touch",
      photoAlt: "Photo of Gabriel Mota Valério"
    },
    typing: {
      words: ["Gabriel Mota Valério", "Software Engineer"]
    },
    about: {
      eyebrow: "// Vision & Purpose",
      title: "About me",
      p1: {
        before: "My name is ",
        after: ", I'm 19 years old and a Software Engineering student at PUC Minas. My journey in technology began with a technical course in Computer Science at COTEMIG, where I realized that the true value of technology lies in solving real problems."
      },
      p2: {
        before: "I'm currently an IT intern at ",
        middle: ". Day to day, I develop internal management systems, provide support to employees and analyze processes. This experience taught me to see software development from a ",
        highlight: "product and business",
        after: " perspective, going beyond writing lines of code."
      },
      quote: "\"I don't see Artificial Intelligence as a threat or a crutch, but as a productivity accelerator that lets me focus on what really matters: designing smart solutions and delivering business results.\"",
      p3: {
        before: "I actively use AI tools (such as Claude Code) in my development routine to speed up building and evolving software. I have hands-on experience with Java, Spring Boot, JavaScript, React, Node.js and SQL, but my career goal is focused on ",
        highlight: "Product and Artificial Intelligence",
        after: "."
      }
    },
    experience: {
      eyebrow: "// Career",
      title: "Professional Experience",
      jobs: [
        {
          role: "IT Intern",
          period: "January 2026 — Present (6h/day)",
          company: "FS Consultores • Belo Horizonte, Brazil",
          current: true,
          items: [
            "Development of internal management systems, including a budgeting and construction management system.",
            "Use of Artificial Intelligence tools in the development workflow (Claude Code) to boost productivity.",
            "Technical support for users, computer maintenance and network and software configuration.",
            "Data processing and internal process automation using Excel, Power Query, Power Automate and n8n."
          ]
        },
        {
          role: "IT / Development Intern",
          period: "August 2025 — January 2026 (Remote)",
          company: "Softbel Informática",
          current: false,
          items: [
            "Web development work on modernizing a desktop accounting system into a web application.",
            "Building components and screens in React and integrating with Node.js APIs.",
            "Querying and handling a Firebird relational database (SQL) and testing routes with Postman."
          ]
        }
      ]
    },
    projects: {
      eyebrow: "// Hands-on Portfolio",
      title: "Featured Projects",
      list: [
        {
          title: "Construction Budgeting System",
          category: "Internal Business Tool",
          description: "Solution built to centralize the creation and management of construction budgets, organizing complex business rules and reducing technical preparation time.",
          tags: ["React", "Node.js", "Claude Code"]
        },
        {
          title: "VemDoar",
          category: "Social Impact Project",
          description: "Platform for engaging donors and scheduling blood donations. Focused on business rules for screening, history tracking and donor incentive mechanisms.",
          tags: ["Java", "Spring Boot", "React"]
        },
        {
          title: "Web Accounting Module",
          category: "System Migration",
          description: "Modernization of legacy accounting modules for the web. Focused on structuring chart-of-accounts data, consuming APIs and integrating with a relational database.",
          tags: ["React", "Firebird SQL", "Postman"]
        }
      ]
    },
    contact: {
      eyebrow: "// Let's talk",
      title: "Get in Touch",
      description: "I'm open to connections and conversations about technology, projects, products and artificial intelligence."
    },
    contactForm: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "name@email.com",
      message: "Message",
      messagePlaceholder: "Tell me a bit about what you need...",
      submit: "Send message",
      subject: "Portfolio contact",
      bodyName: "Name",
      bodyEmail: "Email"
    },
    footer: {
      text: "© 2026 Gabriel Mota Valério. Software Engineering • PUC Minas."
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Salva no localStorage para manter a preferência do usuário ao recarregar a página
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      return translations[saved] ? saved : 'pt';
    } catch {
      return 'pt';
    }
  });

  const toggleLanguage = (lang) => {
    const next = lang ?? (language === 'pt' ? 'en' : 'pt');
    setLanguage(next);
    try {
      localStorage.setItem('portfolio_lang', next);
    } catch {
      // ignora navegadores sem localStorage
    }
  };

  // Atualiza o atributo lang do <html> para acessibilidade e SEO
  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

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
