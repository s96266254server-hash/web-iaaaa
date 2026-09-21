import { useEffect, useRef, useState } from 'react';
import { Bot, MessageSquare, Send, Sparkles, User, X } from 'lucide-react';
import { askNexa, type Tier } from '../lib/nexa';

interface Message {
  role: 'assistant' | 'user';
  text: string;
  tier?: Tier;
}

const suggestions = [
  '¿Qué IA me recomiendas para generar imágenes?',
  'Compara ChatGPT con Claude',
  '¿Qué herramientas de IA son gratis?',
  '¿Cuál me recomiendas para programar?',
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: '¡Hola! Soy NEXA AI. Puedo ayudarte a descubrir, comparar y aprender a usar herramientas de inteligencia artificial. ¿Qué necesitas?',
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  async function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const history = messages
      .slice(-12)
      .map((message) => `${message.role}: ${message.text}`)
      .join('\n');

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);
    setError(null);

    try {
      const result = await askNexa(trimmed, {
        context: history || undefined,
        tier: 'primary',
      });

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: result.response, tier: result.tier },
      ]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'No he podido responder ahora mismo.';
      setError(message.includes('NEXA no está configurado') ? message : 'No he podido conectar con NEXA AI. Inténtalo de nuevo en unos segundos.');
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'He tenido un problema conectando con el servicio de IA. Inténtalo de nuevo en unos segundos.',
        },
      ]);
    } finally {
      setTyping(false);
    }
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    void handleSend(input);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium shadow-xl shadow-primary-500/30 hover:scale-105 transition-all ${open ? 'opacity-0 pointer-events-none' : 'animate-fade-in-up'}`}
        aria-label="Abrir asistente NEXA AI"
      >
        <Sparkles className="w-5 h-5" />
        <span className="hidden sm:inline">Pregunta al asistente IA</span>
        <span className="sm:hidden">Asistente</span>
      </button>

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[540px] max-h-[75vh] flex flex-col bg-ink-900 border border-ink-700/60 rounded-2xl shadow-2xl shadow-black/50 animate-scale-in overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary-900/40 to-accent-900/30 border-b border-ink-700/60">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Asistente NEXA AI</p>
                <p className="text-xs text-success-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-success-400 animate-pulse" /> En línea
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg text-ink-400 hover:text-white hover:bg-ink-800 transition-colors" aria-label="Cerrar">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={`${msg.role}-${i}`} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-ink-700' : 'bg-gradient-to-br from-primary-500 to-accent-500'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-ink-300" /> : <Bot className="w-4 h-4 text-white" />}
                </div>
                <div className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-primary-600 text-white rounded-tr-sm' : 'bg-ink-800 text-ink-200 rounded-tl-sm'}`}>
                  {msg.text}
                  {msg.role === 'assistant' && msg.tier && (
                    <div className="mt-2 text-[10px] text-ink-500">Motor: {msg.tier}</div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-ink-800 rounded-tl-sm flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-ink-500 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-ink-500 animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 rounded-full bg-ink-500 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {error && <p className="text-xs text-error-300 px-1">{error}</p>}

            {messages.length === 1 && !typing && (
              <div className="pt-2 space-y-2">
                <p className="text-xs text-ink-500 px-1">Prueba con:</p>
                {suggestions.map((suggestion) => (
                  <button key={suggestion} onClick={() => void handleSend(suggestion)} className="w-full text-left px-3 py-2 rounded-lg bg-ink-800/50 hover:bg-ink-800 text-sm text-ink-300 hover:text-white border border-ink-700/40 transition-colors flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-primary-400 flex-shrink-0" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={submit} className="flex items-center gap-2 px-4 py-3 border-t border-ink-700/60 bg-ink-900">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              maxLength={2000}
              disabled={typing}
              className="flex-1 px-3 py-2 rounded-lg bg-ink-800 border border-ink-700 text-sm text-white placeholder-ink-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all disabled:opacity-50"
            />
            <button type="submit" disabled={!input.trim() || typing} className="w-9 h-9 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white flex items-center justify-center disabled:opacity-40 hover:scale-105 transition-transform flex-shrink-0" aria-label="Enviar">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
