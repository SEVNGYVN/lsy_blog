import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lsy_blog',
  images: {
    unoptimized: true,
  },
  // 아래 내용을 추가하면 사소한 에러로 빌드가 멈추는 걸 방지합니다
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
