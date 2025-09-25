export type FieldName = 'fullName' | 'email' | 'phone' | 'subject' | 'message';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Record<FieldName, string>;

export interface Validator {
  validate(value: string): string;
}

export interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface EmailService {
  sendContact(form: HTMLFormElement): Promise<void>;
}