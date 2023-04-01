import prisma from '@/lib/server';

export default async function getPrismaPosts() {
  try {
    const blogPosts: any = await prisma.blogPost.findMany({
      include: {
        data: true,
      },
    });

    return blogPosts.map((post: any) => {
      return { ...post, data: { ...post.data, ingredients: [] } };
    });
  } catch (error: any) {
    throw new Error(error);
  }
}
