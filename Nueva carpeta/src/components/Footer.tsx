import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Linkedin, Github, Rss } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/60 bg-ink-950 mt-20">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold text-white">
                NEXA<span className="text-primary-400"> AI</span>
              </span>
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed">
              La plataforma en español para descubrir, comparar y aprender a usar las mejores herramientas de inteligencia artificial.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contenido</h4>
            <ul className="space-y-2">
              <li><Link to="/articulos" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Artículos</Link></li>
              <li><Link to="/usos-ia" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Usos de IA</Link></li>
              <li><Link to="/prompts" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Plantillas de Prompts</Link></li>
              <li><Link to="/articulos?categoria=Comparativas" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Comparativas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Herramientas</h4>
            <ul className="space-y-2">
              <li><Link to="/herramientas" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Catálogo completo</Link></li>
              <li><Link to="/herramientas?categoria=Texto" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">IA de texto</Link></li>
              <li><Link to="/herramientas?categoria=Imagen" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">IA de imagen</Link></li>
              <li><Link to="/herramientas?categoria=Audio" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">IA de audio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Conecta</h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
                { icon: Rss, label: 'RSS' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-ink-800/60 hover:bg-ink-700 flex items-center justify-center text-ink-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <Link to="/sobre-nosotros" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">
              Sobre NEXA AI
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-800/60 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-ink-500">
            © 2026 NEXA AI · Plataforma independiente de inteligencia artificial
          </p>
          <p className="text-xs text-ink-500">
            Hecho con dedicación para la comunidad hispanohablante de IA · Equipo A.S.R
          </p>
        </div>
      </div>
    </footer>
  );
}
