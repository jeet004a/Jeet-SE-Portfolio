/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "media.licdn.com",
        }, {
            protocol: 'https',
            hostname: 'images.unsplash.com',
        }, {
            protocol: 'https',
            hostname: 'fastly.picsum.photos',
        }, {
            protocol: 'https',
            hostname: 'picsum.photos',
        }, {
            protocol: 'https',
            hostname: 'www.emerson.com',
        }, {
            protocol: 'https',
            hostname: 'www.emiconglobal.com',
        }, {
            protocol: 'https',
            hostname: "avatars.githubusercontent.com",
        }, {
            protocol: 'https',
            hostname: "i0.wp.com",
        }, {
            protocol: 'https',
            hostname: "www.arcgis.com",
        }],
    },
};

export default nextConfig;