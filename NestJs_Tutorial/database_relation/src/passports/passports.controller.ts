import { Controller, Post, Body } from '@nestjs/common';
import { PassportsService } from './passports.service';
import { CreatePassportDto } from './create-passports.dto';
import { Passports } from './passports.entity';

@Controller('passports')
export class PassportsController {
  constructor(private readonly passportsService: PassportsService) {}

  @Post('create-passports')
  createPost(@Body() createPassportDto: CreatePassportDto): Promise<Passports> {
    return this.passportsService.createPassport(createPassportDto);
  }
}
