import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CreatedUpdatedModel } from './common/created-updated.model';
import { ApiProperty } from '@nestjs/swagger';
import { GoodsEntity } from './goods.entity';

@Entity('user')
export class UserEntity extends CreatedUpdatedModel {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  userName: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false, unique: true })
  email: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  password: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  city: string;

  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  age: number;

  @ApiProperty()
  @Column({ type: 'boolean', nullable: true })
  confirmedRegistration: boolean;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  avatar: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  last_Visited: string;

  @OneToMany(() => GoodsEntity, (entity) => entity.bought_by)
  goods: GoodsEntity[];
}
