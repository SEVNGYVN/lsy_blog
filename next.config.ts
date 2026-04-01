import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lsy_blog',
  images: {
    unoptimized: true,
  },
  // 빌드 시 타입 체크와 ESLint 에러를 무시하도록 설정합니다.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
