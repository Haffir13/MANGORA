"use client";

import { useEffect, useMemo, useState } from "react";
import { traceabilityLots, type TraceabilityLot } from "@/data/traceability";
import { createWhatsappUrl } from "@/lib/whatsapp";
import { getTraceabilityLotsFromSheet } from "@/lib/traceability";
import { ProducerThanksCard } from "@/components/ProducerThanksCard";
import { TraceabilityTimeline } from "@/components/TraceabilityTimeline";

export function TraceabilitySearch() {
  const [query, setQuery] = useState("L001-2026");
  const [lots, setLots] = useState<TraceabilityLot[]>(traceabilityLots);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getTraceabilityLotsFromSheet()
      .then((loadedLots) => {
        if (active) setLots(loadedLots);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const lot = useMemo(
    () => lots.find((item) => item.lote.toLowerCase() === query.trim().toLowerCase()),
    [lots, query]
  );

  const whatsappUrl = createWhatsappUrl(`Hola, deseo consultar la trazabilidad del lote ${query || "L001-2026"} de MANGORA.`);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
      <aside className="h-fit rounded-organic border border-mangora-green/10 bg-white p-6 shadow-card">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Consulta de lote</p>
        <h2 className="mt-3 text-3xl font-black text-mangora-green">Verifica tu vinagre</h2>
        <p className="mt-3 text-sm leading-7 text-mangora-ink/70">
          Ingresa el lote que aparece en la etiqueta para revisar origen, productor, agradecimiento, fechas, proceso y datos principales.
        </p>
        <label className="mt-6 block text-sm font-bold text-mangora-green">
          Código de lote
          <input value={query} onChange={(event) => setQuery(event.target.value)} className="input-base mt-2" placeholder="Ejemplo: L001-2026" />
        </label>

        {loading ? (
          <p className="mt-4 rounded-3xl bg-mangora-cream p-4 text-sm font-bold text-mangora-green">
            Cargando trazabilidad desde la hoja de cálculo...
          </p>
        ) : null}

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary mt-5 w-full">
          Consultar lote por WhatsApp
        </a>
      </aside>

      <section>
        {lot ? (
          <div className="space-y-8">
            <div className="rounded-organic border border-mangora-green/10 bg-white p-6 shadow-card md:p-8">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Lote encontrado</p>
                  <h3 className="mt-3 text-3xl font-black text-mangora-green">{lot.producto}</h3>
                </div>
                <span className="rounded-full bg-mangora-green px-5 py-2 text-sm font-black text-white">{lot.lote}</span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Origen", lot.origen],
                  ["Fecha de elaboración", lot.fechaElaboracion],
                  ["Consumir preferentemente antes de", lot.consumirAntes],
                  ["Materia prima", lot.materiaPrima],
                  ["Acidez", lot.acidez],
                  ["Presentación", lot.presentacion],
                  ["Productor", lot.productor.nombre],
                  ["Elaborado por", lot.elaboradoPor],
                  ["Estado", lot.estado]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl bg-mangora-cream p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-mangora-green/60">{label}</p>
                    <p className="mt-2 font-bold text-mangora-green">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <ProducerThanksCard lot={lot} />

            <TraceabilityTimeline lot={lot} />
          </div>
        ) : (
          <div className="rounded-organic border border-mangora-green/10 bg-white p-8 text-center shadow-card">
            <p className="text-5xl">🔎</p>
            <h3 className="mt-4 text-2xl font-black text-mangora-green">Lote no encontrado</h3>
            <p className="mt-3 text-mangora-ink/70">Verifica el código o consúltanos por WhatsApp.</p>
          </div>
        )}
      </section>
    </div>
  );
}
