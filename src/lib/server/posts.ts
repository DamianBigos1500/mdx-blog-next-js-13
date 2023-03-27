import prisma from '.';

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany();
    return { posts };
  } catch (error) {}
}

export async function createPost(post: any) {
  try {
    const userFromDB = await prisma.post.create({ data: post });
    return { post: userFromDB };
  } catch (error) {
    console.log(error);
  }
  return { post: null };
}
