/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    images: {
        domains: ['via.placeholder.com']
    },
    experimental: {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'via.placeholder.com',
                    port: '',
                    pathname: '/600/**'
                }
            ]
        }
    }

}

module.exports = nextConfig
