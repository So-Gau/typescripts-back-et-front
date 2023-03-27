import { Wilder } from "../entity/Wilder";
import { Request, Response } from "express";
import dataSource from "../utils";

const wilderController = {
  // methods create
  create: (req: Request, res: Response) => {
    dataSource
      .getRepository(Wilder)
      .save(req.body)
      .then(() => {
        res.send("Created Wilder");
      })
      .catch(() => {
        res.send("Error while creating the wilder");
      });
  },
  // methods read
  read: async (req: Request, res: Response) => {
    try {
      const allWilders = await dataSource
        .getRepository(Wilder)
        .find({ relations: { grades: { skill: true } } });
      res.send(allWilders);
    } catch (err) {
      console.log(err);
      res.send("Error while read the wilder");
    }
  },
  // methods delete
  delete: async (req: Request, res: Response) => {
    try {
      const deleteWilder = await dataSource
        .getRepository(Wilder)
        .delete(req.params.id);
      res.send(deleteWilder);
    } catch (err) {
      console.log(err);
      res.send("Error while deleted the wilder");
    }
  },
  // methods update
  update: async (req: Request, res: Response) => {
    try {
      const upWilder = await dataSource
        .getRepository(Wilder)
        .update(req.params.id, req.body);
      res.send(upWilder);
    } catch (err) {
      console.log(err);
      res.send("Error while update the wilder");
    }
  },
  // methods addskill
};

export default wilderController;
