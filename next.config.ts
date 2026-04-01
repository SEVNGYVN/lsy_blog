import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // 빌드 결과물을 정적 HTML로 추출 (필수)
  basePath: '/lsy_blog',   // 저장소 이름이 주소 뒤에 붙으므로 경로 설정
  images: {
    unoptimized: true,     // 정적 배포 시 이미지 최적화 기능 끄기 (필수)
  },
};

export default nextConfig;
