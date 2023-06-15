export interface ArticleInterface {
  title: string;
  content: string;
}

export class ArticlesEntity implements ArticleInterface {
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
  title: string;
  content: string;
}
