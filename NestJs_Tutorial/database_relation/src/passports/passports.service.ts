import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Passports } from './passports.entity';
import { Repository } from 'typeorm';
import { CreatePassportDto } from './create-passports.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class PassportsService {
  constructor(
    @InjectRepository(Passports)
    private readonly passportRepo: Repository<Passports>,
    private readonly usersService: UsersService,
  ) {}

  async createPassport(
    createPassportDto: CreatePassportDto,
  ): Promise<Passports> {
    const user = await this.usersService.getUserById(createPassportDto.usersId);
    console.log(createPassportDto.usersId);
    console.log(user);
    console.log(typeof createPassportDto.usersId);
    if (user == null) {
      throw new BadRequestException('User Not Found');
    }
    const pass = this.passportRepo.create({
      ...createPassportDto,
      users: user,
    });

    return await this.passportRepo.save(pass);
  }
}
