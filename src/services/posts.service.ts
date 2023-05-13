import { calculateReadingTime } from '@/utils/calculateReadingTime';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import path from 'path';
import fs from 'fs';
import { IPost } from '@/types/Post';

const postFilesDir = path.join(process.cwd(), 'public', 'mdx');

const postsService = {
  getPaths: () => {
    const dirFiles = fs.readdirSync(postFilesDir, { withFileTypes: true });

    let paths: any[] = [];

    dirFiles.map((file) => {
      if (!file.name.endsWith('.mdx')) return;
      paths.push({ slug: file.name.replace('.mdx', '') });
    });

    return paths;
  },

  getPosts: (): IPost[] => {
    const dirFiles = fs.readdirSync(postFilesDir, { withFileTypes: true });
    let posts: IPost[] = [];

    dirFiles.map((file) => {
      if (!file.name.endsWith('.mdx')) return;
      const post: IPost = postsService.getPostBySlug(
        file.name.replace('.mdx', '')
      );

      posts.push(post);
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
};

export default postsService;
