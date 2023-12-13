import { PaymentCreditCardEntity } from '../entities/payment-cardit-card.entity';
import { paymentMock } from './payment.mock';

export const paymentCreditCardMock: PaymentCreditCardEntity = {
  ...paymentMock,
  amountPayments: 54,
};
