/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // 빌드 결과물을 HTML 파일로 뽑아내겠다는 설정 (필수!)
  basePath: '/lsy_blog',   // 주소 뒤에 저장소 이름이 붙으므로 경로를 맞춰줍니다.
  images: {
    unoptimized: true,     // 정적 배포 시 Next.js의 이미지 최적화 기능을 꺼야 합니다.
  },
};

export default nextConfig;
