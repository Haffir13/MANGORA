import type { Product } from "@/lib/products";

export const fallbackProducts: Product[] = [
  {
    id: "1",
    nombre: "Vinagre de Mango Piurano MANGORA 250 ml",
    descripcion: "Vinagre natural de mango piurano, ideal para ensaladas, marinados, encurtidos y salsas.",
    precio: 18,
    categoria: "Vinagre",
    presentacion: "Botella",
    contenido: "300 ml",
    acidez: "5% aprox.",
    stock: 25,
    imagen: "/images/mangora-botellas.jpg",
    etiqueta: "Producto artesanal",
    activo: true,
    orden: 1
  },
  {
    id: "2",
    nombre: "Pack MANGORA x 2",
    descripcion: "Dos botellas de vinagre de mango piurano para uso familiar o gastronómico.",
    precio: 34,
    categoria: "Pack",
    presentacion: "Pack",
    contenido: "2 botellas x 300 ml",
    acidez: "5% aprox.",
    stock: 15,
    imagen: "/images/mangora-botellas.jpg",
    etiqueta: "Más vendido",
    activo: true,
    orden: 2
  },
  {
    id: "3",
    nombre: "Pack Gastronómico MANGORA x 6",
    descripcion: "Pack ideal para restaurantes, cafeterías, hoteles y negocios gastronómicos.",
    precio: 96,
    categoria: "Pack gastronómico",
    presentacion: "Pack",
    contenido: "6 botellas x 300 ml",
    acidez: "5% aprox.",
    stock: 10,
    imagen: "/images/mangora-botellas.jpg",
    etiqueta: "Para negocios",
    activo: true,
    orden: 3
  },
  {
    id: "4",
    nombre: "Pedido para restaurantes",
    descripcion: "Cotización especial para restaurantes, cafeterías, hoteles y negocios gastronómicos de Piura.",
    precio: 0,
    categoria: "Restaurantes",
    presentacion: "Cotización",
    contenido: "Volumen personalizado",
    acidez: "5% aprox.",
    stock: 99,
    imagen: "/images/etiqueta-mangora.jpg",
    etiqueta: "Cotizar por WhatsApp",
    activo: true,
    orden: 4
  }
];
