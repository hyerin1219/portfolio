import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true, // 🚨 ESLint 에러 무시하고 빌드 통과
    },
};

export default nextConfig;
