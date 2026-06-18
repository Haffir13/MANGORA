# MANGORA Web

Web comercial para **MANGORA – Vinagre Natural de Mango Piurano**.

Incluye catálogo, carrito, pedido por WhatsApp, trazabilidad por lote, foto del productor de los mangos, reseña de agradecimiento, página de nosotros, misión y visión, y carga dinámica de datos desde Google Sheets.

## Tecnologías

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- LocalStorage para carrito
- Google Sheets publicado como CSV para productos
- Google Sheets publicado como CSV para trazabilidad
- WhatsApp con mensaje automático
- Lista para GitHub + Vercel

## Instalación local

```bash
npm install
npm run dev
```

Abrir:

```txt
http://localhost:3000
```

## Variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=519XXXXXXXX
NEXT_PUBLIC_PRODUCTS_SHEET_URL=https://docs.google.com/spreadsheets/d/e/XXXXX/pub?output=csv
NEXT_PUBLIC_TRACEABILITY_SHEET_URL=https://docs.google.com/spreadsheets/d/e/YYYYY/pub?output=csv
```

> El número de WhatsApp debe ir con código de país. Ejemplo Perú: `51987654321`.

## Hoja de cálculo de productos

La web puede cargar productos desde Google Sheets publicado como CSV.

La primera fila debe tener estas columnas:

```txt
id,nombre,descripcion,precio,precio_oferta,categoria,presentacion,contenido,acidez,stock,imagen,etiqueta,activo,orden
```

Ejemplo:

```csv
id,nombre,descripcion,precio,precio_oferta,categoria,presentacion,contenido,acidez,stock,imagen,etiqueta,activo,orden
1,Vinagre de Mango Piurano MANGORA 250 ml,"Vinagre natural de mango piurano ideal para ensaladas, marinados y salsas.",18.00,,Vinagre,Botella,250 ml,5% aprox.,25,/images/mangora-botellas.jpg,Producto artesanal,SI,1
2,Pack MANGORA x 2,"Dos botellas de vinagre de mango piurano para uso familiar o gastronómico.",34.00,,Pack,Pack,2 botellas x 250 ml,5% aprox.,15,/images/mangora-botellas.jpg,Más vendido,SI,2
```

## Hoja de cálculo de trazabilidad

La web también puede cargar la trazabilidad desde Google Sheets publicado como CSV. Esta hoja permite agregar el productor del mango, su foto y una reseña de agradecimiento.

La primera fila debe tener estas columnas:

```txt
lote,producto,origen,fecha_elaboracion,consumir_antes,materia_prima,acidez,presentacion,elaborado_por,estado,productor_nombre,productor_ubicacion,productor_foto,productor_resena,proceso,activo,orden
```

Ejemplo:

```csv
lote,producto,origen,fecha_elaboracion,consumir_antes,materia_prima,acidez,presentacion,elaborado_por,estado,productor_nombre,productor_ubicacion,productor_foto,productor_resena,proceso,activo,orden
L001-2026,Vinagre de Mango Piurano MANGORA,"Piura, Perú",05/06/2026,05/06/2027,Mango piurano seleccionado,5% aprox.,250 ml,Equipo MANGORA – Colegio María Montessori,Producto piloto con fines educativos y de validación comercial,Productor aliado de mango piurano,"Tambogrande, Piura",/images/productor-mango-placeholder.svg,"Agradecemos profundamente al productor que hizo posible este lote, por cultivar y seleccionar mangos piuranos con dedicación, responsabilidad y amor por nuestra tierra.","Selección del mango > Lavado y acondicionamiento > Obtención del mosto > Fermentación alcohólica > Fermentación acética > Filtrado > Envasado > Etiquetado",SI,1
```

### Cómo agregar la foto del productor

Tienes dos opciones:

1. Subir la imagen a `public/images/`, por ejemplo:

```txt
public/images/productor-juan.jpg
```

Y en la hoja colocar:

```txt
/images/productor-juan.jpg
```

2. Colocar una URL pública de la imagen en la columna `productor_foto`.

La columna `productor_resena` sirve para escribir la reseña o mensaje de agradecimiento hacia el productor.

## Reglas de carga

- Solo se muestran productos con `activo = SI`.
- Solo se muestran lotes de trazabilidad con `activo = SI`.
- Los productos y lotes se ordenan por la columna `orden`.
- Si existe `precio_oferta`, se usa como precio principal.
- Si `stock = 0`, el botón de compra queda desactivado.
- Si la hoja de productos falla, se usan productos de respaldo incluidos en el código.
- Si la hoja de trazabilidad falla, se usa el lote de respaldo incluido en el código.

## Publicar Google Sheets como CSV

1. Abrir la hoja de cálculo.
2. Ir a **Archivo > Compartir > Publicar en la web**.
3. Elegir la hoja correspondiente.
4. Formato: **Valores separados por comas (.csv)**.
5. Copiar el enlace generado.
6. Colocar el enlace en la variable correspondiente:
   - Productos: `NEXT_PUBLIC_PRODUCTS_SHEET_URL`
   - Trazabilidad: `NEXT_PUBLIC_TRACEABILITY_SHEET_URL`

## Despliegue en Vercel

1. Subir este proyecto a GitHub.
2. Entrar a Vercel.
3. Importar el repositorio.
4. Agregar variables de entorno:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_PRODUCTS_SHEET_URL`
   - `NEXT_PUBLIC_TRACEABILITY_SHEET_URL`
5. Deploy.

## Rutas principales

- `/` Inicio
- `/catalogo` Catálogo
- `/pedido` Carrito y pedido por WhatsApp
- `/trazabilidad` Consulta de lote
- `/nosotros` Historia de la marca
- `/mision-vision` Misión, visión y valores
- `/admin-info` Instrucciones para actualizar Google Sheets

## Imágenes

Las imágenes base están en:

```txt
public/images/mangora-botellas.jpg
public/images/etiqueta-mangora.jpg
public/images/productor-mango-placeholder.svg
```

Puedes agregar más imágenes dentro de `public/images/` y usar su ruta en la hoja de cálculo, por ejemplo:

```txt
/images/pack-x2.jpg
/images/productor-juan.jpg
```
