import { useState, type ReactNode, type SyntheticEvent } from 'react';
import { WHATSAPP_PLACEHOLDER, whatsappUrl } from '../whatsapp';

interface Props {
  message: string;
  className?: string;
  children: ReactNode;
}

/**
 * Link do WhatsApp que só recebe o número quando alguém passa o mouse, foca com o teclado
 * ou toca nele. Até lá o HTML tem apenas "https://wa.me/", sem telefone para robôs coletarem.
 */
function WhatsAppLink({ message, className, children }: Props) {
  const [revealed, setRevealed] = useState(false);
  const href = revealed ? whatsappUrl(message) : WHATSAPP_PLACEHOLDER;

  const reveal = (event: SyntheticEvent<HTMLAnchorElement>) => {
    // Atualiza o próprio elemento também, para o clique já seguir o endereço completo
    event.currentTarget.href = whatsappUrl(message);
    setRevealed(true);
  };

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerEnter={reveal}
      onFocus={reveal}
      onTouchStart={reveal}
      onClick={reveal}
    >
      {children}
    </a>
  );
}
export default WhatsAppLink;
