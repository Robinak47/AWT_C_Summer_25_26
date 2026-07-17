import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreatePassportDto {
  @IsString()
  @IsNotEmpty()
  nationality: string;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  usersId: number;
}
