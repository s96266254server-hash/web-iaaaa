import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader as Loader2, CircleAlert as AlertCircle, MessageSquare, Trash2 } from 'lucide-react';
import { askNexa, type Tier } from '../lib/nexa';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  tier?: Tier;
}

const tierLabels: Record<Tier, string> = {
  primary: 'Nemotron Lightning',
  advanced: 'Nemotron Super',
  premium: 'Nemotron Ultra',
};

const tierColors: Record<Tier, string> = {
  primary: 'bg-primary-500/10 text-primary-300 border-primary-500/20',
  advanced: 'bg-accent-500/10 text-accent-300 border-accent-500/20',
  premium: 'bg-warning-500/10 text-warning-300 border-warning-500/20',
};

const suggestions = [
  '¿Qué IA es mejor para generar imágenes?',
  'Compara ChatGPT con Claude',
  '¿Cómo uso Midjourney?',
  'Herramientas de IA gratuitas para estudiantes',
  '¿Qué IA recomiendas para programar?',
  'Necesito transcribir audio a texto',
];

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input.trim(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const context = messages.length > 0
        ? messages.map((m) => `${m.role}: ${m.content}`).join('\n')
        : undefined;

      const result = await askNexa(userMessage.content, { context });

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: result.response,
          tier: result.tier,
        },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Algo salió mal');
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([]);
    setError(null);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-ink-50">
            <MessageSquare className="w-7 h-7 text-primary-400" />
            Asistente NEXA
          </h1>
          <p className="text-ink-400 mt-1">
            Pregúntame sobre cualquier herramienta de IA
          </p>
        </div>
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-ink-900 hover:bg-ink-800 border border-ink-800 text-xs text-ink-400 hover:text-ink-200 transition-all"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Limpiar
          </button>
        )}
      </div>

      {/* Chat container */}
      <div className="bg-ink-900 border border-ink-800 rounded-2xl overflow-hidden flex flex-col" style={{ minHeight: '60vh' }}>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-5 shadow-xl shadow-primary-500/20 animate-float">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-ink-50 mb-2">
                ¿En qué puedo ayudarte?
              </h2>
              <p className="text-sm text-ink-400 max-w-sm mb-6">
                Soy NEXA, tu asistente especializado en herramientas de IA.
                Pregúntame lo que quieras.
              </p>
              <div className="grid gap-2 sm:grid-cols-2 max-w-lg w-full">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInput(suggestion)}
                    className="text-left px-3.5 py-2.5 rounded-xl border border-ink-800 hover:border-ink-700 hover:bg-ink-800/50 transition-all text-xs text-ink-300 hover:text-ink-100"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
            >
              <div className={`max-w-[85%] ${msg.role === 'user' ? '' : 'flex flex-col gap-2'}`}>
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    {msg.tier && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${tierColors[msg.tier]}`}>
                        {tierLabels[msg.tier]}
                      </span>
                    )}
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-primary-600 text-white rounded-br-sm'
                      : 'bg-ink-800 border border-ink-700 text-ink-100 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-ink-800 border border-ink-700 rounded-2xl rounded-bl-sm px-4 py-3">
                  <Loader2 className="w-4 h-4 text-ink-400 animate-spin" />
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="flex justify-center animate-fade-in">
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-error-500/10 border border-error-500/20 text-error-300 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-ink-800 p-3 sm:p-4">
          <form onSubmit={handleSubmit} className="flex gap-2 items-end">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="Escribe tu pregunta sobre IA..."
              rows={1}
              disabled={loading}
              className="flex-1 resize-none px-4 py-3 bg-ink-800 border border-ink-700 rounded-xl text-sm text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all disabled:opacity-50"
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary-600 hover:bg-primary-500 disabled:bg-ink-800 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all hover:shadow-lg hover:shadow-primary-500/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
