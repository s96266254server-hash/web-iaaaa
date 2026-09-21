import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Copy, Check } from 'lucide-react';
import { useCases } from '../data/useCases';
import Newsletter from '../components/Newsletter';

export default function UseCasesPage() {
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useCases.filter((uc) => {
    const lower = search.toLowerCase();
    return !search ||
      uc.title.toLowerCase().includes(lower) ||
      uc.shortDesc.toLowerCase().includes(lower) ||
      uc.fields.some((f) => f.name.toLowerCase().includes(lower));
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Campos de aplicación de IA — NEXA AI</title>
        <meta name="description" content="Descubre en qué campos puede ayudarte la inteligencia artificial: escritura, marketing, programación, educación, salud, diseño, negocio y más." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60 bg-gradient-to-b from-primary-950/10 to-transparent">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-3">
            <span className="w-4 h-4 rounded bg-primary-400" /> Campos de aplicación
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">¿En qué puede ayudarte la IA?</h1>
          <p className="text-lg text-ink-400 max-w-2xl">
            Explora los distintos campos en los que la inteligencia artificial puede transformar tu trabajo, tu negocio o tu día a día. Cada campo incluye ejemplos concretos y un prompt para empezar.
          </p>
        </div>
      </section>

      <section className="container-wide py-8">
        <div className="relative mb-8 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar campos o tareas..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-ink-900/60 border border-ink-700/60 text-white placeholder-ink-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/40 transition-all"
          />
        </div>

        <div className="space-y-6">
          {filtered.map((uc, idx) => (
            <div
              key={uc.id}
              className="bg-ink-900/50 border border-ink-800/60 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Left: overview */}
                <div className="lg:col-span-1 p-6 lg:p-8 bg-gradient-to-br from-ink-800/30 to-transparent border-b lg:border-b-0 lg:border-r border-ink-800/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center">
                      <uc.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <span className="text-xs text-ink-500 font-mono">#{String(idx + 1).padStart(2, '0')}</span>
                      <h2 className="text-xl font-bold text-white">{uc.title}</h2>
                    </div>
                  </div>
                  <p className="text-sm text-ink-400 leading-relaxed mb-4">{uc.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {uc.tools.map((tool) => (
                      <span key={tool} className="px-2.5 py-1 rounded-lg bg-ink-800/60 text-xs text-ink-300 border border-ink-700/40">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: fields + prompt */}
                <div className="lg:col-span-2 p-6 lg:p-8">
                  <h3 className="text-sm font-semibold text-ink-500 uppercase tracking-wide mb-4">¿Qué puedes hacer?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {uc.fields.map((field) => (
                      <div key={field.name} className="flex items-start gap-3 p-3 rounded-xl bg-ink-800/30 border border-ink-700/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white">{field.name}</p>
                          <p className="text-xs text-ink-400 mt-0.5 leading-relaxed">{field.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-ink-950/60 border border-accent-500/20">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-accent-400 uppercase tracking-wide">Prompt de ejemplo</span>
                      <button
                        onClick={() => handleCopy(uc.id, uc.promptHint)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          copiedId === uc.id
                            ? 'bg-success-600 text-white'
                            : 'bg-ink-800/60 hover:bg-ink-800 text-ink-300'
                        }`}
                      >
                        {copiedId === uc.id ? <><Check className="w-3 h-3" /> Copiado</> : <><Copy className="w-3 h-3" /> Copiar</>}
                      </button>
                    </div>
                    <p className="text-sm font-mono text-ink-300 leading-relaxed">{uc.promptHint}</p>
                  </div>

                  <Link
                    to="/prompts"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium"
                  >
                    Ver más prompts <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-400 text-lg">No se encontraron campos con esos criterios.</p>
          </div>
        )}
      </section>

      <section className="container-wide py-16">
        <Newsletter />
      </section>
    </>
  );
}
