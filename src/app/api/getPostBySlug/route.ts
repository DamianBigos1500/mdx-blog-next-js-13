import { NextResponse } from 'next/server';
import postsService from '@/services/posts.service';

export async function POST(request: Request) {
  const req = await request.json();
  const post = postsService.getPostBySlug(req.slug);
  
  return NextResponse.json({ message: 'success', post });
}
