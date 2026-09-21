import { useState } from 'react';
import { GitCompare, X, Check, Minus, Star, ArrowRight } from 'lucide-react';
import {
  aiTools, categoryLabels, pricingLabels, getToolById,
  type AITool,
} from '../data/tools';

export default function Compare() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [pickerOpen, setPickerOpen] = useState<number | null>(null);

  const selectedTools: (AITool | undefined)[] = [
    selectedIds[0] ? getToolById(selectedIds[0]) : undefined,
    selectedIds[1] ? getToolById(selectedIds[1]) : undefined,
  ];

  function addTool(id: string, slot: number) {
    setSelectedIds((prev) => {
      const next = [...prev];
      next[slot] = id;
      return next;
    });
    setPickerOpen(null);
  }

  function removeTool(slot: number) {
    setSelectedIds((prev) => {
      const next = [...prev];
      next.splice(slot, 1);
      return next;
    });
  }

  const availableTools = aiTools.filter((t) => !selectedIds.includes(t.id));

  const rows: { label: string; render: (t: AITool) => React.ReactNode }[] = [
    { label: 'Categoría', render: (t) => categoryLabels[t.category] },
    { label: 'Precio', render: (t) => pricingLabels[t.pricing] },
    { label: 'Valoración', render: (t) => (
      <span className="flex items-center gap-1">
        <Star className="w-3.5 h-3.5 text-warning-400 fill-warning-400" />
        {t.rating.toFixed(1)}
      </span>
    )},
    { label: 'Funcionalidades', render: (t) => (
      <ul className="space-y-1">
        {t.features.map((f) => (
          <li key={f} className="flex items-start gap-1.5 text-xs text-ink-400">
            <Check className="w-3 h-3 text-success-400 flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
    )},
    { label: 'Casos de uso', render: (t) => (
      <ul className="space-y-1">
        {t.useCases.map((uc) => (
          <li key={uc} className="flex items-start gap-1.5 text-xs text-ink-400">
            <ArrowRight className="w-3 h-3 text-accent-400 flex-shrink-0 mt-0.5" />
            {uc}
          </li>
        ))}
      </ul>
    )},
    { label: 'Ventajas', render: (t) => (
      <ul className="space-y-1">
        {t.pros.map((p) => (
          <li key={p} className="flex items-start gap-1.5 text-xs text-ink-400">
            <Check className="w-3 h-3 text-success-400 flex-shrink-0 mt-0.5" />
            {p}
          </li>
        ))}
      </ul>
    )},
    { label: 'Desventajas', render: (t) => (
      <ul className="space-y-1">
        {t.cons.map((c) => (
          <li key={c} className="flex items-start gap-1.5 text-xs text-ink-400">
            <Minus className="w-3 h-3 text-error-400 flex-shrink-0 mt-0.5" />
            {c}
          </li>
        ))}
      </ul>
    )},
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-ink-50 mb-2">
          <GitCompare className="w-7 h-7 text-primary-400" />
          Comparador de herramientas
        </h1>
        <p className="text-ink-400">
          Selecciona dos herramientas para compararlas lado a lado.
        </p>
      </div>

      {/* Selection slots */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {selectedTools.map((tool, slot) => (
          <div key={slot} className="relative">
            {tool ? (
              <div className="bg-ink-900 border border-ink-800 rounded-2xl p-5">
                <button
                  onClick={() => removeTool(slot)}
                  className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-ink-800 hover:bg-error-500/20 text-ink-400 hover:text-error-300 flex items-center justify-center transition-all"
                  aria-label="Quitar"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-lg font-semibold text-ink-50 pr-8">{tool.name}</h3>
                <p className="text-xs text-ink-500 mt-1">{tool.tagline}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <Star className="w-3.5 h-3.5 text-warning-400 fill-warning-400" />
                  <span className="text-sm text-ink-300">{tool.rating.toFixed(1)}</span>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setPickerOpen(slot)}
                className="w-full min-h-[110px] rounded-2xl border-2 border-dashed border-ink-800 hover:border-primary-500/40 text-ink-500 hover:text-primary-400 flex flex-col items-center justify-center gap-2 transition-all"
              >
                <GitCompare className="w-6 h-6" />
                <span className="text-sm font-medium">Añadir herramienta</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Picker dropdown */}
      {pickerOpen !== null && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4" onClick={() => setPickerOpen(null)}>
          <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" />
          <div
            className="relative bg-ink-900 border border-ink-800 rounded-2xl p-4 w-full max-w-md max-h-[60vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm font-semibold text-ink-50 mb-3">Selecciona una herramienta</h3>
            <div className="space-y-1">
              {availableTools.map((t) => (
                <button
                  key={t.id}
                  onClick={() => addTool(t.id, pickerOpen)}
                  className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-ink-800 transition-all text-left group"
                >
                  <div>
                    <p className="text-sm font-medium text-ink-100 group-hover:text-primary-300">{t.name}</p>
                    <p className="text-xs text-ink-500">{categoryLabels[t.category]}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-warning-400">
                    <Star className="w-3 h-3 fill-warning-400" />
                    {t.rating.toFixed(1)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Comparison table */}
      {selectedTools.some((t) => t !== undefined) ? (
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full border-collapse">
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-ink-900/40' : ''}>
                  <td className="py-3 px-4 text-xs font-medium text-ink-500 uppercase tracking-wide whitespace-nowrap align-top w-32">
                    {row.label}
                  </td>
                  {selectedTools.map((tool, slot) => (
                    <td key={slot} className="py-3 px-4 border-l border-ink-800 align-top">
                      {tool ? (
                        <div className="text-sm text-ink-200">{row.render(tool)}</div>
                      ) : (
                        <span className="text-xs text-ink-700">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-20">
          <GitCompare className="w-12 h-12 text-ink-700 mx-auto mb-4" />
          <p className="text-ink-400 mb-1">Selecciona herramientas para comparar</p>
          <p className="text-sm text-ink-500">Elige hasta dos herramientas del catálogo</p>
        </div>
      )}
    </div>
  );
}
