import { GoodsEntity } from '../database/goods.entity';
import { GoodsCreateResponse } from './dto/requestGoodsDto/goods.create.request.dto';
import { GoodsListQueryRequestDto } from './dto/requestGoodsDto/goods.quey.request.dto';
import { IList } from '../database/interface/list.interface';
import {
  GoodsListResponseDto,
} from './dto/responceGoodsDto/goods.responce.dto';

export class GoodsResponseMapper {
  static toDetailsDto(data: GoodsEntity): GoodsCreateResponse {
    return {
      id: data.id,
      name: data.name,
      image: data.image,
      description: data.description,
      price: data.price,
      bought_by: data.bought_by,
      updatedAt: data.updatedAt,
      createdAt: data.createdAt,
    };
  }
  static toListDto(
    data: IList<GoodsEntity>,
    query: GoodsListQueryRequestDto,
  ): GoodsListResponseDto {
    return {
      data: data.entities.map(this.toDetailsDto),
      total: data.total,
      ...query,
    };
  }
}
