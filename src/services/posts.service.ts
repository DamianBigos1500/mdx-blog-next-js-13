import { calculateReadingTime } from './../utils/calculateReadingTime';
import { BlogPost } from './../utils/types';
import rootDirectory from '@/utils/rootDirectory';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';

const postFilesDir = rootDirectory + '/src/data/posts';

const postsService = {
  getPosts: (): BlogPost[] => {
    const dirFiles = fs.readdirSync(postFilesDir, { withFileTypes: true });

    let posts: BlogPost[] = [];
    dirFiles.map(async (file) => {
      if (!file.name.endsWith('.mdx')) return;
      const post = await postsService.getPostBySlug(
        file.name.replace('.mdx', '')
      );

      posts.push(post);
    });

    return posts;
  },

  getPostBySlug: async (slug: string): Promise<BlogPost> => {
    const filePath = postFilesDir + '/' + slug + '.mdx';
    const fileContent = await fs.promises.readFile(filePath, {
      encoding: 'utf-8',
    });

    const { data, content } = matter(fileContent);
    return {
      data: {
        ...data,
        publishedAt: dayjs(data.publishedAt).format('DD MMMM YYYY'),
      } as BlogPost['data'],
      content,
      slug,
      readingTime: calculateReadingTime(content),
    };
  },
};

export default postsService;
