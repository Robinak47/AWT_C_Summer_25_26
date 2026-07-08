import { Passports } from 'src/passports/passports.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Posts } from 'src/posts/posts.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 128,
  })
  name: string;
  @Column({
    type: 'varchar',
    length: 6,
  })
  gender: string;
  @Column({
    type: 'varchar',
    length: 500,
    unique: true,
  })
  email: string;
  @Column({
    type: 'int',
  })
  age: number;
  @Column({
    type: 'bool',
    default: true,
  })
  isBangladeshi: boolean;
  @Column({
    type: 'varchar',
    length: 1000,
  })
  profilePic: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @OneToOne(() => Passports, (passports) => passports.users)
  passports: Passports;

  @OneToMany(() => Posts, (posts) => posts.users)
  posts: Posts[];
}
