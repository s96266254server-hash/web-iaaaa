import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, Filter } from 'lucide-react';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import type { ArticleCategory } from '../types';

const categories: ('Todos' | ArticleCategory)[] = ['Todos', 'Guías', 'Comparativas', 'Noticias', 'Tutoriales', 'Opinión'];

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('categoria') || 'Todos';
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = activeCategory === 'Todos' || a.category === activeCategory;
      const lowerSearch = search.toLowerCase();
      const matchesSearch =
        !search ||
        a.title.toLowerCase().includes(lowerSearch) ||
        a.excerpt.toLowerCase().includes(lowerSearch) ||
        a.tags.some((t) => t.toLowerCase().includes(lowerSearch));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const setCategory = (cat: string) => {
    if (cat === 'Todos') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <Helmet>
        <title>Artículos sobre IA — NEXA AI</title>
        <meta name="description" content="Guías, comparativas, tutoriales y noticias sobre inteligencia artificial en español." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60 bg-gradient-to-b from-primary-950/10 to-transparent">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-3">
            <BookOpen className="w-4 h-4" /> Artículos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Artículos sobre IA</h1>
          <p className="text-lg text-ink-400 max-w-2xl">
            Guías profundas, comparativas detalladas, tutoriales prácticos y noticias sobre el mundo de la inteligencia artificial.
          </p>
        </div>
      </section>

      <section className="container-wide py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar artículos..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-ink-900/60 border border-ink-700/60 text-white placeholder-ink-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/40 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-ink-500 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-ink-800/60 text-ink-300 hover:bg-ink-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-ink-400 text-lg">No se encontraron artículos con esos criterios.</p>
            <button
              onClick={() => { setSearch(''); setCategory('Todos'); }}
              className="mt-4 px-5 py-2 rounded-lg bg-ink-800 text-white text-sm font-medium hover:bg-ink-700 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-ink-500 mb-6">{filtered.length} {filtered.length === 1 ? 'artículo' : 'artículos'}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
