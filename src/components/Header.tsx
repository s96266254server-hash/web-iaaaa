import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/articulos', label: 'Artículos' },
  { to: '/usos-ia', label: 'Usos de IA' },
  { to: '/prompts', label: 'Prompts' },
  { to: '/herramientas', label: 'Herramientas' },
  { to: '/sobre-nosotros', label: 'Sobre NEXA' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-lg border-b border-ink-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/nexa-logo.png" alt="NEXA AI" className="w-10 h-10 object-contain rounded-xl group-hover:scale-105 transition-transform" />
          <span className="text-lg font-bold text-white tracking-tight">
            NEXA<span className="text-primary-400"> AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-ink-300 hover:text-white hover:bg-ink-800/50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/articulos"
            className="w-9 h-9 rounded-lg bg-ink-800/50 hover:bg-ink-800 flex items-center justify-center text-ink-400 hover:text-white transition-colors"
            aria-label="Buscar"
          >
            <Search className="w-4 h-4" />
          </Link>
          <Link
            to="/herramientas"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white text-sm font-medium transition-all shadow-lg shadow-primary-500/20"
          >
            Explorar herramientas
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-ink-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-ink-950/95 backdrop-blur-lg border-t border-ink-800/60 px-5 py-4 space-y-1 animate-fade-in-down">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-ink-300 hover:text-white hover:bg-ink-800/50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/herramientas"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium text-center"
          >
            Explorar herramientas
          </Link>
        </nav>
      )}
    </header>
  );
}
