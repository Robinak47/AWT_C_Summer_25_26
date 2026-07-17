import { Hash } from './../../node_modules/aws-sdk/clients/cleanroomsml.d';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './register-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto) {
    const hashPass = await bcrypt.hash(registerUserDto.password, 10);
    registerUserDto.password = hashPass;
    return await this.usersService.createUser(registerUserDto);
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.getUserById(loginDto.userId);
    if (user == null) {
      throw new BadRequestException('user not Found');
    }

    const isPassMatch = await bcrypt.compare(loginDto.password, user.password);

    if (!isPassMatch) {
      throw new BadRequestException('password not matched');
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
    };
  }
}
