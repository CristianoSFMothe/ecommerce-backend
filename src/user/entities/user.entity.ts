import { IsNotEmpty } from 'class-validator';
import { AddressEntity } from 'src/address/entities/address.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  @IsNotEmpty()
  name: string;

  @Column({ name: 'email', nullable: false })
  @IsNotEmpty()
  email: string;

  @Column({ name: 'phone' })
  @IsNotEmpty()
  phone: string;

  @Column({ name: 'cpf', nullable: false })
  @IsNotEmpty()
  cpf: string;

  @Column({ name: 'password', nullable: false })
  @IsNotEmpty()
  password: string;

  @Column({ name: 'type_user', nullable: false })
  @IsNotEmpty()
  typeUser: number;

  @CreateDateColumn({ name: 'created_at' })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => AddressEntity, (address) => address.user)
  address?: AddressEntity;
}
