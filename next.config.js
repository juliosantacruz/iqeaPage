/** @type {import('next').NextConfig} */


const {API_URL_STRAPI_DEV, API_URL_STRAPI_PROD, NEXT_PUBLIC_API_URL_STRAPI_DEV, NEXT_PUBLIC_API_URL_STRAPI_PROD,IS_DEV} = process.env

const isDev = IS_DEV

const API_URL_STRAPI = isDev? API_URL_STRAPI_DEV:API_URL_STRAPI_PROD
const PUBLIC_API_URL_STRAPI = isDev? NEXT_PUBLIC_API_URL_STRAPI_DEV:NEXT_PUBLIC_API_URL_STRAPI_PROD




const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/, // Agrega aquí todas las extensiones de vídeo que necesitas manejar
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
  sassOptions: {
    additionalData: `@import "src/styles/mixins.scss";`,
  },
  env: {
    API_URL_STRAPI:API_URL_STRAPI,
    PUBLIC_API_URL_STRAPI:PUBLIC_API_URL_STRAPI,
    BASE_URL:process.env.BASE_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  // typedRoutes: true,

};

module.exports = nextConfig;


// const withVideos = require('next-videos')
// module.exports = withVideos()



// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(mp4|webm)$/, // Agrega aquí todas las extensiones de vídeo que necesitas manejar
//       use: {
//         loader: 'file-loader',
//         options: {
//           publicPath: '/_next',
//           name: 'static/media/[name].[hash].[ext]',
//         },
//       },
//     });

//     return config;
//   },
// };
