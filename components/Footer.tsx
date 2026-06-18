import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-mangora-green/10 bg-mangora-green text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mangora-mango text-2xl">🥭</span>
            <div>
              <p className="text-2xl font-black tracking-[0.18em]">MANGORA</p>
              <p className="text-sm text-white/70">Vinagre Natural de Mango</p>
            </div>
          </div>
          <p className="max-w-lg leading-7 text-white/75">
            Producto artesanal elaborado con mango piurano seleccionado. Del descarte al sabor: mango piurano convertido en valor.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Enlaces</h3>
          <div className="grid gap-2 text-sm text-white/75">
            <Link href="/catalogo" className="hover:text-white">Catálogo</Link>
            <Link href="/pedido" className="hover:text-white">Tu pedido</Link>
            <Link href="/trazabilidad" className="hover:text-white">Trazabilidad</Link>
            <Link href="/nosotros" className="hover:text-white">Nosotros</Link>
            <Link href="/admin-info" className="hover:text-white">Admin info</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Cobertura inicial</h3>
          <p className="text-sm leading-7 text-white/75">
            Piura, Castilla, Veintiséis de Octubre y coordinación para otros distritos.
          </p>
          <p className="mt-5 text-xs text-white/55">
            Producto piloto con fines educativos y de validación comercial.
          </p>
        </div>
      </div>
    </footer>
  );
}
