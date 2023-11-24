import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { GoodsEntity } from '../database/goods.entity';
import { GoodsListQueryRequestDto } from "./dto/requestGoodsDto/goods.quey.request.dto";
import { IList } from "../database/interface/list.interface";
import { GoodsListOrderFieldEnum } from "../database/common/enums/goods.list.enum";

@Injectable()
export class GoodsRepository extends Repository<GoodsEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(GoodsEntity, dataSource.manager);
  }

  public async getAllGoods(
    query: GoodsListQueryRequestDto,
  ): Promise<IList<GoodsEntity>> {
    const queryBuilder = this.createQueryBuilder('goods');

    switch (query.orderBy) {
      case GoodsListOrderFieldEnum.createdAt:
        queryBuilder.orderBy('goods.createdAt', query.order);
        break;
      case GoodsListOrderFieldEnum.price:
        queryBuilder.orderBy('goods.price', query.order);
        break;
    }

    if (query.search) {
      queryBuilder.andWhere('LOWER(goods.name) LIKE :search', {
        search: `%${query.search}%`,
      });
    }

    queryBuilder.limit(query.limit);
    queryBuilder.offset(query.offset);

    const [entities, total] = await queryBuilder.getManyAndCount();
    return { entities, total };
  }
}
