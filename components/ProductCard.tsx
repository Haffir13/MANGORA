"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";
import { formatPrice, getProductPrice } from "@/lib/products";
import { buildQuickProductMessage, createWhatsappUrl } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const price = getProductPrice(product);
  const isSoldOut = product.stock <= 0;
  const whatsappUrl = createWhatsappUrl(buildQuickProductMessage(product, quantity));

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-organic border border-mangora-green/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-64 overflow-hidden bg-mangora-cream">
        <img
          src={product.imagen || "/images/mangora-botellas.jpg"}
          alt={product.nombre}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-mangora-green shadow-card">
          {isSoldOut ? "Agotado" : product.etiqueta}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="rounded-full bg-mangora-green/10 px-3 py-1 text-xs font-bold text-mangora-green">{product.categoria}</span>
          <span className="text-xs font-bold text-mangora-ink/55">Stock: {product.stock}</span>
        </div>
        <h3 className="text-xl font-black leading-tight text-mangora-green">{product.nombre}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-mangora-ink/70">{product.descripcion}</p>

        <div className="mt-5 grid grid-cols-3 gap-2 text-xs font-bold text-mangora-ink/70">
          <span className="rounded-2xl bg-mangora-cream px-3 py-2">{product.presentacion}</span>
          <span className="rounded-2xl bg-mangora-cream px-3 py-2">{product.contenido}</span>
          <span className="rounded-2xl bg-mangora-cream px-3 py-2">{product.acidez}</span>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            {product.precioOferta ? <p className="text-sm font-bold text-mangora-ink/40 line-through">{formatPrice(product.precio)}</p> : null}
            <p className="text-3xl font-black text-mangora-green">{formatPrice(price)}</p>
          </div>
          <label className="text-sm font-bold text-mangora-green">
            Cant.
            <input
              type="number"
              min={1}
              max={Math.max(product.stock, 1)}
              value={quantity}
              onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
              className="mt-1 w-20 rounded-2xl border border-mangora-green/15 px-3 py-2 text-center outline-none focus:border-mangora-mango"
              disabled={isSoldOut}
            />
          </label>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button type="button" className="btn-primary" onClick={handleAdd} disabled={isSoldOut}>
            {isSoldOut ? "Sin stock" : added ? "Agregado ✓" : "Agregar"}
          </button>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-secondary">
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
