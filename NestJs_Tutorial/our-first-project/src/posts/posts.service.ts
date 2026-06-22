import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
    constructor(private readonly usersService:UsersService)
    {

    }

    createPost(post:any)
    {
        const foundUser=this.usersService.findUserById(post.userId);
        if(foundUser)
        {
            return `post created by user Id ${post.userId}`;
        }
        else
        {
            return "user not Found";
        }
    }
}
