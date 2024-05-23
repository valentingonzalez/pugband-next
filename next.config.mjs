import dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    return config;
  },
  env: {
    PORT: process.env.PORT || 3000,
  },
};

export default nextConfig;

