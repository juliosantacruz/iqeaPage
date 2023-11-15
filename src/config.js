
const API_URL_STRAPI_DEV  = process.env.API_URL_STRAPI_DEV
const API_URL_STRAPI_PROD = process.env.API_URL_STRAPI_PROD
const IS_DEV = process.env.IS_DEV


const isDev = IS_DEV



const API_URL_STRAPI = isDev? API_URL_STRAPI_DEV:API_URL_STRAPI_PROD

export  {API_URL_STRAPI } 