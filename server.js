import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./model/Database/Db.js";
import route from "./Router/Route.js";
dotenv.config(".env");
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use("/api", route);

app.listen(PORT, async () => {
  await db();
  console.log(`server is running ${PORT}`);
});
