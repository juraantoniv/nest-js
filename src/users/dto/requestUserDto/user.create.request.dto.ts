import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UserCreateProfileDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  userName: string;

  @Transform(({ value }) => value.trim().toLowerCase())
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsBoolean()
  @IsOptional()
  confirmedRegistration: boolean;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsString()
  @IsOptional()
  last_Visited: string;
}

