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
module.exports = {
    output: 'standalone', // Removes the requirement for static HTML export
  };
  
export default nextConfig;
