/** @type {import('next').NextConfig} */

 

const nextConfig = {
    sassOptions: {
        additionalData: `@import "src/styles/mixins.scss";`,
     },
}

module.exports = nextConfig
