import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Role } from 'src/roles/entities/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { Responsability } from '../../responsability/entities/responsability.entity';

@Entity()
@ObjectType()
export class Access {
  @PrimaryGeneratedColumn()
  _id: string;

  @Column()
  libelle: string

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  // ROLE - FOREIGN KEY
  @Field(type => Role)
  @ManyToOne(type => Role, role => role.access)
  role: Role

  // RESPONSABILITY - FOREIGNS KEYS
  @Field(type => Responsability)
  @ManyToOne(type => Responsability, responsability => responsability.access)
  responsability: Responsability
}
