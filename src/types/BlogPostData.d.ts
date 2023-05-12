export interface IBlogPostData {
  id?: string;
  title: string;
  imageUrl: string;
  secondImageUrl: string;
  blurhash: string;
  preparationTime: string;
  description: string;
  ingredients: Ingredients[];
  publishedAt: string;
}