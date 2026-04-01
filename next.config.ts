TypeScript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 빌드 결과물을 정적 HTML로 추출 (GitHub Pages 필수 설정) */
  output: 'export',

  /* 저장소 이름이 주소 뒤에 붙으므로 경로를 맞춰줍니다 */
  basePath: '/lsy_blog',

  /* 정적 배포 시 이미지 최적화 기능을 꺼야 빌드 오류가 안 납니다 */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
