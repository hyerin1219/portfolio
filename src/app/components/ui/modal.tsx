'use client';

import { Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    selectedProject: string | null;
    Projects: Record<string, React.FC>;
}

export function Modal({ setShowModal, selectedProject, Projects }: ModalProps) {
    const ProjectComponent = selectedProject ? Projects[selectedProject] : null;

    console.log(ProjectComponent);

    return (
        <div className="fixed inset-0 bg-[#1a1a1a] flex items-center justify-center z-50 text-right">
            <motion.div className="w-[90%] h-[90%] bg-white rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div className="w-full h-full p-5" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="w-full h-[calc(100%-50px)] text-[#000] text-justify overflow-y-auto overflow-x-hidden p-2 py-0">{ProjectComponent && <ProjectComponent />}</div>

                    <button onClick={() => setShowModal(false)} className="px-3 py-2 border rounded bg-[#888] text-white mt-4">
                        닫기
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}
