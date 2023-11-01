/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/mixins.scss";`,
  },
  env: {
    API_URL_STRAPI: process.env.API_URL_STRAPI,
  }
};

module.exports = nextConfig;
