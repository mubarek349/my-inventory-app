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
                source: '/api/:https://my-inventory-app-ten.vercel.app',
                destination: 'http://localhost:3000/api/:https://my-inventory-app-ten.vercel.app', // Proxy to Backend
            },
        ];
  },
};
export default nextConfig;
