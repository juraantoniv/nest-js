import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { GoodsEntity } from '../database/goods.entity';

@Injectable()
export class GoodsRepository extends Repository<GoodsEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(GoodsEntity, dataSource.manager);
  }
}
