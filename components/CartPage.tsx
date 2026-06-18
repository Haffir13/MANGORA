"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice, getProductPrice } from "@/lib/products";
import { buildCartMessage, createWhatsappUrl } from "@/lib/whatsapp";

export function CartPage() {
  const { items, addItem, decreaseItem, removeItem, clearCart, subtotal } = useCart();
  const [customer, setCustomer] = useState({
    nombre: "",
    distrito: "",
    direccion: "",
    entrega: "Coordinar por WhatsApp",
    observaciones: ""
  });

  const whatsappUrl = createWhatsappUrl(buildCartMessage(items, customer));

  const updateCustomer = (field: keyof typeof customer, value: string) => {
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-organic border border-mangora-green/10 bg-white p-5 shadow-card md:p-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Tu pedido</p>
            <h2 className="mt-2 text-3xl font-black text-mangora-green">Carrito MANGORA</h2>
          </div>
          {items.length > 0 ? (
            <button type="button" onClick={clearCart} className="btn-secondary">
              Vaciar carrito
            </button>
          ) : null}
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl bg-mangora-cream p-8 text-center">
            <p className="text-5xl">🛒</p>
            <h3 className="mt-4 text-2xl font-black text-mangora-green">Tu carrito está vacío</h3>
            <p className="mt-2 text-mangora-ink/70">Agrega productos del catálogo para armar tu pedido.</p>
            <Link href="/catalogo" className="btn-primary mt-5">Ver catálogo</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex flex-col gap-4 rounded-3xl border border-mangora-green/10 p-4 md:flex-row md:items-center">
                <img src={item.product.imagen} alt={item.product.nombre} className="h-24 w-full rounded-2xl object-cover md:w-28" />
                <div className="flex-1">
                  <h3 className="font-black text-mangora-green">{item.product.nombre}</h3>
                  <p className="mt-1 text-sm text-mangora-ink/60">{formatPrice(getProductPrice(item.product))} c/u</p>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" className="h-9 w-9 rounded-full bg-mangora-cream font-black text-mangora-green" onClick={() => decreaseItem(item.product.id)}>
                    −
                  </button>
                  <span className="min-w-8 text-center font-black text-mangora-green">{item.quantity}</span>
                  <button type="button" className="h-9 w-9 rounded-full bg-mangora-cream font-black text-mangora-green" onClick={() => addItem(item.product, 1)}>
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-black text-mangora-green">{formatPrice(item.quantity * getProductPrice(item.product))}</p>
                  <button type="button" onClick={() => removeItem(item.product.id)} className="mt-2 text-xs font-bold text-mangora-amber hover:underline">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <aside className="h-fit rounded-organic border border-mangora-green/10 bg-white p-5 shadow-card md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-mangora-mango">Datos para WhatsApp</p>
        <h2 className="mt-2 text-3xl font-black text-mangora-green">Finalizar pedido</h2>
        <div className="mt-6 grid gap-4">
          <input className="input-base" placeholder="Nombre del cliente" value={customer.nombre} onChange={(event) => updateCustomer("nombre", event.target.value)} />
          <input className="input-base" placeholder="Distrito" value={customer.distrito} onChange={(event) => updateCustomer("distrito", event.target.value)} />
          <input className="input-base" placeholder="Dirección o referencia" value={customer.direccion} onChange={(event) => updateCustomer("direccion", event.target.value)} />
          <select className="input-base" value={customer.entrega} onChange={(event) => updateCustomer("entrega", event.target.value)}>
            <option>Recojo</option>
            <option>Delivery</option>
            <option>Coordinar por WhatsApp</option>
          </select>
          <textarea className="input-base min-h-28" placeholder="Observaciones" value={customer.observaciones} onChange={(event) => updateCustomer("observaciones", event.target.value)} />
        </div>

        <div className="mt-6 rounded-3xl bg-mangora-cream p-5">
          <div className="flex items-center justify-between font-black text-mangora-green">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-mangora-ink/60">El delivery y la forma de pago se coordinan por WhatsApp.</p>
        </div>

        <a
          href={items.length > 0 ? whatsappUrl : undefined}
          target="_blank"
          rel="noreferrer"
          className={`mt-5 w-full ${items.length > 0 ? "btn-primary" : "btn-primary pointer-events-none opacity-50"}`}
        >
          Enviar pedido por WhatsApp
        </a>
      </aside>
    </div>
  );
}
