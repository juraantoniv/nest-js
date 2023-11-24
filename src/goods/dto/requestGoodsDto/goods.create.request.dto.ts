import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { GoodsEntity } from "../../../database/goods.entity";

export class GoodsDtoCreate {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  image: string;

  @IsOptional()
  bought_by: string;
}

export class GoodsCreateResponse extends GoodsDtoCreate {
  @IsString()
  @IsOptional()
  createdAt: Date;
  @IsString()
  @IsOptional()
  updatedAt: Date;
  id: string;
}
