import { Skill } from "../entity/Skill";
import dataSource from "../utils";
import { Request, Response } from "express";

const skillController = {
  // methods create
  create: (req: Request, res: Response) => {
    dataSource
      .getRepository(Skill)
      .save(req.body)
      .then(() => {
        res.send("Skill Created");
      })
      .catch((err) => {
        console.log("error", err);
        res.send("Error while creating the skill");
      });
  },
  // methods read
  read: async (req: Request, res: Response) => {
    try {
      const allSkills = await dataSource.getRepository(Skill).find();
      res.send(allSkills);
    } catch (err) {
      console.log(err);
      res.send("Error while read the skill");
    }
  },
  // methods delete
  delete: async (req: Request, res: Response) => {
    try {
      const deleteSkill = await dataSource
        .getRepository(Skill)
        .delete(req.params.id);
      res.send(deleteSkill);
    } catch (err) {
      console.log(err);
      res.send("Error while deleted the skill");
    }
  },
  // methods update
  update: async (req: Request, res: Response) => {
    try {
      const upSkill = await dataSource
        .getRepository(Skill)
        .update(req.params.id, req.body);
      res.send(upSkill);
    } catch (err) {
      console.log(err);
      res.send("Error while update the skill");
    }
  },
};

export default skillController;
