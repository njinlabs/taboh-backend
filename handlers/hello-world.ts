import { Express } from "express";

export default function helloWorld(app: Express) {
  app.get("/", (_, res) => {
    res.send("Hello world!");
  });
}
