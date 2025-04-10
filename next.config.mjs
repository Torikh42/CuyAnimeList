/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "cdn.myanimelist.net",
        },
      ],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Sediakan fallback untuk modul Node.js yang tidak tersedia di browser
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          net: false,
          tls: false,
        };
      }
      return config;
    },
  };
  
  export default nextConfig;