import { calculateReadingTime } from '@/utils/calculateReadingTime';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import path from 'path';
import fs from 'fs';
import { IPost } from '@/types/Post';
import { checkQueryMatch } from '@/utils/checkQueryMatch';

const postFilesDir = path.join(process.cwd(), 'public', 'mdx');

const postsService = {
  getPosts: (searchParams?: any): IPost[] => {
    const dirFiles = fs.readdirSync(postFilesDir, { withFileTypes: true });
    let posts: IPost[] = [];

    dirFiles.map((file) => {
      if (!file.name.endsWith('.mdx')) return;
      const post: IPost = postsService.getPostBySlug(
        file.name.replace('.mdx', '')
      );

      if (searchParams) {
        const isQueryPost: boolean = checkQueryMatch(post, searchParams);
        if (isQueryPost) posts.push(post);
      } else posts.push(post);
    });

    return posts;
  },

  getPostBySlug: (slug: string): IPost => {
    const filePath = postFilesDir + '/' + slug + '.mdx';
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

    const { data, content } = matter(fileContent);
    return {
      data: {
        ...data,
        publishedAt: dayjs(data.publishedAt).format('DD MMMM YYYY'),
      } as IPost['data'],
      content,
      slug,
      readingTime: calculateReadingTime(content),
    };
  },

  getAllIngredients: (): string[] => {
    const dirFiles = fs.readdirSync(postFilesDir, { withFileTypes: true });
    let ingredients = new Set<string>([]);

    dirFiles.map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const { data }: IPost = postsService.getPostBySlug(
        file.name.replace('.mdx', '')
      );

      data.ingredients.reduce((acc: any, ing: string[]) => {
        acc.add(ing);
        return acc;
      }, ingredients);
    });

    return Array.from(ingredients);
  },
};

export default postsService;
