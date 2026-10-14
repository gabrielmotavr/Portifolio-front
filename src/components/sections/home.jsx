import Navbar from "../../components/sections/navbar.jsx";
import Hero from "../../components/sections/hero.jsx";
import About from "../../components/sections/about.jsx";
import Experience from "../../components/sections/experience.jsx";
import Projects from "../../components/sections/projects.jsx";
import Contact from "../../components/sections/contact.jsx";
import Footer from "../../components/sections/footer.jsx";
import MatrixBackground from "../../components/matrix-background.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
//import GitHubRepos from "../GitHub/GitHubRepos.jsx";
//import GitHubProfileCard from "../GitHub/GitHubProfileCard.jsx";
//import GitHubDashboard from "../../components/GitHub/GitHubDashboard.jsx";

function Home() {

  const location = useLocation();

  useEffect(() => {
    // Se a URL tiver um hash (ex: /#contato)
    if (location.hash) {
      const elementId = location.hash.replace('#', ''); // vira 'contato'
      
      // Pequeno timeout para garantir que o DOM da Home foi totalmente renderizado
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block:'start' });
        }
      }, 300);
    } else {
      // Se não tiver hash, rola para o topo ao entrar na home
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-[var(--color-dark-bg)] text-slate-100 min-h-screen relative selection:bg-emerald-500 selection:text-black">
      <header>
        <Navbar />
      </header>

      <MatrixBackground />

      {/* Luz verde radial de fundo */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none z-0"></div>

      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <GitHubDashboard /> */}
        {/* <GitHubRepos username="gabrielmotavr" />  */}
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;