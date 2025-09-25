import type { EmailJsConfig, EmailService } from '../../interfaces/contact.type';
import emailjs from '@emailjs/browser';

class EmailJsService implements EmailService {
  private readonly serviceId: string;
  private readonly templateId: string;
  private readonly publicKey: string;

  constructor(config: EmailJsConfig) {
    if (!config?.serviceId || !config?.templateId || !config?.publicKey) {
      throw new Error('Configuração do EmailJS ausente. Verifique as variáveis de ambiente.');
    }
    this.serviceId = config.serviceId;
    this.templateId = config.templateId;
    this.publicKey = config.publicKey;
  }

  async sendContact(form: HTMLFormElement): Promise<void> {
    await emailjs.sendForm(this.serviceId, this.templateId, form, {
      publicKey: this.publicKey,
    });
  }
}

export class EmailServiceFactory {
  static createEmailJs(config: EmailJsConfig): EmailService {
    return new EmailJsService(config);
  }
}