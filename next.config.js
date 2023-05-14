/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'images.pexels.com',
      'res.cloudinary.com',
    ],
  },
}

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
