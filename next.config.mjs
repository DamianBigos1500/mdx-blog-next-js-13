import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  // expresion: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
