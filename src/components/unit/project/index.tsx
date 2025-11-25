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
        H_Market,
    };

    const handleClick = (project: string) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    return (
        <section className="w-full">
            {/* Header */}
            <HeaderBar page="Project" />

            {/* Body */}
            <div className="p-3 pb-5 space-y-8">
                <p className="text-lg font-bold">{`> Projects`}</p>

                {Object.keys(Projects).map((projectName) => {
                    const imageUrl = `/image/${projectName}.png`;
                    return (
                        <div key={projectName} className="flex flex-col items-center space-y-2">
                            {/* 프로젝트 이름 */}
                            <p className="text-xl font-semibold">{projectName}</p>

                            {/* 이미지 버튼 */}
                            <button onClick={() => handleClick(projectName)} style={{ backgroundImage: `url(${imageUrl})` }} className="w-[300px] h-[164px] md:w-[600px] md:h-[327px]  border bg-cover bg-no-repeat shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"></button>
                        </div>
                    );
                })}
            </div>

            {showModal && <Modal setShowModal={setShowModal} selectedProject={selectedProject} Projects={Projects} />}
        </section>
    );
}
