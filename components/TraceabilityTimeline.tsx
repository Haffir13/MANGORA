import type { TraceabilityLot } from "@/data/traceability";

export function TraceabilityTimeline({ lot }: { lot: TraceabilityLot }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {lot.proceso.map((step, index) => (
        <div key={step} className="flex gap-4 rounded-3xl border border-mangora-green/10 bg-white p-5 shadow-card">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mangora-green text-sm font-black text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="font-black text-mangora-green">{step}</p>
            <p className="mt-1 text-sm leading-6 text-mangora-ink/65">Control de proceso y registro dentro del lote {lot.lote}.</p>
          </div>
        </div>
      ))}
    </div>
  );
}
