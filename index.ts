import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

export const myFunc = (num: number): number => {
  return num * num;
};

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
