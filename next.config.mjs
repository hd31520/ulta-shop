/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co", // Corrected hostname
            },
            {
                protocol: "https",
                hostname: "i.ibb.co.com", // Corrected hostname
            },
        ],
    },
};

export default nextConfig;
