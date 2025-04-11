import { BadRequestException } from '@nestjs/common';

export function isValidCpf(cpf: string): boolean {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/\D/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    throw new BadRequestException(
      'CPF deve conter exatamente 11 dígitos numéricos.',
    );
  }

  // Rejeita CPFs com todos os dígitos iguais
  if (/^(\d)\1+$/.test(cpf)) {
    throw new BadRequestException('CPF inválido.');
  }

  // Validação do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let firstCheckDigit = 11 - (sum % 11);
  if (firstCheckDigit >= 10) firstCheckDigit = 0;

  if (firstCheckDigit !== parseInt(cpf.charAt(9))) {
    throw new BadRequestException('CPF inválido.');
  }

  // Validação do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  let secondCheckDigit = 11 - (sum % 11);
  if (secondCheckDigit >= 10) secondCheckDigit = 0;

  if (secondCheckDigit !== parseInt(cpf.charAt(10))) {
    throw new BadRequestException('CPF inválido.');
  }

  return true;
}
