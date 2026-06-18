import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "MANGORA | Vinagre Natural de Mango Piurano",
  description: "Compra vinagre natural de mango piurano MANGORA. Producto artesanal, sostenible y con trazabilidad por lote.",
  openGraph: {
    title: "MANGORA | Vinagre Natural de Mango Piurano",
    description: "Del descarte al sabor: mango piurano convertido en valor.",
    images: ["/images/mangora-botellas.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
