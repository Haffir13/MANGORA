import { SectionTitle } from "@/components/SectionTitle";
import { TraceabilitySearch } from "@/components/TraceabilitySearch";

export default function TrazabilidadPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10">
        <SectionTitle
          eyebrow="Trazabilidad"
          title="Consulta el origen y proceso de tu vinagre"
          subtitle="Busca por lote para revisar datos de elaboración, materia prima, productor aliado, agradecimiento, proceso y estado del producto."
        />
      </div>
      <TraceabilitySearch />
    </section>
  );
}
