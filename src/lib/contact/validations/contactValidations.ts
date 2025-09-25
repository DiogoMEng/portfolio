import { ContactFormData, ContactFormErrors, FieldName, Validator } from '../../../interfaces/contact.type';

/**
 * Centralized error messages for easier maintenance and translation. 
 */
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

/**
 * Full Name Validator
 * - Removes extra spaces at the ends before validating.
 * - Accepts only letters (with accents) and spaces.
 */
const fullNameValidator: Validator = {
  validate(value: string): string {
    return nameRegex.test(value.trim()) ? '' : messages.fullNameInvalid;
  },
};

/**
 * Email Validator
 * - Validates general format (user@domain.tld).
 * - Uses trim to avoid errors due to spaces before/after.
 */
const emailValidator: Validator = {
  validate(value: string): string {
    return emailRegex.test(value.trim()) ? '' : messages.emailInvalid;
  },
};

/**
 * Phone Validator
 * - Keeps only digits (removes parentheses, spaces, hyphens, etc.).
 * - Requires 11 digits in the BR mobile standard: DD + 9 + XXXXXXXX
 * Where:
 * - DD: two digits (1-9), avoiding DDD starting with 0
 * - 9: fixed digit indicating cell phone
 * - XXXXXXXX: final 8 digits
 */
const phoneValidator: Validator = {
  validate(value: string): string {
    const digits = value.replace(/\D/g, '');
    const regex = /^[1-9]{2}9\d{8}$/;
    return regex.test(digits) ? '' : messages.phoneInvalid;
  },
};

/**
 * Subject Validator
 * - Accepts letters (with accents), numbers, spaces, and special characters: ? ! . - $
 */
const subjectValidator: Validator = {
  validate(value: string): string {
    return subjectRegex.test(value.trim()) ? '' : messages.subjectInvalid;
  },
};

/**
 * Message Validator
 * - Ensures it is not empty (after trim).
 */
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

/**
 * Checks if there are any errors in the errors object.
 * @param errors Error object returned by validateFormData.
 * @returns true if at least one field contains an error message (truthy).
 */
export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.values(errors).some(Boolean);
}