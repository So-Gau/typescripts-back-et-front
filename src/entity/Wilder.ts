import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Grade } from "./Grade";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Wilder {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  city: string;

  @Field(() => [Grade])
  @OneToMany(() => Grade, (grade) => grade.wilder)
  grades: Grade[];
}
