import prisma from '@/lib/server';
import { authOptions } from '@/lib/server/auth';
import { getServerSession } from 'next-auth';

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user) {
      return null;
    }

    return {
      ...session.user,
    };
  } catch (error: any) {
    return null;
  }
}
