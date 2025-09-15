import { useState } from 'react';

import { Modal } from '../../ui/modal';

import { BookPath } from './bookPath';
import { GMoney } from './gMoney';
import { Travel_diary } from './travel_diary';
import { H_Market } from './H_Market';

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
        <section className="relative mt-12 w-full">
            <h2 className="text-3xl font-bold mb-6">Project</h2>

            <div className="flex flex-wrap justify-between gap-2 md:gap-0">
                {Object.keys(Projects).map((projectName) => {
                    return (
                        <button key={projectName} onClick={() => handleClick(projectName)} className="w-[49%] border rounded-lg text-center py-5 hover:bg-gray-100 md:w-[24%]">
                            {projectName}
                        </button>
                    );
                })}
            </div>

            {showModal && <Modal setShowModal={setShowModal} selectedProject={selectedProject} Projects={Projects} />}
        </section>
    );
}
