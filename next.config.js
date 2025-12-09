/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Configurações para melhorar estabilidade do servidor de desenvolvimento
  onDemandEntries: {
    // Tempo em ms que uma página fica em cache antes de ser descartada
    maxInactiveAge: 25 * 1000,
    // Número de páginas que devem ser mantidas simultaneamente
    pagesBufferLength: 2,
  },
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    // Melhorias para watch mode em desenvolvimento
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Verifica mudanças a cada segundo
        aggregateTimeout: 300, // Aguarda 300ms antes de recompilar após mudanças
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      }
    }
    
    return config
  },
}

module.exports = nextConfig

