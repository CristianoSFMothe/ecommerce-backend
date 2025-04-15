import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'states' })
export class StateEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'uf', nullable: false })
  uf: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
