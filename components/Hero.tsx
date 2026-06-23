import Link from "next/link";

const highlights = ["Producto artesanal", "Mango piurano seleccionado", "Economía circular", "Acidez 5% aprox.", "Contenido neto 250 ml"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-pattern">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fff8ec] to-transparent" />
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative z-10 fade-up">
          <p className="mb-5 inline-flex rounded-full border border-mangora-green/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-mangora-green shadow-card">
            Piura en la raíz, sabor que te hace feliz
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-mangora-green sm:text-5xl lg:text-7xl">
            Vinagre de Mango Piurano, natural, artesanal y con identidad local
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mangora-ink/75">
            De los mangos seleccionados de Piura nace MANGORA: un vinagre versátil, sostenible y lleno de sabor para tu cocina.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/catalogo" className="btn-primary">Comprar ahora</Link>
            <Link href="/trazabilidad" className="btn-secondary">Ver trazabilidad</Link>
            <Link href="/pedido" className="btn-secondary">Pedir por WhatsApp</Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-mangora-green/10 bg-white/70 px-4 py-2 text-sm font-bold text-mangora-green shadow-card">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-xl">
          <div className="organic-card float-bottle rounded-[2.5rem] border border-white/70 bg-white/50 p-4 shadow-soft backdrop-blur">
            <img
              src="/images/mangora-producto1.png"
              alt="Botellas de vinagre de mango piurano MANGORA"
              className="h-[520px] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/80 p-5 shadow-card backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-mangora-green">MANGORA</p>
              <p className="mt-1 text-2xl font-black text-mangora-green">Vinagre Natural de Mango</p>
              <p className="mt-2 text-sm text-mangora-ink/70">Listo para ensaladas, marinados y preparaciones gastronómicas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
