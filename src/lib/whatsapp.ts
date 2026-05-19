const PHONE = '573242063165';

export function createWhatsAppLink(product: string) {
  const text = encodeURIComponent(`Hola, quiero comprar ${product}`);

  return `https://wa.me/${PHONE}?text=${text}`;
}
