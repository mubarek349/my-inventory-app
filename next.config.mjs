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
   
   
};
export default nextConfig;
