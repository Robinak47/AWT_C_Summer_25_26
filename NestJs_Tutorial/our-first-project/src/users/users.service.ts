import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
  ) {}
  getAllUsers() {
    return [
      { id: 1, name: 'tom' },
      { id: 2, name: 'jerry' },
    ];
  }

  getUserWithId(id: any) {
    if (id == '1') {
      return { id: 1, name: 'Tom' };
    } else {
      return 'user not found';
    }
  }

  getUserWithIdAndDepart(id: any, depart: any) {
    if (id == '1' && depart == 'cse') {
      return { id: 1, name: 'Tom', depart: 'CSE' };
    } else {
      return 'user not found';
    }
  }

  findUserById(id: any) {
    if (id == '1') {
      return true;
    } else {
      return false;
    }
  }

  getUsersList() {
    const existingUserList = [
      { id: 1, name: 'meow1' },
      { id: 2, name: 'meow2' },
      { id: 3, name: 'meow3' },
    ];
    const usersWithPosts = this.postsService.getAllPosts();

    return usersWithPosts;
  }
}
