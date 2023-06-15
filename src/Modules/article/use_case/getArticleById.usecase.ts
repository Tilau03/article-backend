import { ArticleInterfaceDto, ArticleModel } from "../domain";

export async function getArticleById(
  id: string
): Promise<ArticleInterfaceDto | null> {
  const article = await ArticleModel.findById(id);

  return article;
}
