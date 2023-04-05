import prisma from '@/lib/server';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const body = await request.json();

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      image: body.image,
      email: body.email,
      password: bcrypt.hashSync(body.password, 12),
    },
  });

  return NextResponse.json({ message: 'success', user: newUser });
}
