import { authOptions } from '@/lib/server/auth';
import { getServerSession } from 'next-auth';

export default async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions);

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