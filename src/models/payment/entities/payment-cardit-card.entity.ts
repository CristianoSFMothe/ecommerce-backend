import { ChildEntity, Column, TableInheritance } from 'typeorm';
import { PaymentEntity } from './payment.entity';

@ChildEntity({ name: 'Payment ' })
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class PaymentPixEntity extends PaymentEntity {
  @Column({ name: 'amount_payments', nullable: false })
  amountPayments: number;
}
