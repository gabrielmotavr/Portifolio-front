import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx'
import Home from './pages/home/home.jsx';
import Contato from './pages/contato/contato.jsx';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-4">
        <Home />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<h1>Sobre Mim</h1>} />
          <Route path="/experiencias" element={<h1>Experiências</h1>} />
          <Route path="/projetos" element={<h1>Projetos</h1>} />
          <Route path="/contato" element={<Contato />} />
        </Routes> */}
      </main>
    </BrowserRouter>
  );
}