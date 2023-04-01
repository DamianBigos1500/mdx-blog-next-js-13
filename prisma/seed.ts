import prisma from '@/lib/server';
import postsService from 'src/services/posts.service';

async function main() {
  const posts = postsService.getPosts();

  // for (let post of posts) {
  //   await prisma.blogPost.create({
  //     data: {
  //       content: post.content,
  //       slug: post.slug,
  //       data: {
  //         create: {
  //           title: post.data.title,
  //           imageUrl: post.data.imageUrl,
  //           secondImageUrl: post.data.secondImageUrl,
  //           blurhash: post.data.blurhash,
  //           preparationTime: post.data.preparationTime,
  //           description: post.data.description,
  //           ingredients: '',
  //           publishedAt: post.data.publishedAt,
  //         },
  //       },
  //     },
  //   });
  // }
}

main().then();

export default main