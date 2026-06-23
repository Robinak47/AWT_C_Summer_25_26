import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query, Body, Post, ValidationPipe, Delete, Put, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dtos/create-user-dto';
import { ParamDto } from './dtos/param-dto';
import { UpdateUsersDto } from './dtos/update-users-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers()
  {
    return "all user list";
  }

  @Get(":id")
  getUserWithId(@Param("id", ParseIntPipe) id:number, @Query("postType", new DefaultValuePipe(1), ParseIntPipe) postType:any)
  {
    console.log(typeof id);
    console.log(typeof postType);
    console.log(postType);
  }

  @Post()
  createUser(@Body() createUsersDto:CreateUsersDto)
  {
    console.log(createUsersDto instanceof CreateUsersDto);
    return createUsersDto;
  }

  @Delete(":id")
  deleteUser(@Param()  paramDto:ParamDto)
  {
    return `user deleted with id ${paramDto.id} `;
  }

  @Put(":id")
  updateUser(@Param() updateUsersDto:UpdateUsersDto)
  {
    return "user fully updated";
  }

  @Patch(":id")
  updateUserPartially(@Param() updateUsersDto:UpdateUsersDto)
  {
    return "user Partially  updated";
  }
}
