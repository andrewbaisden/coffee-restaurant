/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
};

module.exports = {
  nextConfig,
  experimental: {
    appDir: true,
  },
};
