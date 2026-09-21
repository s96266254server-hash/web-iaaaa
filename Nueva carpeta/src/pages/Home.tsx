import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, BookOpen, Wrench, Users, Zap, Target, Award, Sparkles, Terminal, Layers } from 'lucide-react';
import { articles } from '../data/articles';
import { aiTools } from '../data/aiTools';
import { useCases } from '../data/useCases';
import { promptTemplates } from '../data/prompts';
import ArticleCard from '../components/ArticleCard';
import ToolCard from '../components/ToolCard';
import Newsletter from '../components/Newsletter';

export default function Home() {
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 2);
  const recentArticles = articles.slice(0, 6);
  const topTools = aiTools.slice(0, 6);
  const topUseCases = useCases.slice(0, 6);
  const topPrompts = promptTemplates.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>NEXA AI — Descubre, compara y aprende IA en español</title>
        <meta name="description" content="La plataforma en español para descubrir, comparar y aprender a usar las mejores herramientas de inteligencia artificial." />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 via-transparent to-ink-950" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />

        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6 animate-fade-in-down">
              <Sparkles className="w-4 h-4" />
              Tu guía en español sobre inteligencia artificial
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
              Descubre el poder de la{' '}
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
                inteligencia artificial
              </span>{' '}
              en español
            </h1>

            <p className="text-lg text-ink-400 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Guías profundas, comparativas detalladas y tutoriales prácticos sobre las mejores herramientas de IA. Todo en un mismo lugar, pensado para la comunidad hispanohablante.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/articulos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-medium transition-all shadow-lg shadow-primary-500/20"
              >
                <BookOpen className="w-5 h-5" />
                Explorar artículos
              </Link>
              <Link
                to="/herramientas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink-800/60 hover:bg-ink-800 border border-ink-700/60 text-white font-medium transition-all"
              >
                <Wrench className="w-5 h-5" />
                Catálogo de herramientas
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {[
                { icon: BookOpen, label: `${articles.length} artículos`, sub: 'y creciendo' },
                { icon: Wrench, label: `${aiTools.length} herramientas`, sub: 'analizadas' },
                { icon: Users, label: '12.000+', sub: 'lectores' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ink-800/60 border border-ink-700/40 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{stat.label}</p>
                    <p className="text-xs text-ink-500">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured articles */}
      {featuredArticles.length > 0 && (
        <section className="container-wide py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-2">
                <TrendingUp className="w-4 h-4" /> Destacados
              </div>
              <h2 className="text-3xl font-bold text-white">Artículos que no te puedes perder</h2>
            </div>
            <Link to="/articulos" className="hidden sm:flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured />
            ))}
          </div>
        </section>
      )}

      {/* Recent articles */}
      <section className="container-wide py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-accent-400 text-sm font-medium mb-2">
              <BookOpen className="w-4 h-4" /> Últimas publicaciones
            </div>
            <h2 className="text-3xl font-bold text-white">Lo más reciente</h2>
          </div>
          <Link to="/articulos" className="hidden sm:flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Top tools */}
      <section className="container-wide py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-success-400 text-sm font-medium mb-2">
              <Award className="w-4 h-4" /> Herramientas destacadas
            </div>
            <h2 className="text-3xl font-bold text-white">Las mejores IA, analizadas</h2>
            <p className="text-ink-400 mt-2">Análisis honesto de las herramientas de IA más potentes del momento.</p>
          </div>
          <Link to="/herramientas" className="hidden sm:flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium">
            Ver catálogo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="container-wide py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-2">
              <Layers className="w-4 h-4" /> Campos de aplicación
            </div>
            <h2 className="text-3xl font-bold text-white">¿En qué puede ayudarte la IA?</h2>
            <p className="text-ink-400 mt-2">Descubre los distintos campos en los que la IA puede transformar tu trabajo y tu día a día.</p>
          </div>
          <Link to="/usos-ia" className="hidden sm:flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topUseCases.map((uc) => (
            <Link
              key={uc.id}
              to="/usos-ia"
              className="group p-6 rounded-2xl bg-ink-900/50 border border-ink-800/60 hover:border-primary-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center mb-4">
                <uc.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{uc.title}</h3>
              <p className="text-sm text-ink-400 leading-relaxed mb-3">{uc.shortDesc}</p>
              <div className="flex flex-wrap gap-1.5">
                {uc.fields.slice(0, 3).map((f) => (
                  <span key={f.name} className="px-2 py-0.5 rounded-md text-xs bg-ink-800/60 text-ink-400">{f.name}</span>
                ))}
                <span className="px-2 py-0.5 rounded-md text-xs bg-ink-800/60 text-ink-500">+{uc.fields.length - 3} más</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Prompts teaser */}
      <section className="container-wide py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-accent-400 text-sm font-medium mb-2">
              <Terminal className="w-4 h-4" /> Prompts
            </div>
            <h2 className="text-3xl font-bold text-white">Prompts listos para usar</h2>
            <p className="text-ink-400 mt-2">Plantillas profesionales que puedes copiar y personalizar para obtener resultados excepcionales.</p>
          </div>
          <Link to="/prompts" className="hidden sm:flex items-center gap-1 text-sm text-accent-400 hover:gap-2 transition-all font-medium">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {topPrompts.map((prompt) => (
            <Link
              key={prompt.id}
              to="/prompts"
              className="group p-5 rounded-2xl bg-ink-900/50 border border-ink-800/60 hover:border-accent-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-accent-500/15 text-accent-300 border border-accent-500/30">{prompt.category}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">{prompt.title}</h3>
              <p className="text-sm text-ink-400 line-clamp-2">{prompt.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: 'Contenido en español', desc: 'Olvídate de traducir. Todo nuestro contenido está escrito originalmente en español, con contexto local.', color: 'text-primary-400' },
            { icon: Zap, title: 'Análisis honesto', desc: 'Sin patrocinios ocultos. Analizamos ventajas, desventajas y casos de uso reales de cada herramienta.', color: 'text-accent-400' },
            { icon: BookOpen, title: 'Para todos los niveles', desc: 'Desde tu primera conversación con ChatGPT hasta prompting avanzado. Hay contenido para ti.', color: 'text-success-400' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-ink-900/50 border border-ink-800/60 hover:border-ink-700 transition-colors">
              <div className={`w-12 h-12 rounded-xl bg-ink-800/60 flex items-center justify-center mb-4`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-ink-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-wide py-16">
        <Newsletter />
      </section>
    </>
  );
}
