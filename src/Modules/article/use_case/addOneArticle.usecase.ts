import { ArticleInterface, ArticleInterfaceDto, ArticleModel } from "../domain";

export async function addOneArticle(newArticle: ArticleInterface):Promise<ArticleInterfaceDto> {
  const article = new ArticleModel(newArticle);
  return await article.save();
}
