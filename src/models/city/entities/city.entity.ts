import { StateEntity } from 'src/models/state/entities/state.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'cities' })
export class CityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'state_id', nullable: false })
  stateId: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => StateEntity, (state) => state.cities, { eager: true })
  @JoinColumn({ name: 'state_id' })
  state: StateEntity;
}
