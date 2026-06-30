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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create-user')
  @UseInterceptors(
    FileInterceptor('profile-pic', {
      storage: diskStorage({
        destination: './uploads',
        filename: (res, file, cb) => {
          const fileName = Date.now() + '_' + file.originalname;
          cb(null, fileName);
        },
      }),
      fileFilter: (res, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/)) {
          cb(null, true);
        } else {
          cb(new BadRequestException('file type not accepted'), false);
        }
      },

      limits: {
        fileSize: 3 * 1024 * 1024,
      },
    }),
  )
  createUser(
    @UploadedFile() file: Express.Multer.File,
    @Body() createUserDto: CreateUsersDto,
  ): Promise<Users> {
    return this.usersService.createUser(createUserDto, file);
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
