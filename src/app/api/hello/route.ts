import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log(request)
  try {
    const newPost = {
      name: 'name post 1',
    };


    return NextResponse.json({ post: 'post' });
  } catch (error) {}

  return NextResponse.json({ data: 'asdasd' });
}
