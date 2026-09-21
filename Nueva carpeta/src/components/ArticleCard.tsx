import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import type { Article } from '../types';

const categoryColors: Record<string, string> = {
  'Guías': 'bg-primary-500/15 text-primary-300 border-primary-500/30',
  'Comparativas': 'bg-accent-500/15 text-accent-300 border-accent-500/30',
  'Noticias': 'bg-success-500/15 text-success-300 border-success-500/30',
  'Tutoriales': 'bg-warning-500/15 text-warning-300 border-warning-500/30',
  'Opinión': 'bg-error-500/15 text-error-300 border-error-500/30',
};

export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link
      to={`/articulos/${article.slug}`}
      className={`group relative flex flex-col bg-ink-900/50 border border-ink-800/60 rounded-2xl overflow-hidden hover:border-primary-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 ${
        featured ? 'md:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-56 md:h-auto' : 'h-48'}`}>
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${categoryColors[article.category]}`}>
          {article.category}
        </span>
      </div>

      <div className={`flex flex-col flex-1 p-5 ${featured ? 'md:p-8 justify-center' : ''}`}>
        <div className="flex items-center gap-3 text-xs text-ink-500 mb-3">
          <span>{new Date(article.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <span className="w-1 h-1 rounded-full bg-ink-600" />
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readingTime} min</span>
        </div>

        <h3 className={`font-bold text-white leading-tight group-hover:text-primary-300 transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {article.title}
        </h3>

        <p className={`text-ink-400 mt-3 leading-relaxed ${featured ? 'text-base' : 'text-sm'} line-clamp-3`}>
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex items-center gap-2">
            <img src={article.author.avatar} alt={article.author.name} className="w-7 h-7 rounded-full object-cover" />
            <span className="text-xs text-ink-400">{article.author.name}</span>
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-primary-400 group-hover:gap-2 transition-all">
            Leer <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
