import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateUsersDto } from './dtos/creare-user-dto';

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
  ) {
    console.log(createUserDto.id);
    return {
      message: 'user Created',
      filePath: file.path,
    };
  }
}
