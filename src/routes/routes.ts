import { Router, Request, Response } from "express";
import { articlesRoute } from "../Modules/";

const routes = Router();

routes.use("/article", articlesRoute);
routes.use("/user", (req, res) => {
  return res.send("Rutas de usuarios");
});

export { routes as articleRoutes };
