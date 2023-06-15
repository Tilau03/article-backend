import { Request, Response, Router } from "express";
import { getListOfArticles, addOneArticle, getArticleById } from "../use_case";

const articlesRoute = Router();

articlesRoute.get("/", async (req: Request, res: Response) => {
  const articleList = getListOfArticles();

  articleList.then((listOfArticle) => {
    return res.status(200).send(listOfArticle);
  });
});

articlesRoute.post("/", async (req: Request, res: Response) => {
  const { body: newArticle } = req;
  const article = addOneArticle(newArticle);

  article.then((article) => {
    return res.status(201).send(article);
  });
});

articlesRoute.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const findArticle = getArticleById(id);

  return findArticle
    .then((article) => {
      return res.status(200).send(article);
    })
    .catch((err) => {
      return res.status(200).send({
        err,
        message:"Article not found."
      })
    });
});

export { articlesRoute };
