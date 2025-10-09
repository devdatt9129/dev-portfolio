/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        pathname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
