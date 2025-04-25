import { BadRequestException } from '@nestjs/common';
import { userMessage } from 'src/common/messages/user.message';

export function formatCpf(cpf: string): string {
  const digitsOnly = cpf.replace(/\D/g, '');

  if (digitsOnly.length !== 11) {
    throw new BadRequestException(userMessage.INVALID_CPF_LENGTH);
  }

  return digitsOnly.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
