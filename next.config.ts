import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    trailingSlash: true, // 새로고침 오류
    eslint: {
        ignoreDuringBuilds: true, //  ESLint 에러 무시하고 빌드 통과
    },
};

export default nextConfig;
