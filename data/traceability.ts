export type TraceabilityProducer = {
  nombre: string;
  ubicacion: string;
  foto: string;
  resenaAgradecimiento: string;
};

export type TraceabilityLot = {
  lote: string;
  producto: string;
  origen: string;
  fechaElaboracion: string;
  consumirAntes: string;
  materiaPrima: string;
  acidez: string;
  presentacion: string;
  elaboradoPor: string;
  estado: string;
  productor: TraceabilityProducer;
  proceso: string[];
};

export const traceabilityLots: TraceabilityLot[] = [
  {
    lote: "L001-2026",
    producto: "Vinagre de Mango Piurano MANGORA",
    origen: "Piura, Perú",
    fechaElaboracion: "05/06/2026",
    consumirAntes: "05/06/2027",
    materiaPrima: "Mango piurano seleccionado",
    acidez: "5% aprox.",
    presentacion: "250 ml",
    elaboradoPor: "Equipo MANGORA – Colegio María Montessori",
    estado: "Producto piloto con fines educativos y de validación comercial",
    productor: {
      nombre: "Productor aliado de mango piurano",
      ubicacion: "Piura, Perú",
      foto: "/images/productor-mango-placeholder.svg",
      resenaAgradecimiento:
        "Agradecemos profundamente al productor que hizo posible este lote, por cultivar y seleccionar mangos piuranos con dedicación, responsabilidad y amor por nuestra tierra. Su trabajo representa el origen de MANGORA y nos inspira a transformar el fruto local en una propuesta con valor, identidad y sostenibilidad."
    },
    proceso: [
      "Selección del mango",
      "Lavado y acondicionamiento",
      "Obtención del mosto",
      "Fermentación alcohólica",
      "Fermentación acética",
      "Filtrado",
      "Envasado",
      "Etiquetado"
    ]
  }
];
