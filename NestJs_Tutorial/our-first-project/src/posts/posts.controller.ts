import { Controller, Get, Req, Headers, Post, Body} from '@nestjs/common';
import { PostsService } from './posts.service';
import type { Request } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {
  }

  // @Get()
  // getFullReq(@Req() req:Request)
  // {
  //   console.log(req);

  // }

  @Get()
  getReqHeaders(@Headers() header:any)
  {
    console.log(header);
    
  }

  @Post()
  createPost(@Body() posts:any)
  {
    return this.postsService.createPost(posts);
  }

}
