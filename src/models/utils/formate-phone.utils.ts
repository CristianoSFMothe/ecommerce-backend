import { BadRequestException } from '@nestjs/common';
import { userMessage } from 'src/common/messages/user.message';

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }

  throw new BadRequestException(userMessage.INVALID_PHONE_FORMAT);
};
