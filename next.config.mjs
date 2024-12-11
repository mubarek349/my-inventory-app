/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'console.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
            },
        ],
   },
   async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/api/:path*', // Proxy to Backend
            },
        ];
  },
};
export default nextConfig;
