import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Wrench, Search, Filter, Star } from 'lucide-react';
import { aiTools } from '../data/aiTools';
import ToolCard from '../components/ToolCard';
import type { ToolCategory } from '../types';

const categories: ('Todos' | ToolCategory)[] = ['Todos', 'Texto', 'Imagen', 'Video', 'Audio', 'Código', 'Productividad', 'Diseño', 'Análisis'];
const pricingFilters = ['Todos', 'Gratis', 'Freemium', 'De pago'] as const;

export default function AITools() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('categoria') || 'Todos';
  const [search, setSearch] = useState('');
  const [pricing, setPricing] = useState<string>('Todos');

  const filtered = useMemo(() => {
    return aiTools.filter((t) => {
      const matchesCategory = activeCategory === 'Todos' || t.category === activeCategory;
      const matchesPricing = pricing === 'Todos' || t.pricing === pricing;
      const lowerSearch = search.toLowerCase();
      const matchesSearch =
        !search ||
        t.name.toLowerCase().includes(lowerSearch) ||
        t.tagline.toLowerCase().includes(lowerSearch) ||
        t.description.toLowerCase().includes(lowerSearch);
      return matchesCategory && matchesPricing && matchesSearch;
    });
  }, [activeCategory, pricing, search]);

  const setCategory = (cat: string) => {
    if (cat === 'Todos') searchParams.delete('categoria');
    else searchParams.set('categoria', cat);
    setSearchParams(searchParams);
  };

  return (
    <>
      <Helmet>
        <title>Herramientas de IA — NEXA AI</title>
        <meta name="description" content="Catálogo de las mejores herramientas de inteligencia artificial, analizadas y comparadas en español." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60 bg-gradient-to-b from-accent-950/10 to-transparent">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-accent-400 text-sm font-medium mb-3">
            <Wrench className="w-4 h-4" /> Herramientas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Catálogo de herramientas IA</h1>
          <p className="text-lg text-ink-400 max-w-2xl">
            Análisis honesto de las mejores herramientas de inteligencia artificial. Compara características, precios y casos de uso.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-ink-400">
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-warning-400 fill-current" /> Valoraciones reales</span>
            <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4 text-primary-400" /> {aiTools.length} herramientas</span>
            <span className="flex items-center gap-1.5"><Filter className="w-4 h-4 text-accent-400" /> Filtra por categoría y precio</span>
          </div>
        </div>
      </section>

      <section className="container-wide py-8">
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar herramientas..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-ink-900/60 border border-ink-700/60 text-white placeholder-ink-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/40 transition-all"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 flex-1">
              <span className="text-sm text-ink-500 font-medium flex-shrink-0">Categoría:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-ink-800/60 text-ink-300 hover:bg-ink-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-sm text-ink-500 font-medium flex-shrink-0">Precio:</span>
              {pricingFilters.map((p) => (
                <button
                  key={p}
                  onClick={() => setPricing(p)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    pricing === p
                      ? 'bg-accent-600 text-white'
                      : 'bg-ink-800/60 text-ink-300 hover:bg-ink-800 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-ink-400 text-lg">No se encontraron herramientas con esos criterios.</p>
            <button
              onClick={() => { setSearch(''); setPricing('Todos'); setCategory('Todos'); }}
              className="mt-4 px-5 py-2 rounded-lg bg-ink-800 text-white text-sm font-medium hover:bg-ink-700 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-ink-500 mb-6">{filtered.length} {filtered.length === 1 ? 'herramienta' : 'herramientas'}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
