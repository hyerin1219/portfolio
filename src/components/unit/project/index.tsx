'use client';
import { useState } from 'react';

import { Modal } from '../../ui/modal';

import { BookPath } from './bookPath';
import { GMoney } from './gMoney';
import { Travel_diary } from './travel_diary';
import { H_Market } from './H_Market';
import HeaderBar from '@/components/ui/headerBar';

export default function Project() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const Projects: Record<string, React.FC> = {
        BookPath,
        Travel_diary,
        GMoney,
        // H_Market,
    };

    const handleClick = (project: string) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    return (
        <section className="w-full md:h-full h-auto">
            {/* 상단 */}
            <div className="flex items-center justify-center gap-5">
                <div className="flex-shrink-0 w-30 h-30 md:w-45 md:h-45 rounded-full overflow-hidden bg-[#FFE7E5] shadow-[3px_3px_0_0_#FF7A70]">
                    <img className="w-full" src="/image/img_char01.png" alt="" />
                </div>

                <div className="text-lg text-justify">이 모험가가 지금까지 진행한 주요 퀘스트 목록을 확인해보세요.</div>
            </div>
            <div className="p-5 flex flex-wrap items-center justify-center gap-5">
                {Object.keys(Projects).map((projectName) => {
                    const imageUrl = `/image/${projectName}.png`;

                    return (
                        <div key={projectName} className="space-y-2 text-center">
                            {/* 프로젝트 이름 */}
                            <p className="text-lg font-bold flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-[#7FAAFF] rounded-full"></span>
                                {projectName}
                            </p>

                            {/* 이미지 버튼 */}
                            <button
                                onClick={() => handleClick(projectName)}
                                style={{ backgroundImage: `url(${imageUrl})` }}
                                className="
                        w-[260px] h-[150px]
                        md:w-[400px] md:h-[230px]
                        bg-cover bg-no-repeat bg-center
                        rounded-lg
                        border-2 border-[#A9D8FF]
                        shadow-[3px_3px_0_0_#7FAAFF]
                        hover:scale-105
                        transition-all
                    "
                            />
                        </div>
                    );
                })}
            </div>

            {showModal && <Modal setShowModal={setShowModal} selectedProject={selectedProject} Projects={Projects} />}
        </section>
    );
}
