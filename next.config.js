const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Turbopack 루트 디렉토리 명시적 설정
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
