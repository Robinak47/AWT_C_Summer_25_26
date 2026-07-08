import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './create-post.dto';
import { Posts } from './posts.entity';
import { UpdatePostDto } from './update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create-post')
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @Get('getAllPosts')
  getAllPost(): Promise<Posts[]> {
    return this.postsService.getAllPost();
  }

  @Get(':getPostById/:id')
  getPostById(@Param('id') id: string): Promise<Posts | null> {
    return this.postsService.getPostById(id);
  }

  @Patch(':update-post/:id')
  updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<Posts> {
    return this.postsService.updatePost(id, updatePostDto);
  }

  @Delete(':delete-post/:id')
  deletePost(@Param('id') id: string): Promise<string> {
    return this.postsService.deletePost(id);
  }
}
