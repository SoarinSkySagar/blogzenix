/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        dangerouslyAllowSVG: true,
        domains: ["images.unsplash.com", "tailwindui.com"],
    }
};

export default nextConfig;
