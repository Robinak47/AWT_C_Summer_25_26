import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  createPost(post: any) {
    const foundUser = this.usersService.findUserById(post.userId);
    if (foundUser) {
      return `post created by user Id ${post.userId}`;
    } else {
      return 'user not Found';
    }
  }

  getUserWithMostPosts() {
    const UsersList = this.usersService.getUsersList();

    const userWithMostPost = UsersList.reduce(
      (acc, cur) => (acc.posts > cur.posts ? acc : cur),
      UsersList[0],
    );

    return userWithMostPost;
  }

  getAllPosts() {
    return [
      { id: 1, posts: 3 },
      { id: 2, posts: 6 },
    ];
  }
}
