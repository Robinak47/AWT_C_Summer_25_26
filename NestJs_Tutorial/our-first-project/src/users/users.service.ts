import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getAllUsers()
    {
        return [{id:1, name:"tom"}, {id:2, name:"jerry"}];
    }

    getUserWithId(id:any)
    {
        if(id=="1")
        {
            return {id:1, name: "Tom"};
        }
        else
        {
            return "user not found";
        }
    }

    getUserWithIdAndDepart(id:any, depart:any)
    {
        if(id=="1" && depart=="cse")
        {
            return {id:1, name: "Tom", depart:"CSE"};
        }
        else
        {
            return "user not found";
        }
    }

    findUserById(id:any)
    {
        if(id=="1")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
