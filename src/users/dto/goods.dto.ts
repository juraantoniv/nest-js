import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class GoodsDtoCreate {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsOptional()
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
