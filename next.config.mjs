import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  // expresion: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'images.pexels.com',
    ],
  },
};

export default withMDX(nextConfig);
