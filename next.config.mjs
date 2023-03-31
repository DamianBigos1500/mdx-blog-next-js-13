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
  debug: true,
};

export default withMDX(nextConfig);
