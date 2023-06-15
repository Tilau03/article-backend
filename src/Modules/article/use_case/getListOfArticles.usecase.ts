import { ArticleInterfaceDto, ArticleModel } from "../domain";

export async function getListOfArticles(): Promise<ArticleInterfaceDto[]> {
  const article = await ArticleModel.find();

  return article;
}
