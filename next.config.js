/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
