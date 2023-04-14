import { Wilder } from "../entity/Wilder";
import { Mutation, Resolver, Arg } from "type-graphql";
import dataSource from "../utils";
import { Grade } from "../entity/Grade";

@Resolver()
class gradeResolver {
  @Mutation(() => [Grade])
  async grades(): Promise<Grade[]> {
    const wilderToGrade = await dataSource
      .getRepository(Wilder)
      .findOneByOrFail({});
    console.log(wilderToGrade);
  }
}

export default gradeResolver;
