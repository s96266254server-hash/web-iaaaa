import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Copy, Check, Lightbulb, Terminal, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { promptTemplates, PromptCategory } from '../data/prompts';
import Newsletter from '../components/Newsletter';

const categories: ('Todos' | PromptCategory)[] = ['Todos', 'Escritura', 'Marketing', 'Programación', 'Educación', 'Productividad', 'Negocio', 'Creatividad', 'Análisis'];

const categoryColors: Record<string, string> = {
  'Escritura': 'bg-primary-500/15 text-primary-300 border-primary-500/30',
  'Marketing': 'bg-accent-500/15 text-accent-300 border-accent-500/30',
  'Programación': 'bg-success-500/15 text-success-300 border-success-500/30',
  'Educación': 'bg-warning-500/15 text-warning-300 border-warning-500/30',
  'Productividad': 'bg-primary-500/15 text-primary-300 border-primary-500/30',
  'Negocio': 'bg-accent-500/15 text-accent-300 border-accent-500/30',
  'Creatividad': 'bg-error-500/15 text-error-300 border-error-500/30',
  'Análisis': 'bg-success-500/15 text-success-300 border-success-500/30',
};

export default function Prompts() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return promptTemplates.filter((p) => {
      const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory;
      const lower = search.toLowerCase();
      const matchesSearch = !search || p.title.toLowerCase().includes(lower) || p.description.toLowerCase().includes(lower);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const handleCopy = (id: string, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Plantillas de Prompts — NEXA AI</title>
        <meta name="description" content="Plantillas de prompts listas para usar con cualquier IA. Copia, personaliza y obtén resultados profesionales." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60 bg-gradient-to-b from-accent-950/10 to-transparent">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-accent-400 text-sm font-medium mb-3">
            <Terminal className="w-4 h-4" /> Prompts
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Plantillas de prompts</h1>
          <p className="text-lg text-ink-400 max-w-2xl">
            Prompts profesionales listos para copiar y usar. Personaliza las partes entre corchetes y obtén resultados excepcionales con cualquier IA.
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
              placeholder="Buscar prompts..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-ink-900/60 border border-ink-700/60 text-white placeholder-ink-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/40 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-accent-600 text-white'
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
            <p className="text-ink-400 text-lg">No se encontraron prompts con esos criterios.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-ink-500 mb-6">{filtered.length} {filtered.length === 1 ? 'plantilla' : 'plantillas'}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filtered.map((prompt) => (
                <div
                  key={prompt.id}
                  className="flex flex-col bg-ink-900/50 border border-ink-800/60 rounded-2xl p-6 hover:border-accent-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium border mb-2 ${categoryColors[prompt.category]}`}>
                        {prompt.category}
                      </span>
                      <h3 className="text-lg font-bold text-white">{prompt.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-ink-400 mb-4">{prompt.description}</p>

                  <div className="relative flex-1 mb-4">
                    <div className={`bg-ink-950/80 border border-ink-700/50 rounded-xl p-4 font-mono text-sm text-ink-300 leading-relaxed overflow-hidden transition-all ${expandedId === prompt.id ? 'max-h-[600px]' : 'max-h-24'}`}>
                      <div className="absolute top-3 right-3 text-ink-600 text-xs font-sans">
                        {expandedId === prompt.id ? '' : ''}
                      </div>
                      {prompt.prompt}
                    </div>
                    {prompt.prompt.length > 200 && (
                      <button
                        onClick={() => setExpandedId(expandedId === prompt.id ? null : prompt.id)}
                        className="mt-2 flex items-center gap-1 text-xs text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        {expandedId === prompt.id ? (
                          <>Ver menos <ChevronUp className="w-3 h-3" /></>
                        ) : (
                          <>Ver prompt completo <ChevronDown className="w-3 h-3" /></>
                        )}
                      </button>
                    )}
                  </div>

                  {expandedId === prompt.id && (
                    <div className="mb-4 p-4 rounded-xl bg-warning-500/5 border border-warning-500/20 animate-fade-in">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-warning-400" />
                        <span className="text-sm font-semibold text-warning-300">Consejos de uso</span>
                      </div>
                      <ul className="space-y-1.5">
                        {prompt.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-ink-300 flex items-start gap-2">
                            <span className="text-warning-400 mt-0.5">•</span> {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={() => handleCopy(prompt.id, prompt.prompt)}
                    className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      copiedId === prompt.id
                        ? 'bg-success-600 text-white'
                        : 'bg-ink-800/60 hover:bg-ink-800 text-ink-200 hover:text-white border border-ink-700/50'
                    }`}
                  >
                    {copiedId === prompt.id ? (
                      <><Check className="w-4 h-4" /> ¡Copiado!</>
                    ) : (
                      <><Copy className="w-4 h-4" /> Copiar prompt</>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="container-wide py-16">
        <Newsletter />
      </section>
    </>
  );
}
