import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World moew!';
  }

  createUser(body:any)
  {
    return `user create. info: id:${body.id}, name:${body.name} `
  }
}
