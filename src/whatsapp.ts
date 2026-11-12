// O número não aparece em texto em lugar nenhum: fica codificado em Base64 aqui e o link
// real só é montado quando alguém interage com o botão (ver WhatsAppLink). Robôs que varrem
// o HTML ou o código-fonte atrás de telefones não encontram os dígitos.
// Para trocar o número: btoa("55" + DDD + número), só dígitos.
const ENCODED_NUMBER = "NTU0MTk5MTE5OTA4Mg==";

/** Endereço usado antes da interação: abre o WhatsApp, mas sem o número. */
export const WHATSAPP_PLACEHOLDER = "https://wa.me/";

export function whatsappNumber(): string {
  return atob(ENCODED_NUMBER);
}

/** Link que abre a conversa no WhatsApp com a mensagem já escrita. */
export function whatsappUrl(message: string): string {
  return `${WHATSAPP_PLACEHOLDER}${whatsappNumber()}?text=${encodeURIComponent(message)}`;
}
