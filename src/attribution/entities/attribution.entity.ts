import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Responsability } from '../../responsability/entities/responsability.entity';

@Entity()
@ObjectType()
export class Attribution {
  @Field()
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

  // RESPONSABILITY - FOREIGN KEY
  @Field(type => Responsability)
  @ManyToOne(type => Responsability, respo => respo.attribution)
  respo : Responsability
}
