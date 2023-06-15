import express from "express";
import { json } from "body-parser";
//APPLICATION ROUTES
import { articleRoutes } from "./routes";
import { initMongoConnect } from "./dataBase";

const app = express();
app.use(json());

app.use("/api", articleRoutes);

initMongoConnect();

app.listen(5000, () => {
  console.log("Server is runing in port 5000");
});
