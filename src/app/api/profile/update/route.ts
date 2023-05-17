import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/server/auth';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/server';
import { Validate } from '@/class/Validate';
import { updateProfileRules } from '@/utils/validationRules';

export async function POST(request: Request) {
  const body = await request.json();
  const validated = new Validate(body, updateProfileRules);

  if (validated.hasError) {
    return new Response(JSON.stringify({ errors: validated.errors }), {
      status: 422,
    });
  }

  let session;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    throw new Error('Cannot get user session');
  }

  if (!session?.user || session.user.email !== body.email) {
    throw new Error('This email does not belong to you');
  }

  let newImg = {};
  if (body.image) {
    newImg = { image: body.image };
  }

  const updatedUser = await prisma.user.update({
    where: {
      email: session.user.email!,
    },
    data: {
      name: body.name,
      surname: body.surname,
      ...newImg,
    },
  });

  return NextResponse.json({ message: 'success', user: updatedUser });
}

const regex = /\/v\d+\/([^/]+)\.\w{3,4}$/;

const cloudinaryUrl =
  'https://res.cloudinary.com/your_cloud_name/image/upload/v1234567890/public_id.jpg';

const getPublicIdFromUrl = (url: string) => {
  const match = url.match(regex);
  return match ? match[1] : null;
};

const publicId = getPublicIdFromUrl(cloudinaryUrl);

// const generateSHA1 = (data: any) => {
//   const hash = crypto.createHash('sha1');
//   hash.update(data);
//   return hash.digest('hex');
// };

const generateSignature = (publicId: string, apiSecret: string) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};
