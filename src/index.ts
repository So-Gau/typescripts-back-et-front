import express from "express";
import cors from "cors";
import dataSource from "./utils";
import wilderController from "./controller/WilderController";
import skillController from "./controller/SkillController";
import gradeController from "./controller/GradeController";

const app = express();
// Lecture du json
app.use(express.json());
// gérer les requêtes CORS sur votre serveur et de vous assurer que votre application peut accéder aux ressources distantes de manière sécurisée.
app.use(cors());

// ROUTE
app.get("/", (req, res) => {
  res.send("Hello World");
});

// lecture dans l'ordre des routes
app.post("/api/wilder", wilderController.create);
app.post("/api/skill", skillController.create);
app.get("/api/wilder", wilderController.read);
app.get("/api/skill", skillController.read);

app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);
app.delete("/api/skill/:id", skillController.delete);
app.put("/api/skill/:id", skillController.update);

app.post("/api/grade", gradeController.create);

// start
const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(5000, () => {
    console.log("Server started");
  });
};

void start();
