import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Access } from 'src/access/entities/access.entity';
import { Attribution } from 'src/attribution/entities/attribution.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
// import { Role } from '../../roles/entities/role.entity'

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  _id: string;

  @Field()
  @Column({nullable: true, default: null})
  profile: string

  @Field()
  @Column({nullable: false})
  firstName: string

  @Field()
  @Column({nullable: false})
  lastName: string

  @Field()
  @Column({nullable: false})
  birthDay: string

  @Field({nullable: true, defaultValue: null})
  @Column({nullable: true, default: null})
  fixePhone: string

  @Field({nullable: true, defaultValue: null})
  @Column({nullable: true, default: null})
  phone: string

  @Field({nullable: true, defaultValue: null})
  @Column({nullable: true, default: null})
  mail: string

  @Field()
  @Column({nullable: false})
  address: string

  @Field()
  @Column({nullable: false})
  district: string

  @Field()
  @Column({nullable: false})
  city: string

  @Field()
  @Column({nullable: false})
  contry: string

  @Field()
  @Column({nullable: false})
  username: string

  @Field()
  @Column({nullable: false})
  password: string

  @Field()
  @Column({nullable: false})
  token: string

  @Field({nullable: true, defaultValue: "deactivated"})
  @Column({nullable: true, default: "deactivated"})
  status: string

  @Field({nullable: true, defaultValue: null})
  @Column({nullable: true, default: null})
  structureID: string

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @CreateDateColumn()
  updatedAt: Date

  @Field()
  @CreateDateColumn()
  deletedAt: Date

  // ATTRIBUTION - FOREIGNS KEYS
  @Field(type => [Attribution])
  @OneToMany(type => Attribution, attribution => attribution.user)
  attribution: Attribution[]

  // ROLE - FOREIGN KEY
  @Field( type => User)
  @ManyToOne(type => Role, role => role.user)
  role: Role

}
