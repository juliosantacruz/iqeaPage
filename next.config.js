/** @type {import('next').NextConfig} */


const {API_URL_STRAPI_DEV, API_URL_STRAPI_PROD, IS_DEV} = process.env

const isDev = IS_DEV

const API_URL_STRAPI = isDev? API_URL_STRAPI_DEV:API_URL_STRAPI_PROD



const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/mixins.scss";`,
  },
  env: {
    API_URL_STRAPI:API_URL_STRAPI,

  }
};

module.exports = nextConfig;

