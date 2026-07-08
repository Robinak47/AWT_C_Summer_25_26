import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  Res,
  UploadedFiles,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import type { Response } from 'express';
import path from 'path';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
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
  uploadFileControl(@UploadedFile() file: Express.Multer.File) {
    return {
      message: 'File uploaded successfully',
      fileName: file.filename,
      path: file.path,
    };
  }

  @Get('download')
  downloadFile(@Query('fileName') fileName, @Res() res: Response) {
    res.sendFile(fileName, { root: './uploads' });
  }

  @Post('multiFiles')
  @UseInterceptors(
    FilesInterceptor('files', 3, {
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
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return 'multifile uploaded';
  }
}
