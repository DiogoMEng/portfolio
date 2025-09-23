import { ContactFormData, ContactFormErrors, FieldName, Validator } from '../../../interfaces/contact.type';

const messages = {
  fullNameInvalid: 'Nome não deve conter números ou caracteres especiais',
  emailInvalid: 'Email inválido',
  phoneInvalid: 'Formato: 919XXXXXXXX',
  subjectInvalid: 'Caracteres especiais permitidos: ?!.-$',
  messageRequired: 'Mensagem é obrigatória',
} as const;

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const subjectRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s?!.\-$]+$/;

const fullNameValidator: Validator = {
  validate(value: string): string {
    return nameRegex.test(value.trim()) ? '' : messages.fullNameInvalid;
  },
};

const emailValidator: Validator = {
  validate(value: string): string {
    return emailRegex.test(value.trim()) ? '' : messages.emailInvalid;
  },
};

const phoneValidator: Validator = {
  validate(value: string): string {
    const digits = value.replace(/\D/g, '');
    const regex = /^[1-9]{2}9\d{8}$/;
    return regex.test(digits) ? '' : messages.phoneInvalid;
  },
};

const subjectValidator: Validator = {
  validate(value: string): string {
    return subjectRegex.test(value.trim()) ? '' : messages.subjectInvalid;
  },
};

const messageValidator: Validator = {
  validate(value: string): string {
    return value.trim() ? '' : messages.messageRequired;
  },
};

export const validators: Record<FieldName, Validator> = {
  fullName: fullNameValidator,
  email: emailValidator,
  phone: phoneValidator,
  subject: subjectValidator,
  message: messageValidator,
};

export function validateFormData(data: ContactFormData): ContactFormErrors {
  return {
    fullName: validators.fullName.validate(data.fullName),
    email: validators.email.validate(data.email),
    phone: validators.phone.validate(data.phone),
    subject: validators.subject.validate(data.subject),
    message: validators.message.validate(data.message),
  };
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.values(errors).some(Boolean);
}