import { PaymentStatusEntity } from '../entities/payment-status.entity';

export class ReturnPaymentStatusDto {
  id: number;
  name: string;

  constructor(paymenteStatus: PaymentStatusEntity) {
    this.id = paymenteStatus.id;
    this.name = paymenteStatus.name;
  }
}
