import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { Users } from 'src/users/users.entity';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  content: string;
  @IsNotEmpty()
  @IsString()
  postType: string;
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  usersId: number;
}
