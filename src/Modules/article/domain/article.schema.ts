import { Schema, model } from "mongoose";
import { ArticlesEntity } from "./articles.entity";

const ArticleSchema = new Schema<ArticlesEntity>({
  title: String,
  content: String,
});

export  const ArticleModel = model("Article", ArticleSchema, "article");

