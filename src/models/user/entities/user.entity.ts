import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from '../enums/type-user.enum';
import { Gender } from '../enums/gender.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'b91ac8b1-8250-4a85-91df-123456789abc' })
  id: string;

  @Column({ name: 'name', nullable: false })
  @ApiProperty({ example: 'Jose Maria' })
  name: string;

  @Column({ name: 'email', nullable: false })
  @ApiProperty({ example: 'jose_maria@email.com' })
  email: string;

  @Column({ name: 'phone' })
  @ApiProperty({ example: '(21) 98877-6655' })
  @ApiPropertyOptional()
  phone?: string;

  @Column({ name: 'cpf', nullable: false })
  @ApiProperty({ example: '572.561.740-80' })
  cpf: string;

  @Column({ name: 'password', nullable: false })
  @ApiProperty({ example: 'Abc@123' })
  password: string;

  @Column({ name: 'date_of_birth', type: 'timestamp', nullable: false })
  @ApiProperty({ example: '01/01/2000' })
  dateOfBirth: Date;

  @Column({ name: 'age', type: 'int', nullable: false })
  @ApiProperty({ example: 25 })
  age: number;

  @Column({
    name: 'type_user',
    type: 'enum',
    enum: UserType,
    default: UserType.USER,
  })
  @ApiProperty({ example: UserType.USER })
  typeUser: UserType;

  @Column({
    name: 'gender',
    type: 'enum',
    enum: UserType,
    default: Gender.MALE,
  })
  @ApiProperty({ example: Gender.MALE })
  gender: Gender;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty({ example: new Date() })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty({ example: new Date() })
  updatedAt: Date;
}
