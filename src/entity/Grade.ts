import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Skill } from "./Skill";
import { Wilder } from "./Wilder";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Grade {
  @PrimaryColumn()
  wilderId: number;

  @PrimaryColumn()
  skillId: number;

  @Field()
  @Column()
  grade: number;

  @Field(() => Wilder)
  @ManyToOne(() => Wilder, (wilder) => wilder.grades)
  wilder: Wilder;

  @Field(() => Skill)
  @ManyToOne(() => Skill, (wilder) => wilder.grades)
  skill: Skill;
}
