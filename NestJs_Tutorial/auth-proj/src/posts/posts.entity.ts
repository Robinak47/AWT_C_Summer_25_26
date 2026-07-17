import { IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from 'src/users/users.entity';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn('uuid')
  postId: string;

  @Column()
  content: string;

  @Column()
  postType: string;

  @ManyToOne(() => Users, (users) => users.posts, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  users: Users;
}
