import Navbar from "../../components/sections/navbar.jsx";
import Hero from "../../components/sections/hero.jsx";
import About from "../../components/sections/about.jsx";
import Experience from "../../components/sections/experience.jsx";
import Projects from "../../components/sections/projects.jsx";
import Contact from "../../components/sections/contact.jsx";
import Footer from "../../components/sections/footer.jsx";

function Home() {
  return (
    <div className="bg-[var(--color-dark-bg)] text-slate-100 min-h-screen relative selection:bg-emerald-500 selection:text-black">
      <header>
        <Navbar />
      </header>

      {/* Luz verde radial de fundo */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none z-0"></div>

      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;