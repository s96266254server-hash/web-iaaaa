import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Star, Check, X, ExternalLink, ThumbsUp, Target, Sparkles } from 'lucide-react';
import { aiTools } from '../data/aiTools';
import Newsletter from '../components/Newsletter';

const pricingColors: Record<string, string> = {
  'Gratis': 'bg-success-500/15 text-success-300 border-success-500/30',
  'Freemium': 'bg-primary-500/15 text-primary-300 border-primary-500/30',
  'De pago': 'bg-warning-500/15 text-warning-300 border-warning-500/30',
};

export default function ToolDetail() {
  const { slug } = useParams();
  const tool = aiTools.find((t) => t.slug === slug);

  if (!tool) return <Navigate to="/herramientas" replace />;

  const related = aiTools.filter((t) => t.id !== tool.id && t.category === tool.category).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{tool.name} — Análisis | NEXA AI</title>
        <meta name="description" content={tool.tagline} />
      </Helmet>

      <section className="pt-24 pb-8 bg-gradient-to-b from-primary-950/10 to-transparent border-b border-ink-800/60">
        <div className="container-wide">
          <Link to="/herramientas" className="inline-flex items-center gap-1 text-sm text-ink-300 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Volver al catálogo
          </Link>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-ink-800 border border-ink-700/50 flex-shrink-0">
              <img src={tool.logo} alt={tool.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white">{tool.name}</h1>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-ink-800/60 text-ink-300 border border-ink-700/50">{tool.category}</span>
                <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${pricingColors[tool.pricing]}`}>{tool.pricing}</span>
              </div>
              <p className="text-lg text-ink-400 mb-4">{tool.tagline}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((n) => (
                    <Star key={n} className={`w-5 h-5 ${n <= Math.round(tool.rating) ? 'text-warning-400 fill-current' : 'text-ink-700'}`} />
                  ))}
                </div>
                <span className="text-white font-semibold">{tool.rating}</span>
                <span className="text-ink-500 text-sm">/ 5</span>
              </div>
            </div>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-medium transition-all shadow-lg shadow-primary-500/20 whitespace-nowrap"
            >
              Visitar web <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">¿Qué es {tool.name}?</h2>
              <p className="text-ink-300 text-lg leading-relaxed">{tool.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Características principales</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tool.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-ink-900/50 border border-ink-800/60">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/15 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-primary-400" />
                    </div>
                    <span className="text-sm text-ink-200">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-success-500/5 border border-success-500/20">
                <h3 className="flex items-center gap-2 text-lg font-bold text-success-300 mb-4">
                  <ThumbsUp className="w-5 h-5" /> Lo bueno
                </h3>
                <ul className="space-y-3">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-ink-200">
                      <Check className="w-4 h-4 text-success-400 flex-shrink-0 mt-0.5" /> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-error-500/5 border border-error-500/20">
                <h3 className="flex items-center gap-2 text-lg font-bold text-error-300 mb-4">
                  <X className="w-5 h-5" /> A mejorar
                </h3>
                <ul className="space-y-3">
                  {tool.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-ink-200">
                      <X className="w-4 h-4 text-error-400 flex-shrink-0 mt-0.5" /> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-ink-900/50 border border-ink-800/60 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-accent-400" />
                <h3 className="font-bold text-white">Ficha rápida</h3>
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <dt className="text-ink-500">Categoría</dt>
                  <dd className="text-ink-200 font-medium">{tool.category}</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt className="text-ink-500">Precio</dt>
                  <dd className="text-ink-200 font-medium">{tool.pricing}</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt className="text-ink-500">Valoración</dt>
                  <dd className="text-ink-200 font-medium flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-warning-400 fill-current" /> {tool.rating}
                  </dd>
                </div>
                <div className="pt-3 border-t border-ink-800">
                  <dt className="text-ink-500 mb-2">Ideal para</dt>
                  <dd className="text-ink-200">{tool.bestFor}</dd>
                </div>
              </dl>
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-medium transition-all shadow-lg shadow-primary-500/20"
              >
                Probar {tool.name} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-wide py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Herramientas similares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((t) => (
              <Link key={t.id} to={`/herramientas/${t.slug}`} className="group flex flex-col bg-ink-900/50 border border-ink-800/60 rounded-2xl p-5 hover:border-primary-500/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-ink-800 flex-shrink-0 border border-ink-700/40">
                    <img src={t.logo} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-primary-300 transition-colors">{t.name}</h3>
                    <p className="text-xs text-ink-500">{t.category} · {t.pricing}</p>
                  </div>
                </div>
                <p className="text-sm text-ink-400 line-clamp-2">{t.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container-wide py-16">
        <Newsletter />
      </section>
    </>
  );
}
