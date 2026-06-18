"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { fallbackProducts } from "@/data/products";
import { getProductsFromSheet, getPromotionProducts, type Product } from "@/lib/products";

type ProductGridProps = {
  mode?: "all" | "promotions";
};

export function ProductGrid({ mode = "all" }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getProductsFromSheet()
      .then((loadedProducts) => {
        if (active) setProducts(loadedProducts);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const visibleProducts = useMemo(() => {
    return mode === "promotions" ? getPromotionProducts(products) : products;
  }, [mode, products]);

  return (
    <div>
      {loading ? (
        <div className="mb-8 rounded-3xl border border-mangora-green/10 bg-white p-4 text-sm font-bold text-mangora-green shadow-card">
          Cargando productos desde la hoja de cálculo...
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
