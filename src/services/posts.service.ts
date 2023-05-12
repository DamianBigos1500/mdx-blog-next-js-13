// import { calculateReadingTime } from './../utils/calculateReadingTime';
// import { BlogPost } from './../utils/types';
// import dayjs from 'dayjs';
import fs from 'fs';
import rootDirectory from '../utils/rootDirectory';
import { IBlogPost } from '../types/BlogPost';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import { calculateReadingTime } from '@/utils/calculateReadingTime';

const postFilesDir = rootDirectory + '/public/mdx';

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

  getPosts: (): IBlogPost[] => {
    const dirFiles = fs.readdirSync(postFilesDir, { withFileTypes: true });

    let posts: IBlogPost[] = [];

    dirFiles.map((file) => {
      if (!file.name.endsWith('.mdx')) return;
      const post = postsService.getPostBySlug(file.name.replace('.mdx', ''));

      posts.push(post);
    });

    return posts;
  },

  getPostBySlug: (slug: string): any => {
    const filePath = postFilesDir + '/' + slug + '.mdx';

    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');

      const { data, content } = matter(fileContent);
      return {
        data: {
          ...data,
          publishedAt: dayjs(data.publishedAt).format('DD MMMM YYYY'),
        } as IBlogPost['data'],
        content,
        slug,
        readingTime: calculateReadingTime(content),
      };
    } catch (error) {
      return null;
    }
  },
};

export default postsService;
