// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,           // Helps catch potential issues
//   swcMinify: true,                 // Minify JS using Next.js SWC compiler
//   images: {
//     formats: ['image/avif', 'image/webp'], // Serve modern formats automatically
//     deviceSizes: [320, 480, 768, 1024, 1280, 1600],
//     imageSizes: [16, 32, 48, 64, 96],
//   },
//   experimental: {
//     optimizeCss: true,             // Automatically optimize and minify CSS
//     scrollRestoration: true,       // Improves user experience on mobile
//   },
//   poweredByHeader: false,          // Removes X-Powered-By header
//   compress: true,                  // Enable Gzip compression
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
    deviceSizes: [320, 480, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.odooimplementers.com',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "react-icons/fa",
      "react-icons/bi",
      "react-icons/fi",
      "react-icons/ri",
      "react-icons/ai",
      "framer-motion",
    ],
  },

  poweredByHeader: false,
  compress: true,
};

export default nextConfig;