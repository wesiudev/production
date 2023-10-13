const withVideos = require("next-videos");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: "imgix",
    path: "/",
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
  },
  assetPrefix: "",
};

module.exports = withVideos(nextConfig);
