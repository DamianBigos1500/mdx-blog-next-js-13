import prisma from '@/lib/server';
import { BlogPost } from '@/utils/types';
import postsService from './posts.service';

export default async function getPrismaPosts() {
  try {
    // const blogPosts: any = await prisma.blogPost.findMany({
    //   include: {
    //     data: true,
    //   },
    // });
    const blogPosts: BlogPost[] = await postsService.getPosts();

    return blogPosts.map((post: any) => {
      return post;
    });

  } catch (error: any) {
    throw new Error(error);
  }
}
