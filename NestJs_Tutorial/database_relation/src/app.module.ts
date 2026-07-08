import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportsModule } from './passports/passports.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    FilesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'admin',
      port: 5432,
      database: 'awt_c_summer',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PassportsModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
