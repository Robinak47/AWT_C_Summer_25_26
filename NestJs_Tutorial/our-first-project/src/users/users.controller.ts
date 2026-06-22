import { Controller,Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService)
    {

    }

    @Get()
    getAllUser()
    {
        return this.usersService.getAllUsers()
    }

    @Get(':id')
    getUserWithIdAndDepart(@Param("id") id:any, @Query("depart") depart:any)
    {
        return this.usersService.getUserWithIdAndDepart(id, depart);
    }

    @Get(':id')
    getUserWithId(@Param("id") id:any)
    {
        return this.usersService.getUserWithId(id);
    }


    

    
}
