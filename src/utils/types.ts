export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id?: string;
  data: BlogPostData;
  content: string;
  slug: string;
  readingTime: number;
}

export interface BlogPostData {
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

export interface Ingredients {
  id?: string;
  name: string;
}
