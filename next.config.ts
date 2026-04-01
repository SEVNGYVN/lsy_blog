import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lsy_blog',
  images: {
    unoptimized: true,
  },
  // 에러가 났던 부분을 제외하고 가장 기본적이고 필수적인 설정만 남겼습니다.
};

export default nextConfig;
