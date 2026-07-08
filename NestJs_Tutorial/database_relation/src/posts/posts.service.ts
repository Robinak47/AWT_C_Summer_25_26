import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from './create-post.dto';
import { Users } from 'src/users/users.entity';
import { UpdatePostDto } from './update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private readonly postRepo: Repository<Posts>,
    private readonly userService: UsersService,
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<Posts> {
    const user = await this.userService.getUserById(createPostDto.usersId);
    if (user == null) {
      throw new BadRequestException('user not found');
    }

    const post = this.postRepo.create({
      ...createPostDto,
      users: user,
    });

    return await this.postRepo.save(post);
  }

  async getAllPost(): Promise<Posts[]> {
    return await this.postRepo.find({
      relations: {
        users: true,
      },
    });
  }

  async getPostById(id: string): Promise<Posts | null> {
    return await this.postRepo.findOne({
      relations: {
        users: true,
      },
      where: {
        postId: id,
      },
    });
  }

  async updatePost(id: string, updatePostDto: UpdatePostDto): Promise<Posts> {
    const post = await this.getPostById(id);
    if (post == null) {
      throw new BadRequestException('post not found');
    }

    Object.assign(post, updatePostDto);
    return await this.postRepo.save(post);
  }

  async deletePost(id: string): Promise<string> {
    const result = await this.postRepo.delete(id);
    if (result.affected == 0) {
      throw new BadRequestException('Post Not Found');
    }

    return 'Post deleted: ' + id;
  }
}
