/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages project sites are served under /<repository-name>.
  output: 'export',
  basePath: '/demo1',
  assetPrefix: '/demo1/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
