import { Helmet } from 'react-helmet-async';
import { Sparkles, BookOpen, Wrench, Users, Heart } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import { articles } from '../data/articles';
import { aiTools } from '../data/aiTools';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre NEXA AI — NEXA AI</title>
        <meta name="description" content="NEXA AI es la plataforma en español para descubrir, comparar y aprender a usar las mejores herramientas de inteligencia artificial." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60 bg-gradient-to-b from-primary-950/10 to-transparent">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" /> Sobre nosotros
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre NEXA AI</h1>
          <p className="text-lg text-ink-400 max-w-2xl">
            Somos la plataforma en español que ayuda a personas y empresas a navegar el mundo de la inteligencia artificial.
          </p>
        </div>
      </section>

      <section className="container-prose py-12">
        <div className="prose-article">
          <h2>Nuestra misión</h2>
          <p>
            La inteligencia artificial está transformando el mundo a un ritmo vertiginoso. Pero la mayor parte del contenido de calidad está en inglés, y resulta técnico y difícil de entender para quienes no son expertos.
          </p>
          <p>
            NEXA AI nace con una misión clara: <strong>democratizar el acceso a la IA en español</strong>. Queremos que cualquier persona, sin importar su nivel técnico, pueda descubrir, comparar y aprender a usar las mejores herramientas de inteligencia artificial.
          </p>

          <h2>Qué hacemos</h2>
          <p>
            Producimos contenido práctico y honesto sobre IA en español:
          </p>
          <ul>
            <li><strong>Guías completas</strong> para dominar herramientas como ChatGPT, Claude o Midjourney</li>
            <li><strong>Comparativas detalladas</strong> entre las mejores herramientas de cada categoría</li>
            <li><strong>Tutoriales paso a paso</strong> para casos de uso reales</li>
            <li><strong>Análisis honestos</strong> de herramientas, con ventajas y desventajas</li>
            <li><strong>Noticias</strong> sobre los avances más importantes del sector</li>
          </ul>

          <h2>Nuestros valores</h2>
          <p>
            Nos guiamos por tres principios fundamentales:
          </p>
          <ol>
            <li><strong>Honestidad</strong>: no recibimos pagos ocultos por recomendar herramientas. Si algo es bueno, lo decimos. Si algo no lo es, también.</li>
            <li><strong>Accesibilidad</strong>: escribimos para personas, no para máquinas. El contenido debe ser comprensible sin un doctorado en informática.</li>
            <li><strong>Independencia</strong>: no pertenecemos a ninguna empresa de IA. Nuestras recomendaciones son imparciales.</li>
          </ol>

          <h2>En números</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8">
          {[
            { icon: BookOpen, value: `${articles.length}`, label: 'Artículos publicados', color: 'text-primary-400' },
            { icon: Wrench, value: `${aiTools.length}`, label: 'Herramientas analizadas', color: 'text-accent-400' },
            { icon: Users, value: '12.000+', label: 'Lectores mensuales', color: 'text-success-400' },
            { icon: Heart, value: '100%', label: 'Contenido en español', color: 'text-error-400' },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl bg-ink-900/50 border border-ink-800/60 text-center">
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-ink-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide py-16">
        <Newsletter />
      </section>
    </>
  );
}
