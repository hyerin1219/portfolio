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
        <section className="w-full ">
            <div className="w-full  p-6 border-4  border-[#5A93FF]  bg-[#F7FAFF]  rounded-xl  shadow-[6px_6px_0_0_#A9D8FF]">
                {/* Title Box */}
                <div className="flex items-center justify-center gap-3 p-2 bg-[#FFE38F] rounded-xl text-xl shadow-[3px_3px_0_0_#FFC824]">
                    <img className="w-8" src="/image/ico_item01.png" alt="" />
                    <span className="sm:text-xl font-bold text-lg text-center">퀘스트 목록</span>
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
                                <button onClick={() => handleClick(projectName)} style={{ backgroundImage: `url(${imageUrl})` }} className=" w-[260px] h-[150px] md:w-[400px] md:h-[230px] bg-cover bg-no-repeat bg-center rounded-lg border-2 border-[#FFE7E5] shadow-[3px_3px_0_0_#FF7A70] hover:shadow-[5px_5px_0_0_#FF7A70] transition-all " />
                            </div>
                        );
                    })}
                </div>
            </div>

            {showModal && <Modal setShowModal={setShowModal} selectedProject={selectedProject} Projects={Projects} />}
        </section>
    );
}
