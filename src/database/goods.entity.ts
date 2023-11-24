import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { CreatedUpdatedModel } from './common/created-updated.model';
import { UserEntity } from './user.entity';

@Entity('goods')
export class GoodsEntity extends CreatedUpdatedModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false})
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  price: number;

  @Column({ type: 'int', nullable: true })
  image: string;

  @Column({ type: 'text', nullable: true })
  bought_by: string;

  @ManyToOne(() => UserEntity, (entity) => entity.goods)
  user: UserEntity;
}
