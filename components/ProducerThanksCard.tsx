import type { TraceabilityLot } from "@/data/traceability";

export function ProducerThanksCard({ lot }: { lot: TraceabilityLot }) {
  const producer = lot.productor;

  return (
    <div className="overflow-hidden rounded-organic border border-mangora-green/10 bg-white shadow-card">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[280px] bg-mangora-cream">
          <img
            src={producer.foto || "/images/productor-mango-placeholder.png"}
            alt={`Productor del mango para el lote ${lot.lote}`}
            className="h-full min-h-[280px] w-full object-cover"
          />
          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-mangora-green shadow-card">
            Origen del mango
          </div>
        </div>

        <div className="p-6 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Nuestro agradecimiento</p>
          <h3 className="mt-3 text-3xl font-black leading-tight text-mangora-green">Gracias al productor de este lote</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-mangora-cream p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-mangora-green/60">Productor</p>
              <p className="mt-2 font-bold text-mangora-green">{producer.nombre}</p>
            </div>
            <div className="rounded-3xl bg-mangora-cream p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-mangora-green/60">Ubicación</p>
              <p className="mt-2 font-bold text-mangora-green">{producer.ubicacion}</p>
            </div>
          </div>
          <p className="mt-5 rounded-3xl border border-mangora-green/10 bg-white p-5 text-sm leading-7 text-mangora-ink/75">
            {producer.resenaAgradecimiento}
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-mangora-green/60">
            Lote asociado: {lot.lote}
          </p>
        </div>
      </div>
    </div>
  );
}
