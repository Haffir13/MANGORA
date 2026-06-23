import { createWhatsappUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const message = "Hola, deseo más información sobre MANGORA – Vinagre Natural de Mango Piurano.";

  return (
    <a
      href={createWhatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-soft transition hover:-translate-y-1"
      aria-label="Escribir por WhatsApp"
    >
     <img
              src="/images/icons8-whatsapp (1).gif"
              alt="ppw"
              className="h-[520px] w-full rounded-[2rem] object-cover"
            />
    </a>
  );
}
