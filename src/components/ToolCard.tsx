import { Link } from 'react-router-dom';
import { Star, ExternalLink, Check, X } from 'lucide-react';
import type { AITool } from '../types';

const pricingColors: Record<string, string> = {
  'Gratis': 'bg-success-500/15 text-success-300 border-success-500/30',
  'Freemium': 'bg-primary-500/15 text-primary-300 border-primary-500/30',
  'De pago': 'bg-warning-500/15 text-warning-300 border-warning-500/30',
};

export default function ToolCard({ tool }: { tool: AITool }) {
  return (
    <Link
      to={`/herramientas/${tool.slug}`}
      className="group flex flex-col bg-ink-900/50 border border-ink-800/60 rounded-2xl p-6 hover:border-primary-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl overflow-hidden bg-ink-800 flex-shrink-0 border border-ink-700/50">
          <img src={tool.logo} alt={tool.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors truncate">{tool.name}</h3>
          </div>
          <p className="text-sm text-ink-400 line-clamp-2">{tool.tagline}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-ink-800/60 text-ink-300 border border-ink-700/50">{tool.category}</span>
        <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${pricingColors[tool.pricing]}`}>{tool.pricing}</span>
        <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-warning-500/10 text-warning-300 border border-warning-500/20">
          <Star className="w-3 h-3 fill-current" /> {tool.rating}
        </span>
      </div>

      <p className="text-sm text-ink-400 line-clamp-3 mb-4 flex-1">{tool.description}</p>

      <div className="flex items-center gap-3 text-sm">
        <span className="text-ink-500">Lo bueno:</span>
        <span className="flex items-center gap-1 text-success-400">
          <Check className="w-3.5 h-3.5" /> {tool.pros[0]}
        </span>
      </div>
      <div className="flex items-center gap-3 text-sm mt-1.5">
        <span className="text-ink-500">A mejorar:</span>
        <span className="flex items-center gap-1 text-error-400">
          <X className="w-3.5 h-3.5" /> {tool.cons[0]}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-ink-800/60">
        <span className="text-xs text-ink-500">Ideal para: <span className="text-ink-300">{tool.bestFor}</span></span>
        <span className="flex items-center gap-1 text-xs font-medium text-primary-400 group-hover:gap-2 transition-all">
          Ver análisis <ExternalLink className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
