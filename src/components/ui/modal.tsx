'use client';

import { Dispatch, SetStateAction, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderBar from './headerBar';

interface ModalProps {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    selectedProject: string | null;
    Projects: Record<string, React.FC>;
}

export function Modal({ setShowModal, selectedProject, Projects }: ModalProps) {
    const ProjectComponent = selectedProject ? Projects[selectedProject] : null;

    // ESC로 닫기
    const handleEscClose = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowModal(false);
            }
        },
        [setShowModal]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleEscClose);
        document.body.style.overflow = 'hidden'; // 스크롤 막기

        return () => {
            window.removeEventListener('keydown', handleEscClose);
            document.body.style.overflow = 'auto'; // 복구
        };
    }, [handleEscClose]);

    //  배경 클릭 닫기
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setShowModal(false);
        }
    };

    return (
        <AnimatePresence>
            <div onClick={handleOverlayClick} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <motion.div className="relative w-[92%] h-[90%] border border-black rounded-md shadow-[6px_6px_0_0_rgba(0,0,0,0.5)] overflow-hidden font-mono  bg-white rounded-lg " initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.25 }}>
                    {selectedProject && <HeaderBar page={selectedProject} />}
                    {/* 닫기 버튼 (오른쪽 상단) */}
                    <button onClick={() => setShowModal(false)} className="absolute top-2 right-3 font-bold text-2xl">
                        ✕
                    </button>

                    {/* 모달 내용 */}
                    <div className="w-full h-[95%] p-6 overflow-y-auto  text-justify text-sm md:text-lg">{ProjectComponent && <ProjectComponent />}</div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
