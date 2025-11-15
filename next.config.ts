/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // static export for GitHub Pages
  images: {
    unoptimized: true        // required for GitHub Pages (no Image Optimization server)
  },
  trailingSlash: true        // required for subfolder routing on GH Pages
};

module.exports = nextConfig;
