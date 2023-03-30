export interface BlogPost {
  data: {
    title: string;
    imageUrl: string;
    secondImageUrl: string;
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
