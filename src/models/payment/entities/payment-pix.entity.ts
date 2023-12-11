import { ChildEntity, Column, TableInheritance } from 'typeorm';
import { PaymentEntity } from './payment.entity';

@ChildEntity({ name: 'Payment ' })
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class PaymentPixEntity extends PaymentEntity {
  @Column({ name: 'code', nullable: false })
  code: number;

  @Column({ name: 'date_payment', nullable: false })
  datePayment: Date;
}
