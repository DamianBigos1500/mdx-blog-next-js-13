import { BlogPost } from './types';
import prisma from '@/lib/server';
import getCurrentUser from './getCurrentUser';
import postsService from 'src/services/posts.service';

export default async function getUserFavouritBlog() {
  try {
    const user = await getCurrentUser();

    const pinnedPosts = await prisma.pinnedBlogs.findMany({
      where: { userId: user?.id },
    });

    const favSlugs = pinnedPosts.map((pinnedPost) => {
      const post = postsService.getPostBySlug(pinnedPost.blogPostSlug);
      return { ...post.data, content: post.content };
    });

    // const blogPosts = await prisma.blogPost.findMany({
    //   where: { slug: { in: favSlugs } },
    // });

    console.log(favSlugs);

    return favSlugs;
    // console.log(blogPosts);
  } catch (error: any) {
    return null;
  }
}
