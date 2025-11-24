export default function AboutMe() {
    return (
        <section className="w-full  font-mono pb-4">
            <div className="border border-black rounded-md shadow-[4px_4px_0_0_rgba(0,0,0,5)] overflow-hidden ">
                {/* Header bar */}
                <div className="flex items-center gap-2 px-3 py-2 border-b border-black bg-gray-100">
                    <span className="w-3 h-3 bg-red-500 rounded-full border border-black"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full border border-black"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full border border-black"></span>
                    <span className="ml-3 text-xs">About.com</span>
                </div>

                {/* Body */}
                <div className="p-3 pb-5 space-y-6">
                    {/* Header */}
                    <div className="space-y-1">
                        <p className="text-lg font-bold">{`>  hyerin.txt`}</p>
                        <h2 className="text-2xl font-bold">{`<hyerin/>`}</h2>
                        <p className="opacity-80">Frontend Developer 정혜린</p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-1 pt-2">
                        <p className="text-gray-800">{`$ contact`}</p>
                        <div className="pl-4 space-y-1">
                            <p>TEL : 010.8337.2568</p>
                            <p>E-MAIL : gpfls662@gmail.com</p>
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="pt-4">
                        <p className="text-gray-800">{`$ whoami`}</p>
                        <p className="pl-4">키보드 글자가 지워질 때까지 몰입하며 코딩하는 신입 프론트엔드 개발자 정혜린입니다.</p>
                    </div>

                    {/* Skill */}
                    <div className="pt-4">
                        <p className="text-gray-800">{`$ skills`}</p>
                        <div className="pl-4 space-y-2">
                            <p>Frontend _ React, Next.js, TypeScript, TailwindCSS</p>
                            <p>Tools _ GitHub, Figma, Firebase</p>
                        </div>
                    </div>

                    {/* Career */}
                    <div className="pt-4 space-y-5">
                        <p className="text-gray-800">{`$ career`}</p>

                        <div className="pl-4 space-y-2">
                            <p className="text-gray-600">2023.03 ~ 2025.06</p>

                            <p className="font-bold">(주)어벤저스 | 주임 · 퍼블리셔</p>

                            <div>
                                <p className="font-medium">[프로젝트]</p>
                                <p className="pl-4 text-gray-700">YBM·천재·동아 초/중등 전자저작물, 디지털 교과서 제작</p>
                            </div>

                            <div>
                                <p className="font-medium">[역할]</p>
                                <ul className="list-disc list-inside pl-2 text-gray-700">
                                    <li>HTML·CSS·사내 라이브러리를 활용한 콘텐츠 제작 및 유지보수</li>
                                    <li>양산용 프로토타입 제작</li>
                                    <li>웹 접근성(WAI-ARIA, 키보드 네비게이션) 고려한 마크업</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium">[성과]</p>
                                <ul className="list-disc list-inside pl-2 text-gray-700">
                                    <li>전자저작물·디지털 교과서 검정 심사 총 6건 통과</li>
                                    <li>사내 라이브러리 신규 기능 제안</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pl-4 space-y-2">
                            <p className="text-gray-600">2016 ~ 2022</p>

                            <p className="font-bold">제과,제빵 생산 및 관리 </p>

                            <p className="text-gray-700">제과,제빵 생산 관리 및 팀 협업 경험</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
