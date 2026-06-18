import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";

export default function CatalogoPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <SectionTitle
          eyebrow="Catálogo"
          title="Elige tu MANGORA y envía tu pedido por WhatsApp"
          subtitle="Los productos, precios, stock y promociones se cargan desde una hoja de cálculo externa."
        />
        <div className="rounded-organic bg-mangora-green p-6 text-white shadow-card">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Compra simple</p>
          <p className="mt-3 leading-7 text-white/80">Agrega productos al carrito o solicita un producto directamente por WhatsApp.</p>
        </div>
      </div>
      <ProductGrid />
    </section>
  );
}
