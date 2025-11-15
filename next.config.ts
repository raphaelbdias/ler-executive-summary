/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === "true";
const repoBase = "/ler-executive-summary";

const nextConfig = {
  output: "export",          // static export for GitHub Pages
  basePath: isProd ? repoBase : "",
  assetPrefix: isProd ? repoBase : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBase : "",
  },
  images: {
    unoptimized: true        // required for GitHub Pages (no Image Optimization server)
  },
  trailingSlash: true        // required for subfolder routing on GH Pages
};

module.exports = nextConfig;
