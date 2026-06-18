"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/trazabilidad", label: "Trazabilidad" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/mision-vision", label: "Misión y visión" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-mangora-green/10 bg-[#fff8ec]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mangora-green text-xl text-white shadow-card">🥭</span>
          <span>
            <span className="block text-xl font-black tracking-[0.18em] text-mangora-green">MANGORA</span>
            <span className="block text-xs font-semibold text-mangora-ink/60">Vinagre natural de mango</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-mangora-green text-white" : "text-mangora-green hover:bg-mangora-green/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/pedido" className="relative rounded-full bg-mangora-mango px-5 py-2.5 text-sm font-black text-mangora-green shadow-card transition hover:-translate-y-0.5">
            Tu pedido
            {totalItems > 0 ? (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-mangora-green px-2 text-xs text-white">
                {totalItems}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-mangora-green/15 bg-white p-2.5 text-mangora-green lg:hidden"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-mangora-green/10 bg-[#fff8ec] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold ${
                    active ? "bg-mangora-green text-white" : "bg-white text-mangora-green"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
