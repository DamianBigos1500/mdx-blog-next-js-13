import prisma from '@/lib/server';
import { calculateReadingTime } from '@/utils/calculateReadingTime';

export const blogPostService = {
  getBlogPosts: async (queryParams: any) => {
    const searchIngredient = new URLSearchParams(queryParams);

    let searchIngredients = searchIngredient
      .getAll('ing[]')[0]
      ?.split(',')
      .join(' | ');

    try {
      const blogPosts = await prisma.blogPost.findMany({
        where: {
          OR: [
            {
              data: {
                title: {
                  contains: queryParams.search,
                },
              },
            },
            {
              content: {
                contains: queryParams.search,
              },
            },
          ],

          data: {
            ingredients: {
              some: {
                name: {
                  search: searchIngredients,
                },
              },
            },
          },
        },
        include: {
          data: {
            include: {
              ingredients: true,
            },
          },
        },
      });

      return blogPosts.map((blogPost) => {
        const ingredients = blogPost.data.ingredients.map((ingredient: any) => {
          return ingredient.name;
        });

        return {
          ...blogPost,
          data: { ...blogPost.data, ingredients: ingredients },
          readingTime: calculateReadingTime(blogPost.content),
        };
      });
    } catch (error: any) {
      throw new Error(error);
    }
  },

  getBlogPostBySlug: async (slug: string) => {
    try {
      console.log('here');
      const blogPost = await prisma.blogPost.findFirst({
        where: {
          slug: slug,
        },
        include: {
          data: {
            include: {
              ingredients: true,
            },
          },
        },
      });

      if (!blogPost) return null;

      const ingredients = blogPost.data.ingredients.map((ingredient: any) => {
        return ingredient.name;
      });

      return {
        ...blogPost,
        data: { ...blogPost.data, ingredients },
        readingTime: calculateReadingTime(blogPost.content),
      };
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  },
};
