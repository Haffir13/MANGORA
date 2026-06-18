import type { CartItem } from "@/context/CartContext";
import type { Product } from "@/lib/products";
import { formatPrice, getProductPrice } from "@/lib/products";

const fallbackNumber = "519XXXXXXXX";

export function getWhatsappNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || fallbackNumber;
}

export function createWhatsappUrl(message: string) {
  const number = getWhatsappNumber().replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildQuickProductMessage(product: Product, quantity = 1) {
  const unitPrice = getProductPrice(product);
  const subtotal = unitPrice * quantity;

  return `Hola, deseo realizar un pedido de MANGORA:\n\nPedido:\n- ${quantity} x ${product.nombre} - ${formatPrice(unitPrice)}\n\nSubtotal: ${formatPrice(subtotal)}\n\nPor favor, confirmar disponibilidad y forma de pago.`;
}

export type CustomerData = {
  nombre: string;
  distrito: string;
  direccion: string;
  entrega: string;
  observaciones: string;
};

export function buildCartMessage(items: CartItem[], customer: CustomerData) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * getProductPrice(item.product), 0);
  const lines = items
    .map((item) => `- ${item.quantity} x ${item.product.nombre} - ${formatPrice(getProductPrice(item.product))}`)
    .join("\n");

  return `Hola, deseo realizar un pedido de MANGORA:\n\nCliente: ${customer.nombre || "Por confirmar"}\nDistrito: ${customer.distrito || "Por confirmar"}\nDirección / referencia: ${customer.direccion || "Por confirmar"}\nForma de entrega: ${customer.entrega || "Coordinar por WhatsApp"}\n\nPedido:\n${lines}\n\nSubtotal: ${formatPrice(subtotal)}\n\nObservaciones:\n${customer.observaciones || "Sin observaciones"}\n\nPor favor, confirmar disponibilidad y forma de pago.`;
}
