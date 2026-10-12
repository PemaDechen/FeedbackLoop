import express, { Request, Response } from "express";const app = express();
const PORT = process.env.PORT || 4000;

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});