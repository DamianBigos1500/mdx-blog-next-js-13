import { calculateReadingTime } from './../utils/calculateReadingTime';
import { BlogPost } from './../utils/types';
import rootDirectory from '@/utils/rootDirectory';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postFilesDir = rootDirectory + '/src/data/posts';

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

  getPosts: () => {
    const dirFiles = fs.readdirSync(postFilesDir, { withFileTypes: true });

    let posts = [];

    const data = dirFiles.map((file) => {
      // console.log(file.name);
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        postFilesDir + '/' + file.name,
        'utf8'
      );
      const matterResult = matter(fileContent);
      // const fileContent = fs.readFileSync(file, 'utf8');

      // const post = postsService.getPostBySlug(file.name.replace('.mdx', ''));

      return {
        ...matterResult,
        readingTime: calculateReadingTime(matterResult.content),
      };
    });
    console.log(data[0]);

    return data;
  },

  getPostBySlug: (slug: string): BlogPost => {
    const filePath = postFilesDir + '/' + slug + '.mdx';
    const fileContent = fs.readFileSync(filePath, 'utf8');

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
