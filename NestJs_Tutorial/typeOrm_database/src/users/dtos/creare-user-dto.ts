import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEAN,
  IsEmail,
  IsEmpty,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  gender: string;
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  age: number;
  @IsBoolean()
  @IsNotEmpty()
  @Type(() => Boolean)
  isBangladeshi: boolean;
}
