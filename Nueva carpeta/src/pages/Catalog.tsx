import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { aiTools, fuzzySearchTools } from '../data/aiTools';
import ToolCard from '../components/ToolCard';

const categories = ['Todos', 'Texto', 'Imagen', 'Video', 'Audio', 'Código', 'Productividad', 'Diseño', 'Análisis'] as const;
const pricings = ['Todos', 'Gratis', 'Freemium', 'De pago'] as const;

export default function Catalog() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedPricing, setSelectedPricing] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating');

  const filteredTools = useMemo(() => {
    let result = query.trim() ? fuzzySearchTools(query) : aiTools;
    if (selectedCategory !== 'Todos') {
      result = result.filter((t) => t.category === selectedCategory);
    }
    if (selectedPricing !== 'Todos') {
      result = result.filter((t) => t.pricing === selectedPricing);
    }
    result = [...result].sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });
    return result;
  }, [query, selectedCategory, selectedPricing, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-50 mb-2">Catálogo de herramientas</h1>
        <p className="text-ink-400">
          {filteredTools.length} herramienta{filteredTools.length !== 1 ? 's' : ''} de inteligencia artificial
        </p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nombre, descripción o caso de uso..."
          className="w-full pl-12 pr-4 py-3 bg-ink-900 border border-ink-800 rounded-xl text-sm text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all"
        />
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-ink-500 font-medium uppercase tracking-wide mt-1.5 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Categoría
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-ink-900 text-ink-400 hover:text-ink-200 border border-ink-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-start gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-ink-500 font-medium uppercase tracking-wide mt-1.5 mr-1">
            Precio
          </div>
          {pricings.map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPricing(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedPricing === p
                  ? 'bg-primary-600 text-white'
                  : 'bg-ink-900 text-ink-400 hover:text-ink-200 border border-ink-800'
              }`}
            >
              {p}
            </button>
          ))}

          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-ink-500">Ordenar:</span>
            <button
              onClick={() => setSortBy('rating')}
              className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                sortBy === 'rating' ? 'text-primary-300' : 'text-ink-500 hover:text-ink-300'
              }`}
            >
              Valoración
            </button>
            <button
              onClick={() => setSortBy('name')}
              className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                sortBy === 'name' ? 'text-primary-300' : 'text-ink-500 hover:text-ink-300'
              }`}
            >
              Nombre
            </button>
          </div>
        </div>
      </div>

      {filteredTools.length === 0 ? (
        <div className="text-center py-20">
          <Search className="w-12 h-12 text-ink-700 mx-auto mb-4" />
          <p className="text-ink-400 mb-1">No se encontraron herramientas</p>
          <p className="text-sm text-ink-500">Prueba con otros filtros o términos de búsqueda</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
