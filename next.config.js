/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/mixins.scss";`,
  },
  env: {
    API_URL_STRAPI_DEV:process.env.API_URL_STRAPI_DEV,
    API_URL_STRAPI_PROD:process.env.API_URL_STRAPI_PROD,
  }
};

module.exports = nextConfig;

