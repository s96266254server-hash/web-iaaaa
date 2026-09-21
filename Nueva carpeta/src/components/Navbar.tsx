import { Link, useLocation } from 'react-router-dom';
import { Chrome as Home, Compass, GitCompare, MessageSquare } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/catalogo', label: 'Catálogo', icon: Compass },
  { to: '/comparador', label: 'Comparador', icon: GitCompare },
  { to: '/asistente', label: 'Asistente', icon: MessageSquare },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/60 backdrop-blur-xl bg-ink-950/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src="/nexa-logo.png" alt="NEXA AI" className="w-10 h-10 object-contain rounded-xl group-hover:scale-105 transition-transform" />
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold text-ink-50 tracking-tight">NEXA AI</span>
              <span className="text-[10px] text-ink-500 font-medium">Plataforma de IA</span>
            </div>
          </Link>

          <nav className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary-500/10 text-primary-300'
                      : 'text-ink-400 hover:text-ink-100 hover:bg-ink-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <nav className="flex sm:hidden items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary-500/10 text-primary-300'
                      : 'text-ink-400 hover:text-ink-100 hover:bg-ink-900'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
