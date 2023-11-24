import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OrderEnum } from '../../../database/common/enums/order.enum';
import { PaginationQueryDto } from '../../../database/common/dto/pagination.query';
import { GoodsListOrderFieldEnum } from '../../../database/common/enums/goods.list.enum';
import { Transform } from 'class-transformer';

export class GoodsListQueryRequestDto extends PaginationQueryDto {
  @IsEnum(OrderEnum)
  @IsOptional()
  order?: OrderEnum = OrderEnum.ASC;

  @IsEnum(GoodsListOrderFieldEnum)
  @IsOptional()
  orderBy?: GoodsListOrderFieldEnum = GoodsListOrderFieldEnum.createdAt;

  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsOptional()
  search?: string;
}
