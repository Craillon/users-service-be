import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Attribution {
  @PrimaryGeneratedColumn('increment')
  _id: number;

  @Field()
  @Column()
  stopedDate: string

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  // USERS - FOREIGN KEY
  @Field(type => User)
  @ManyToOne(type => User, user => user.attribution)
  user : User
}
