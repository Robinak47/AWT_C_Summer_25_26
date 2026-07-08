import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './creare-user-dto';

export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
