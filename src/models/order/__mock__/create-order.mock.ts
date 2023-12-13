import { addressMock } from '../../../models/address/__mocks__/address.mock';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { paymentPixMock } from '../../../models/payment/__mocks__/payment-pix.mock';
import { paymentCreditCardMock } from '../../../models/payment/__mocks__/payment-credit-card.mock';

export const createOrderPixMock: CreateOrderDto = {
  addressId: addressMock.id,
  codePix: paymentPixMock.code,
  datePayment: '2023-12-12',
};

export const createOrderCreditCardMock: CreateOrderDto = {
  addressId: addressMock.id,
  amountPayments: paymentCreditCardMock.amountPayments,
};
