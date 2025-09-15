'use client';

import { motion } from 'framer-motion';

import { AboutMe } from './components/ui/aboutMe';
import Work from './components/unit/work';
import { Profile } from './components/ui/profile';
import Project from './components/unit/project';
import { useEffect } from 'react';

export default function Home() {
    // 페이지 로드 시 무조건 맨 위로
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <div className="p-10 py-10 w-full">
            <AboutMe />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1.5 }}>
                <div>
                    <p className="text-3xl mt-4">Frontend portfolio</p>
                    <p className="text-lg mt-2">🔥 계속해서 불타오르는 프론트엔드 개발자, 정혜린입니다.</p>
                </div>

                {/* 프로필 */}
                <Profile />

                {/* 일 */}
                <Work />

                {/* 프로젝트 */}
                <Project />
            </motion.div>
        </div>
    );
}
