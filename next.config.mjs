/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.FRONTEND_URL || '',
    assetPrefix: process.env.FRONT_URL || '',
    reactStrictMode: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    env: {
        WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,
        API_URL: process.env.API_URL,
        APP_VERSION: process.env.npm_package_version,
        NATIVE_TOKEN: process.env.NATIVE_TOKEN
    }
};

export default nextConfig;
