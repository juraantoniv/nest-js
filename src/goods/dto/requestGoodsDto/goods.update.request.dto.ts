import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class GoodsDtoUpdate {
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

