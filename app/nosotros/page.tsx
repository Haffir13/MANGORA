import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionTitle eyebrow="Nosotros" title="Una marca piurana que transforma el mango en valor" />
          <div className="mt-6 space-y-5 text-lg leading-9 text-mangora-ink/75">
            <p>
              MANGORA nace como una propuesta innovadora que busca transformar el mango piurano de descarte seleccionado en un producto con valor gastronómico, educativo y ambiental.
            </p>
            <p>
              Somos un equipo comprometido con la sostenibilidad, la economía circular y el aprovechamiento responsable de los recursos locales. Nuestro vinagre natural de mango representa una forma diferente de mirar el desperdicio: no como pérdida, sino como una oportunidad para crear sabor, identidad y valor.
            </p>
            <p>
              MANGORA combina tradición, innovación y orgullo piurano para ofrecer un producto artesanal pensado para hogares, restaurantes y amantes de la cocina natural.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/catalogo" className="btn-primary">Comprar MANGORA</Link>
            <Link href="/trazabilidad" className="btn-secondary">Ver trazabilidad</Link>
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-mangora-green/10 bg-white p-4 shadow-soft">
          <img src="/images/mangora-producto1.png" alt="Etiqueta MANGORA2" className="h-[560px] w-full rounded-[2rem] object-cover" />
        </div>
      </div>
    </section>
  );
}
