import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from '../enums/type-user.enum';
import { Gender } from '../enums/gender.enum';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'cpf', nullable: false })
  cpf: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'date_of_birth', type: 'timestamp', nullable: false })
  dateOfBirth: Date;

  @Column({
    name: 'type_user',
    type: 'enum',
    enum: UserType,
    default: UserType.USER,
  })
  typeUser: UserType;

  @Column({
    name: 'gender',
    type: 'enum',
    enum: UserType,
    default: Gender.MALE,
  })
  gender: Gender;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
