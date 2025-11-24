'use client';

import AboutMe from '@/components/unit/aboutMe';
import { useEffect } from 'react';

export default function Home() {
    // 페이지 로드 시 무조건 맨 위로
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <div className="size-full ">
            <AboutMe />
        </div>
    );
}
