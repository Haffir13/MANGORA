import { fallbackProducts } from "@/data/products";

export type Product = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  precioOferta?: number;
  categoria: string;
  presentacion: string;
  contenido: string;
  acidez: string;
  stock: number;
  imagen: string;
  etiqueta: string;
  activo: boolean;
  orden: number;
};

function normalizeHeader(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "_");
}

function parseNumber(value?: string) {
  if (!value) return 0;
  const cleaned = value.replace("S/", "").replace(/,/g, ".").trim();
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseBoolean(value?: string) {
  const normalized = (value || "").trim().toLowerCase();
  return ["si", "sí", "true", "1", "activo", "x", "yes"].includes(normalized);
}

function splitCsvLine(line: string, delimiter: string) {
  const result: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"' && next === '"') {
      current += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === delimiter && !insideQuotes) {
      result.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current.trim());
  return result;
}

function detectDelimiter(header: string) {
  const delimiters = [",", ";", "|"];
  return delimiters.reduce((best, current) => {
    return header.split(current).length > header.split(best).length ? current : best;
  }, ",");
}

export function getProductPrice(product: Product) {
  return product.precioOferta && product.precioOferta > 0 ? product.precioOferta : product.precio;
}

export function formatPrice(value: number) {
  if (value <= 0) return "A cotizar";
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2
  }).format(value);
}

export function parseProductsCsv(csv: string): Product[] {
  const lines = csv
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return fallbackProducts;

  const delimiter = detectDelimiter(lines[0]);
  const headers = splitCsvLine(lines[0], delimiter).map(normalizeHeader);

  const products = lines.slice(1).map((line, index) => {
    const values = splitCsvLine(line, delimiter);
    const row: Record<string, string> = {};

    headers.forEach((header, headerIndex) => {
      row[header] = values[headerIndex] || "";
    });

    const precioOferta = parseNumber(row.precio_oferta);

    return {
      id: row.id || `${index + 1}`,
      nombre: row.nombre || "Producto MANGORA",
      descripcion: row.descripcion || "Vinagre natural de mango piurano.",
      precio: parseNumber(row.precio),
      precioOferta: precioOferta > 0 ? precioOferta : undefined,
      categoria: row.categoria || "Vinagre",
      presentacion: row.presentacion || "Botella",
      contenido: row.contenido || "250 ml",
      acidez: row.acidez || "5% aprox.",
      stock: parseNumber(row.stock),
      imagen: row.imagen || "/images/mangora-botellas.jpg",
      etiqueta: row.etiqueta || "Producto artesanal",
      activo: parseBoolean(row.activo || "SI"),
      orden: parseNumber(row.orden) || index + 1
    } satisfies Product;
  });

  const activeProducts = products
    .filter((product) => product.activo)
    .sort((a, b) => a.orden - b.orden);

  return activeProducts.length > 0 ? activeProducts : fallbackProducts;
}

export async function getProductsFromSheet(): Promise<Product[]> {
  const sheetUrl = process.env.NEXT_PUBLIC_PRODUCTS_SHEET_URL;

  if (!sheetUrl) return fallbackProducts;

  try {
    const response = await fetch(sheetUrl, { cache: "no-store" });
    if (!response.ok) throw new Error("No se pudo leer la hoja de cálculo");

    const csv = await response.text();
    return parseProductsCsv(csv);
  } catch (error) {
    console.warn("Usando productos de respaldo:", error);
    return fallbackProducts;
  }
}

export function getPromotionProducts(products: Product[]) {
  const promotionCategories = ["promoción", "promocion", "pack", "pack gastronómico", "pack gastronomico", "restaurantes"];
  return products.filter((product) => promotionCategories.includes(product.categoria.toLowerCase()));
}
