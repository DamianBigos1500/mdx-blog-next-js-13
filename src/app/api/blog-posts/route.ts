import { NextResponse } from 'next/server';
import prisma from '@/lib/server';
import main from 'prisma/seed';
import postsService from 'src/services/posts.service';

// export async function GET() {
//   const posts = postsService.getPosts();

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
  //           preparationTime: String(post.data.preparationTime),
  //           description: post.data.description,
  //           ingredients: '',
  //           publishedAt: String(post.data.publishedAt),
  //         },
  //       },
  //     },
  //   });
  // }

  // const blogs = await prisma.blogPost.findMany({
  //   include: {
  //     data: true,
  //   },
  // });

//   return NextResponse.json({ blogs: blogs });
// }

// export async function POST() {
//   return new Response(JSON.stringify({}));
// }
