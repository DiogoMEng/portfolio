import type { EmailJsConfig, EmailService } from '../../interfaces/contact.type';
import emailjs from '@emailjs/browser';

/**
 * Concrete implementation of EmailService using EmailJS.
 * - Responsible for validating the received configuration and submitting the form.
 * - Keeps EmailJS identifiers immutable (readonly).
 */
class EmailJsService implements EmailService {
  private readonly serviceId: string;
  private readonly templateId: string;
  private readonly publicKey: string;

  /**
   * Creates an instance of the service with the required configuration.
   * Validates the presence of the three required fields before initializing.
   * @param config Configuration object containing serviceId, templateId, and publicKey
   * @throws Error if any required field is missing
   */
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