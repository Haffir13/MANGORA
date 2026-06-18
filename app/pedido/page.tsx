import { CartPage } from "@/components/CartPage";
import { SectionTitle } from "@/components/SectionTitle";

export default function PedidoPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10">
        <SectionTitle
          eyebrow="Cierre por WhatsApp"
          title="Revisa tu pedido y envíalo listo para confirmar"
          subtitle="Completa tus datos, revisa el subtotal y envía el mensaje automático al WhatsApp de MANGORA."
        />
      </div>
      <CartPage />
    </section>
  );
}
