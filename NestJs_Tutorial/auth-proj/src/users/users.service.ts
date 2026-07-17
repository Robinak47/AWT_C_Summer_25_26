import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dtos/creare-user-dto';
import path from 'path';
import { UpdateUsersDto } from './dtos/update-users-dto';
import { RegisterUserDto } from 'src/auth/register-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly usersRepo: Repository<Users>,
  ) {}

  async createUser(createUsersDto: RegisterUserDto): Promise<Users> {
    const user = this.usersRepo.create({
      ...createUsersDto,
    });

    return await this.usersRepo.save(user);
  }

  async getAllUsers(): Promise<Users[]> {
    return await this.usersRepo.find({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async getUserById(id: number): Promise<Users | null> {
    return await this.usersRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  async updateUser(id: number, updateUsersDto: UpdateUsersDto): Promise<Users> {
    const user = await this.usersRepo.findOne({
      where: { id: id },
    });

    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    Object.assign(user, updateUsersDto);
    console.log(user);
    return await this.usersRepo.save(user);
  }

  async deleteUser(id: number): Promise<string> {
    const result = await this.usersRepo.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException('User Not Found. meow');
    }

    return `User Deleted Successfully. id: ${id} `;
  }
}
