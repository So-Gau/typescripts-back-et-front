import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Skill } from "./Skill";
import { Wilder } from "./Wilder";

@Entity()
export class Grade {
  @PrimaryColumn()
  wilderId: number;

  @PrimaryColumn()
  skillId: number;

  @Column()
  grade: number;

  @ManyToOne(() => Wilder, (wilder) => wilder.grades)
  wilder: Wilder;

  @ManyToOne(() => Skill, (wilder) => wilder.grades)
  skill: Skill;
}
