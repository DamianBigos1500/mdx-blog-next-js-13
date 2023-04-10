import { Ingredients } from './../../../utils/types';
import { NextResponse } from 'next/server';
import prisma from '@/lib/server';
import postsService from 'src/services/posts.service';

export async function GET() {
  const posts = postsService.getPosts();

  for (let post of posts) {
    let ids: any = [];
    let ingredient: any;

    for (ingredient of post.data.ingredients) {
      let prom;

      prom = await prisma.ingredient.findUnique({
        where: {
          name: ingredient,
        },
      });

      if (!prom) {
        prom = await prisma.ingredient.upsert({
          where: {
            name: ingredient,
          },
          update: {},
          create: {
            name: ingredient,
          },
        });
      }

      ids.push(prom);
    }

    const idasda: any = ids.map((dat: any) => {
      return { id: dat.id };
    });

    const existingPost = await prisma.blogPost.findFirst({
      where: {
        slug: post.slug,
      },
    });

    if (existingPost) continue;

    try {
      await prisma.blogPost.create({
        data: {
          content: post.content,
          slug: post.slug,
          data: {
            create: {
              title: post.data.title,
              imageUrl: post.data.imageUrl,
              secondImageUrl: post.data.secondImageUrl,
              blurhash: post.data.blurhash,
              preparationTime: String(post.data.preparationTime),
              description: post.data.description,
              ingredients: {
                connect: [...idasda],
              },
              publishedAt: String(post.data.publishedAt),
            },
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const blogs = await prisma.blogPost.findMany({
    include: {
      data: {
        include: {
          ingredients: true,
        },
      },
    },
  });

  const ingredients = await prisma.ingredient.findMany({});

  return NextResponse.json({ blogs: blogs, ingredients: ingredients });
}

// export async function POST() {
//   return new Response(JSON.stringify({}));
// }
