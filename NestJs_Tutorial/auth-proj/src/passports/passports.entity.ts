import { Users } from 'src/users/users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Passports {
  @PrimaryGeneratedColumn('uuid')
  passportNo: string;
  @Column()
  nationality: string;

  @OneToOne(() => Users, (users) => users.passports, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  users: Users;
}
