/** @type {import('next').NextConfig} */
const { withGluestackUI } = require('@gluestack/ui-next-adapter');

const nextConfig = {
  reactStrictMode: true,
  images: {
    
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withGluestackUI(nextConfig);
