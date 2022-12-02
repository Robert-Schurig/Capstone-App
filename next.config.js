/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ["pages", "components", "styles"],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {reactRemoveProperties: true, styledComponents: true},
  images: {
    domains: ["api.europeana.eu"],
  },
};

module.exports = nextConfig;
