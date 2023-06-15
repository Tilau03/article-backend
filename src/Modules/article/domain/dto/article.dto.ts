import { Types } from "mongoose";

export interface ArticleInterfaceDto {
  _id: Types.ObjectId;
  title: string;
  content: string;
}
