import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  Get,
  ParseIntPipe,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateUsersDto } from './dtos/creare-user-dto';
import { UpdateUsersDto } from './dtos/update-users-dto';
import { Users } from './users.entity';
import { RegisterUserDto } from 'src/auth/register-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create-user')
  createUser(@Body() createUserDto: RegisterUserDto): Promise<Users> {
    return this.usersService.createUser(createUserDto);
  }

  @Get('getAllUsers')
  getAllUsers(): Promise<Users[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<Users | null> {
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateUsersDto: UpdateUsersDto,
  ): Promise<Users> {
    return this.usersService.updateUser(id, updateUsersDto);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.usersService.deleteUser(id);
  }
}
