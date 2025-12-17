'use client';

import { useState } from 'react';

export default function AboutMe() {
    const [tab, setTab] = useState('info');

    return (
        <section className="w-full md:h-full h-auto">
            {/* 탭 버튼 영역 */}
            <div className="flex gap-3 ml-10 mt-5">
                <button
                    className={` px-2 p-2 text-lg  bg-[#C5DFFF]  rounded-t-xl  shadow-[3px_3px_0_0_#A9D8FF] border-2 border-b-0 border-[#A9D8FF] mb-0.5 transition-all
                         ${tab === 'info' ? ' font-bold px-6' : '  '}
                    `}
                    onClick={() => setTab('info')}
                >
                    Info
                </button>

                <button
                    className={` px-2 py-2 text-lg  bg-[#C5DFFF]  rounded-t-xl   shadow-[3px_3px_0_0_#A9D8FF] border-2 border-b-0 border-[#A9D8FF] mb-0.5 transition-all
                        ${tab === 'career' ? ' font-bold px-6' : '  '}
                    `}
                    onClick={() => setTab('career')}
                >
                    Career
                </button>
            </div>

            {/* 컨텐츠 박스 */}
            <div className=" p-6  border-4  border-[#5A93FF]  bg-[#F7FAFF]  rounded-xl  shadow-[6px_6px_0_0_#A9D8FF] mx-5">
                {/* INFO TAB */}
                {tab === 'info' && (
                    <div>
                        <div className="flex items-center gap-3 mb-6 p-3  bg-[#FFE38F] rounded-xl text-xl shadow-[3px_3px_0_0_#FFC824]">
                            <img className="h-10" src="/image/ico_item04.png" alt="" />
                            <span className="text-xl font-bold ">신입 프론트엔드 모험가 정혜린</span>
                        </div>

                        <p className="text-justify text-lg mb-6 leading-relaxed">안녕하세요. 키보드 글자가 지워질 때까지 몰입하며 코딩하는 신입 개발자 정혜린입니다. HTML/CSS 기반 디지털 교과서 제작 경험을 통해 UI 구현 능력과 웹 접근성 이해를 쌓았습니다. 협업 기반 환경에서 다양한 직군과 함께 일하며 문제 해결 능력과 커뮤니케이션 역량을 강화했습니다. 이제 React·TypeScript 등을 활용해 사용자 중심의 소프트웨어를 만드는 개발자로 성장하고자 합니다.</p>

                        <div className="space-y-2 text-lg">
                            <p>📞 TEL : 010.8337.2568</p>
                            <p>📧 EMAIL : gpfls662@gmail.com</p>
                        </div>
                    </div>
                )}

                {/* CAREER TAB */}
                {tab === 'career' && (
                    <div>
                        <div className="flex items-center gap-3 mb-6 p-3  bg-[#FFE38F] rounded-xl text-xl shadow-[3px_3px_0_0_#FFC824]">
                            <img className="h-12" src="/image/ico_item05.png" alt="" />
                            <span className="text-xl font-bold ">모험 기록 (Career Log)</span>
                        </div>

                        <div className="space-y-10">
                            {/* 어벤저스 */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-2  flex-col sm:flex-row sm:items-center">
                                    <span className="text-gray-600">2023.03 ~ 2025.06</span>
                                    <span className="font-bold text-[#2857A4]">(주)어벤저스 | 주임 · 퍼블리셔</span>
                                </div>

                                <div>
                                    <p className="font-semibold">📌 프로젝트</p>
                                    <p className="text-gray-700">YBM·천재·동아 초/중등 전자저작물, 디지털 교과서 제작</p>
                                </div>

                                <div>
                                    <p className="font-semibold">🛠 역할</p>
                                    <ul className="space-y-1">
                                        <li>• HTML/CSS·사내 라이브러리 기반 콘텐츠 제작 및 유지보수</li>
                                        <li>• 양산용 프로토타입 제작</li>
                                        <li>• 웹 접근성 고려(WAI-ARIA, 키보드 네비게이션, 대체 텍스트)</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold">🏆 성과</p>
                                    <ul className="space-y-1">
                                        <li>• 전자저작물·디지털 교과서 검정 심사 총 6건 통과</li>
                                        <li>• 사내 라이브러리 신규 기능 제안</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 제과,제빵 */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-2  flex-col sm:flex-row sm:items-center">
                                    <span className="text-gray-600">2016 ~ 2022</span>
                                    <span className="font-bold text-[#2857A4]">제과·제빵 생산 및 관리</span>
                                </div>

                                <p className="text-gray-700">제과·제빵 생산 관리 및 팀 협업 경험</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
