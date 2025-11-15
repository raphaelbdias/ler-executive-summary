/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // required
  distDir: "out",            // ensures GitHub Pages receives correct folder
  images: {
    unoptimized: true        // required for GitHub Pages (no Image Optimization server)
  },
  trailingSlash: true        // required for subfolder routing on GH Pages
};

module.exports = nextConfig;
