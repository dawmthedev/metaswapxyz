const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: "/metaswapxyz",
        assetPrefix: "/metaswapxyz/",
      }
    : {}),
};

const pwaConfig = {
  dest: "public",
  disable: !isProd,
  register: true,
  scope: "/",
  sw: "service-worker.js",
};

module.exports = withPWA(pwaConfig)(nextConfig);



// const nextConfig = {
//   reactStrictMode: true,
//   transpilePackages: ["three"],
// };

// const isProd = process.env.NODE_ENV === 'production';

// module.exports = {
//   output: 'export',
//   basePath: isProd ? '/metaswapxyz' : '',
//   assetPrefix: isProd ? '/metaswapxyz' : '',
// };