/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // required for GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true, // required for next/image on pages
  },
};

module.exports = nextConfig;
