import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Access } from 'src/access/entities/access.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Role {
  @Field()
  @PrimaryGeneratedColumn('increment')
  _id: number;

  @Field()
  @Column()
  name: string

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  // FOREIGNS KEYS
  @Field(type => [Access])
  @OneToMany( type => Access, access => access.role)
  access: Access[]

  // FOREIGNS KEYS
  @Field(type => [User])
  @OneToMany( type => User, user => user.role)
  user: User[]
}
