/* eslint-disable @typescript-eslint/restrict-template-expressions */
import "reflect-metadata";
import dataSource from "./utils";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import wilderResolver from "./resolver/WilderResolvers";
import gradeResolvers from "./resolver/GradeResolvers";

// start
const start = async (): Promise<void> => {
  await dataSource.initialize();

  const typeGraphQlgeneratedSchema = await buildSchema({
    resolvers: [wilderResolver, gradeResolvers],
  });

  const server = new ApolloServer({ schema: typeGraphQlgeneratedSchema });

  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
};

void start();
