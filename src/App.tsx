import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import AITools from './pages/AITools';
import ToolDetail from './pages/ToolDetail';
import About from './pages/About';
import Prompts from './pages/Prompts';
import UseCasesPage from './pages/UseCases';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ink-950">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/articulos/:slug" element={<ArticleDetail />} />
          <Route path="/usos-ia" element={<UseCasesPage />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/herramientas" element={<AITools />} />
          <Route path="/herramientas/:slug" element={<ToolDetail />} />
          <Route path="/sobre-nosotros" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
