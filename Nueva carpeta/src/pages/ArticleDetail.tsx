import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, ArrowLeft, Share2, Calendar, Tag } from 'lucide-react';
import { articles } from '../data/articles';
import Newsletter from '../components/Newsletter';
import ArticleCard from '../components/ArticleCard';

const categoryColors: Record<string, string> = {
  'Guías': 'bg-primary-500/15 text-primary-300 border-primary-500/30',
  'Comparativas': 'bg-accent-500/15 text-accent-300 border-accent-500/30',
  'Noticias': 'bg-success-500/15 text-success-300 border-success-500/30',
  'Tutoriales': 'bg-warning-500/15 text-warning-300 border-warning-500/30',
  'Opinión': 'bg-error-500/15 text-error-300 border-error-500/30',
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/articulos" replace />;

  const related = articles.filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t)))).slice(0, 3);

  const renderContent = (block: string) => {
    if (block.startsWith('## ')) {
      return <h2 key={block}>{block.replace('## ', '')}</h2>;
    }
    if (block.startsWith('### ')) {
      return <h3 key={block}>{block.replace('### ', '')}</h3>;
    }
    if (block.startsWith('> ')) {
      return <blockquote key={block}>{block.replace('> ', '')}</blockquote>;
    }
    if (block.startsWith('- ') || block.startsWith('1. ') || block.startsWith('2. ') || block.startsWith('3. ') || block.startsWith('4. ') || block.startsWith('5. ') || block.startsWith('6. ') || block.startsWith('7. ')) {
      const items = block.split('\n').filter((l) => l.trim());
      const isOrdered = /^\d+\./.test(items[0]);
      const listItems = items.map((item) => {
        const text = item.replace(/^[-]\s|^\d+\.\s/, '');
        return <li key={item} dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />;
      });
      return isOrdered ? <ol key={block}>{listItems}</ol> : <ul key={block}>{listItems}</ul>;
    }
    if (block.startsWith('|')) {
      const rows = block.split('\n').filter((r) => r.trim() && !r.includes('---'));
      if (rows.length < 2) return <p key={block}>{block}</p>;
      const headers = rows[0].split('|').filter((c) => c.trim()).map((c) => c.trim());
      const bodyRows = rows.slice(1).map((r) => r.split('|').filter((c) => c.trim()).map((c) => c.trim()));
      return (
        <div key={block} className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-ink-800 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-ink-800/60">
                {headers.map((h) => <th key={h} className="px-4 py-3 text-left font-semibold text-white border-b border-ink-700">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-ink-900/40' : 'bg-ink-900/20'}>
                  {row.map((cell, j) => <td key={j} className="px-4 py-3 text-ink-300 border-b border-ink-800/40">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <p key={block} dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />;
  };

  return (
    <>
      <Helmet>
        <title>{article.title} — NEXA AI</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      {/* Hero */}
      <article className="pt-16">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/70 to-ink-950" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-wide pb-10">
              <Link to="/articulos" className="inline-flex items-center gap-1 text-sm text-ink-300 hover:text-white transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Volver a artículos
              </Link>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${categoryColors[article.category]}`}>
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-ink-300">
                <div className="flex items-center gap-2">
                  <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-white">{article.author.name}</p>
                    <p className="text-xs text-ink-500">{article.author.role}</p>
                  </div>
                </div>
                <span className="w-1 h-1 rounded-full bg-ink-600" />
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(article.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="w-1 h-1 rounded-full bg-ink-600" />
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readingTime} min de lectura</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-prose py-12">
          <p className="text-xl text-ink-300 leading-relaxed mb-8 font-light border-l-4 border-primary-600 pl-5">
            {article.excerpt}
          </p>

          <div className="prose-article">
            {article.content.map((block) => renderContent(block))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-ink-800/60">
            <Tag className="w-4 h-4 text-ink-500" />
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-lg bg-ink-800/60 text-sm text-ink-300 border border-ink-700/40">
                {tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 mt-6">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-ink-800/60 hover:bg-ink-800 text-sm text-ink-300 hover:text-white transition-colors border border-ink-700/40">
              <Share2 className="w-4 h-4" /> Compartir
            </button>
          </div>

          {/* Author */}
          <div className="mt-10 p-6 rounded-2xl bg-ink-900/50 border border-ink-800/60 flex items-center gap-4">
            <img src={article.author.avatar} alt={article.author.name} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <p className="text-xs text-ink-500 uppercase tracking-wide">Escrito por</p>
              <p className="text-lg font-bold text-white">{article.author.name}</p>
              <p className="text-sm text-ink-400">{article.author.role} en NEXA AI</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-wide py-16">
          <h2 className="text-2xl font-bold text-white mb-6">Artículos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} />
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
