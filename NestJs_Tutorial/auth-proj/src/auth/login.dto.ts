import { Type } from 'class-transformer';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class LoginDto {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  userId: number;

  @IsNotEmpty()
  @IsString()
  password: string;
}
