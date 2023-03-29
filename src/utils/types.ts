export interface BlogPost {
  data: {
    title: string;
    imageUrl: string;
    blurhash: string;
    preparationTime: string;
    description: string;
    ingredients: string[];
    publishedAt: string;
  };
  content: string;
  readingTime: number;
  slug: string;
}
