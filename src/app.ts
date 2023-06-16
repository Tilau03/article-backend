import express from "express";
import { json } from "body-parser";
//APPLICATION ROUTES
import { articleRoutes } from "./routes";
import { initMongoConnect } from "./dataBase";
import cors from 'cors'

const app = express();
app.use(cors())
app.use(json());

app.use("/api", articleRoutes);

initMongoConnect();

app.listen(5000, () => {
  console.log("Server is runing in port 5000");
});
