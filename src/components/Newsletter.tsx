import { useState } from 'react';
import { Mail, CircleCheck as CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-ink-800/60 bg-gradient-to-br from-primary-900/30 via-ink-900 to-accent-900/20 p-8 md:p-12">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-primary-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Mantente al día con la IA
        </h2>
        <p className="text-ink-400 mb-6">
          Recibe cada semana los mejores artículos, comparativas y tutoriales sobre inteligencia artificial. Sin spam, solo contenido de valor.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-success-400 animate-scale-in">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">¡Te has suscrito! Revisa tu correo.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-ink-950/60 border border-ink-700 text-white placeholder-ink-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-medium transition-all shadow-lg shadow-primary-500/20 whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        )}

        <p className="text-xs text-ink-500 mt-4">Más de 12.000 personas ya nos leen cada semana.</p>
      </div>
    </section>
  );
}
