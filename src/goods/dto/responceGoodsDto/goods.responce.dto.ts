import { GoodsListQueryRequestDto } from '../requestGoodsDto/goods.quey.request.dto';

export class GoodsDetailsResponseDto {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  bought_by: string;
  createdAt: Date;
  updatedAt: Date;
}

export class GoodsListResponseDto extends GoodsListQueryRequestDto {
  data: GoodsDetailsResponseDto[];
  total: number;
}


