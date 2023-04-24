/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "http://google.com"],
  },
};

module.exports = nextConfig;
