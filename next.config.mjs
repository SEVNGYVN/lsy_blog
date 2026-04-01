/** @type {import('next').NextConfig} */
const nextConfig = {
//  output: 'export',
// basePath: '/lsy_blog',
  images: {
    unoptimized: true,
  },
  // 빌드 시 발생하는 사소한 에러들을 무시하고 진행합니다.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
