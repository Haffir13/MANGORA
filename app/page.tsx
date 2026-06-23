import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";

const benefits = [
  ["🥗", "Ideal para ensaladas", "Aporta acidez suave y un perfil frutal diferente."],
  ["🍗", "Perfecto para marinados", "Úsalo en carnes, aves y preparaciones caseras."],
  ["🫙", "Salsas y encurtidos", "Versátil para vinagretas, salsas y conservas."],
  ["🌱", "Economía circular", "Transformamos mango de descarte seleccionado en valor."],
  ["📍", "Origen Piura", "Identidad local desde la materia prima hasta la etiqueta."],
  ["🧾", "Trazabilidad", "Consulta el lote y revisa el proceso del producto."],
];

const why = [
  ["Sabor con identidad piurana", "Elaborado a partir de mango piurano seleccionado."],
  ["Economía circular", "Aprovecha mango de descarte apto para transformarlo en valor."],
  ["Compra fácil por WhatsApp", "Agrega al carrito, revisa tu pedido y envíalo directamente por WhatsApp."],
];

const uses = ["Ensaladas frescas", "Marinados para carnes y aves", "Encurtidos caseros", "Salsas y vinagretas", "Preparaciones gourmet", "Cocina saludable"];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Beneficios"
          title="Un vinagre natural pensado para cocinar, innovar y aprovechar mejor nuestros recursos"
          subtitle="MANGORA combina sabor, origen piurano y sostenibilidad en una presentación artesanal de 300 ml."
          center
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([icon, title, description]) => (
            <div key={title} className="rounded-organic border border-mangora-green/10 bg-white p-6 shadow-card">
              <p className="text-4xl">{icon}</p>
              <h3 className="mt-5 text-xl font-black text-mangora-green">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-mangora-ink/70">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mangora-green py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">¿Por qué elegir MANGORA?</p>
            <h2 className="text-3xl font-black md:text-5xl">Del descarte al sabor: mango piurano convertido en valor.</h2>
            <p className="mt-5 leading-8 text-white/75">
              Una propuesta que conecta cocina, educación, sostenibilidad e identidad regional en un producto versátil y llamativo.
            </p>
            <Link href="/nosotros" className="mt-7 inline-flex rounded-full bg-mangora-mango px-6 py-3 text-sm font-black text-mangora-green transition hover:-translate-y-0.5">
              Conoce la historia
            </Link>
          </div>
          <div className="grid gap-5">
            {why.map(([title, description], index) => (
              <div key={title} className="rounded-organic border border-white/10 bg-white/10 p-6 backdrop-blur">
                <span className="text-sm font-black text-mangora-mango">0{index + 1}</span>
                <h3 className="mt-2 text-2xl font-black">{title}</h3>
                <p className="mt-2 leading-7 text-white/75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle eyebrow="Compra rápida" title="Productos destacados" subtitle="Los precios y stock pueden actualizarse desde Google Sheets." />
          <Link href="/catalogo" className="btn-secondary w-fit">Ver catálogo completo</Link>
        </div>
        <ProductGrid mode="promotions" />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-mangora-cream p-6 shadow-card md:p-10">
          <SectionTitle eyebrow="Uso gastronómico" title="¿Cómo usar MANGORA?" subtitle="Úsalo como condimento. No consumir directamente en exceso." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {uses.map((use) => (
              <div key={use} className="rounded-3xl bg-white p-5 text-center font-black text-mangora-green shadow-card">
                {use}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
