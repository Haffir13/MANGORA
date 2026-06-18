import { traceabilityLots, type TraceabilityLot } from "@/data/traceability";

function normalizeHeader(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "_");
}

function parseNumber(value?: string) {
  if (!value) return 0;
  const parsed = Number(value.replace(/,/g, ".").trim());
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseBoolean(value?: string) {
  const normalized = (value || "").trim().toLowerCase();
  return !["no", "false", "0", "inactivo"].includes(normalized);
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

function splitProcess(value?: string) {
  const fallback = traceabilityLots[0]?.proceso || [];
  if (!value) return fallback;

  const steps = value
    .split(/\s*>\s*|\s*;\s*/)
    .map((step) => step.trim())
    .filter(Boolean);

  return steps.length > 0 ? steps : fallback;
}

export function parseTraceabilityCsv(csv: string): TraceabilityLot[] {
  const lines = csv
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return traceabilityLots;

  const delimiter = detectDelimiter(lines[0]);
  const headers = splitCsvLine(lines[0], delimiter).map(normalizeHeader);

  const lots = lines.slice(1).map((line, index) => {
    const values = splitCsvLine(line, delimiter);
    const row: Record<string, string> = {};

    headers.forEach((header, headerIndex) => {
      row[header] = values[headerIndex] || "";
    });

    return {
      lote: row.lote || `L${String(index + 1).padStart(3, "0")}-2026`,
      producto: row.producto || "Vinagre de Mango Piurano MANGORA",
      origen: row.origen || "Piura, Perú",
      fechaElaboracion: row.fecha_elaboracion || row.fechaelaboracion || "Por registrar",
      consumirAntes: row.consumir_antes || row.consumirantes || "Por registrar",
      materiaPrima: row.materia_prima || row.materiaprima || "Mango piurano seleccionado",
      acidez: row.acidez || "5% aprox.",
      presentacion: row.presentacion || "250 ml",
      elaboradoPor: row.elaborado_por || row.elaboradopor || "Equipo MANGORA – Colegio María Montessori",
      estado: row.estado || "Producto piloto con fines educativos y de validación comercial",
      productor: {
        nombre: row.productor_nombre || row.productor || "Productor aliado de mango piurano",
        ubicacion: row.productor_ubicacion || row.ubicacion_productor || row.origen || "Piura, Perú",
        foto: row.productor_foto || row.foto_productor || "/images/productor-mango-placeholder.svg",
        resenaAgradecimiento:
          row.productor_resena ||
          row.resena_agradecimiento ||
          "Agradecemos al productor aliado por hacer posible este lote con mango piurano seleccionado, trabajo responsable y compromiso con nuestra tierra."
      },
      proceso: splitProcess(row.proceso),
      activo: parseBoolean(row.activo || "SI"),
      orden: parseNumber(row.orden) || index + 1
    } as TraceabilityLot & { activo: boolean; orden: number };
  });

  const activeLots = lots
    .filter((lot) => lot.activo)
    .sort((a, b) => a.orden - b.orden)
    .map(({ activo, orden, ...lot }) => lot);

  return activeLots.length > 0 ? activeLots : traceabilityLots;
}

export async function getTraceabilityLotsFromSheet(): Promise<TraceabilityLot[]> {
  const sheetUrl = process.env.NEXT_PUBLIC_TRACEABILITY_SHEET_URL;

  if (!sheetUrl) return traceabilityLots;

  try {
    const response = await fetch(sheetUrl, { cache: "no-store" });
    if (!response.ok) throw new Error("No se pudo leer la hoja de trazabilidad");

    const csv = await response.text();
    return parseTraceabilityCsv(csv);
  } catch (error) {
    console.warn("Usando trazabilidad de respaldo:", error);
    return traceabilityLots;
  }
}
