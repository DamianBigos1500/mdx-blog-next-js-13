import { IPost } from '@/types/Post';
import prisma from '@/lib/server';
import getCurrentUser from '@/features/auth/utils/getCurrentSession';
import { IPinnedPost } from '@/types/PinnedPost';
import postsService from '@/services/posts.service';

export default async function getUserLikedPosts() {
  try {
    const user = await getCurrentUser();

    const likedPosts: IPinnedPost[] = await prisma.likedPosts.findMany({
      where: { userId: user?.id },
    });

    const favSlugs = likedPosts.map((pinnedPost) => {
      return pinnedPost.postSlug;
    });

    const posts: IPost[] = [];

    favSlugs.forEach((slug: string) => {
      posts.push(postsService.getPostBySlug(slug));
    });

    return posts;
  } catch (error: any) {
    return null;
  }
}
