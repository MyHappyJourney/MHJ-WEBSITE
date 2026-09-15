export interface OpenWhatsAppOptions {
  destination?: string;
  defaultMessage?: string;
}

export function triggerWhatsAppModal(options?: OpenWhatsAppOptions) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('open-whatsapp-modal', {
        detail: options || {},
      })
    );
  }
}
