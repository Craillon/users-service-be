import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Access } from '../../access/entities/access.entity';
import { Attribution } from '../../attribution/entities/attribution.entity';

@Entity()
@ObjectType()
export class Responsability {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Field()
  @Column()
  libelle: string

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  // ACCESS - FOREIGN KEY
  @Field(type => [Access])
  @OneToMany(type => Access, access => access.responsability)
  access: Access[]

  // ATTRIBUTION - FOREIGN KEY
  @Field(type => [Attribution])
  @OneToMany(type => Attribution, attribution => attribution.respo)
  attribution: Attribution[]
}
