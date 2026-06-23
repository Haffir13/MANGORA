import { SectionTitle } from "@/components/SectionTitle";

const values = ["Sostenibilidad", "Innovación", "Identidad piurana", "Calidad artesanal", "Economía circular", "Responsabilidad ambiental"];

export default function MisionVisionPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Propósito"
        title="Misión, visión y valores de MANGORA"
        subtitle="Una propuesta con identidad local, enfoque sostenible y potencial gastronómico."
        center
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-organic border border-mangora-green/10 bg-white p-8 shadow-card">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Misión</p>
          <h2 className="mt-3 text-3xl font-black text-mangora-green">Desarrollar valor desde el mango piurano</h2>
          <p className="mt-5 leading-8 text-mangora-ink/75">
            Desarrollar y ofrecer un vinagre natural de mango piurano que aproveche responsablemente el mango de descarte seleccionado, promoviendo la economía circular, la innovación educativa y el consumo de productos artesanales con identidad local.
          </p>
        </article>

        <article className="rounded-organic border border-mangora-green/10 bg-mangora-green p-8 text-white shadow-card">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Visión</p>
          <h2 className="mt-3 text-3xl font-black">Ser una marca piurana reconocida</h2>
          <p className="mt-5 leading-8 text-white/75">
            Ser una marca piurana reconocida por transformar recursos locales en productos sostenibles, innovadores y de alto valor gastronómico, contribuyendo al cuidado del ambiente y al fortalecimiento de una cultura de consumo responsable.
          </p>
        </article>
      </div>

      <div className="mt-12">
        <SectionTitle eyebrow="Valores" title="Lo que guía a MANGORA" center />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value} className="rounded-3xl border border-mangora-green/10 bg-white p-6 text-center shadow-card">
              <p className="text-3xl">🥭</p>
              <h3 className="mt-4 text-xl font-black text-mangora-green">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
