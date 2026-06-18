import { SectionTitle } from "@/components/SectionTitle";

const productColumns = [
  "id",
  "nombre",
  "descripcion",
  "precio",
  "precio_oferta",
  "categoria",
  "presentacion",
  "contenido",
  "acidez",
  "stock",
  "imagen",
  "etiqueta",
  "activo",
  "orden"
];

const traceabilityColumns = [
  "lote",
  "producto",
  "origen",
  "fecha_elaboracion",
  "consumir_antes",
  "materia_prima",
  "acidez",
  "presentacion",
  "elaborado_por",
  "estado",
  "productor_nombre",
  "productor_ubicacion",
  "productor_foto",
  "productor_resena",
  "proceso",
  "activo",
  "orden"
];

export default function AdminInfoPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Administración simple"
        title="Actualiza productos y trazabilidad desde Google Sheets"
        subtitle="Esta web está preparada para leer productos, precios, stock, imágenes, promociones y trazabilidad desde hojas de cálculo publicadas como CSV."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-organic border border-mangora-green/10 bg-white p-8 shadow-card">
          <h2 className="text-2xl font-black text-mangora-green">Pasos de actualización</h2>
          <ol className="mt-6 space-y-4 text-mangora-ink/75">
            {[
              "Abrir la hoja de cálculo de productos o la hoja de trazabilidad MANGORA.",
              "Editar productos, precios, stock, promociones, lotes, productor, foto o reseña de agradecimiento.",
              "Publicar cada hoja como CSV desde Archivo > Compartir > Publicar en la web.",
              "Copiar el enlace CSV en la variable correspondiente del archivo .env.local o de Vercel.",
              "Guardar los cambios. La web actualizará la información automáticamente."
            ].map((step, index) => (
              <li key={step} className="flex gap-3 rounded-3xl bg-mangora-cream p-4">
                <span className="font-black text-mangora-green">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-organic border border-mangora-green/10 bg-white p-8 shadow-card">
          <h2 className="text-2xl font-black text-mangora-green">Columnas para productos</h2>
          <p className="mt-3 leading-7 text-mangora-ink/70">La primera fila de la hoja de productos debe tener exactamente estos encabezados:</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {productColumns.map((column) => (
              <code key={column} className="rounded-2xl bg-mangora-green/10 px-4 py-3 text-sm font-bold text-mangora-green">
                {column}
              </code>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-organic border border-mangora-green/10 bg-white p-8 shadow-card">
        <h2 className="text-2xl font-black text-mangora-green">Columnas para trazabilidad</h2>
        <p className="mt-3 leading-7 text-mangora-ink/70">
          La hoja de trazabilidad permite registrar cada lote, agregar la foto del productor de los mangos y colocar una reseña de agradecimiento.
        </p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {traceabilityColumns.map((column) => (
            <code key={column} className="rounded-2xl bg-mangora-green/10 px-4 py-3 text-sm font-bold text-mangora-green">
              {column}
            </code>
          ))}
        </div>
        <div className="mt-6 rounded-3xl bg-mangora-cream p-5 text-sm leading-7 text-mangora-ink/75">
          <p>
            En <strong>productor_foto</strong> puedes colocar una ruta local como <code>/images/productor-juan.jpg</code> o una URL pública de imagen. En <strong>productor_resena</strong> escribe el mensaje de agradecimiento.
          </p>
          <p className="mt-2">
            En <strong>proceso</strong> separa los pasos con el símbolo <strong>&gt;</strong>. Ejemplo: Selección del mango &gt; Lavado &gt; Fermentación &gt; Envasado.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-organic bg-mangora-green p-8 text-white shadow-card">
        <h2 className="text-2xl font-black">Variables de entorno</h2>
        <pre className="mt-4 overflow-x-auto rounded-3xl bg-black/20 p-5 text-sm text-white/90">
{`NEXT_PUBLIC_WHATSAPP_NUMBER=519XXXXXXXX
NEXT_PUBLIC_PRODUCTS_SHEET_URL=https://docs.google.com/spreadsheets/d/e/XXXXX/pub?output=csv
NEXT_PUBLIC_TRACEABILITY_SHEET_URL=https://docs.google.com/spreadsheets/d/e/YYYYY/pub?output=csv`}
        </pre>
      </div>
    </section>
  );
}
