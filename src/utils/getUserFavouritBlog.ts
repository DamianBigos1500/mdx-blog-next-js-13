import prisma from '@/lib/server';
import getCurrentUser from './getCurrentUser';

export default async function getUserFavouritBlog() {
  try {
    const user = await getCurrentUser();

    const fav = await prisma.user.findFirst({
      where: { email: user?.email },
      include: {
        likedBlogs: true,
      },
    });

    console.log(fav);
  } catch (error: any) {
    return null;
  }
}
