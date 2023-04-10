import prisma from '@/lib/server';

export const ingredientsService = {
  getIngredients: async () => {
    try {
      const ingredients = await prisma.ingredient.findMany();

      return ingredients;
    } catch (error: any) {
      throw new Error(error);
    }
  },
};
