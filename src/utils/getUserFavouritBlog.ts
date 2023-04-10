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
      return pinnedPost.blogPostSlug;
    });

    const blogPosts = await prisma.blogPost.findMany({
      where: { slug: { in: favSlugs } },
      include: { data: true },
    });

    return blogPosts;
    // console.log(blogPosts);
  } catch (error: any) {
    return null;
  }
}
