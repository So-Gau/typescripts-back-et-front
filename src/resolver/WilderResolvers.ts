import { Wilder } from "../entity/Wilder";
import { Mutation, Query, Resolver, Arg } from "type-graphql";
import dataSource from "../utils";

@Resolver()
class wilderResolver {
  @Query(() => [Wilder])
  async wilders(): Promise<Wilder[]> {
    const result = await dataSource
      .getRepository(Wilder)
      .find({ relations: { grades: { skill: true } } });
    return result;
  }

  @Mutation(() => Wilder)
  async addWilder(
    @Arg("name") name: string,
    @Arg("city") city: string
  ): Promise<Wilder> {
    const newwilder = await dataSource
      .getRepository(Wilder)
      .save({ name, city });
    return newwilder;
  }

  @Mutation(() => String)
  async deleteWilder(@Arg("id") id: number): Promise<string> {
    const deleteWilder = await dataSource.getRepository(Wilder).delete({ id });
    console.log(deleteWilder);
    return "delete wilder";
  }
}

export default wilderResolver;
