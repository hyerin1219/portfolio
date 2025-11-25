import HeaderBar from '@/components/ui/headerBar';

export default function AboutMe() {
    return (
        <section className="w-full">
            {/* Header bar */}
            <HeaderBar page="About" />

            {/* Body */}
            <div className="p-3 pb-5 space-y-6">
                {/* Header */}
                <div className="space-y-1">
                    <p className="text-lg font-bold">{`>  hyerin`}</p>
                    <h2 className="text-2xl font-bold">{`<hyerin/>`}</h2>
                    <p className="opacity-80">Frontend Developer 정혜린</p>
                </div>

                {/* Intro */}
                <div className="pt-4">
                    <p className="text-gray-800">{`$ whoami`}</p>
                    <p className="pl-4  text-justify pr-4"> 안녕하세요. 키보드 글자가 지워질 때까지 몰입하며 코딩하는 신입 개발자 정혜린입니다. HTML/CSS 기반 디지털 교과서 콘텐츠 제작과 유지보수 경험을 통해 UI 구현과 웹 접근성에 대한 이해를 쌓았습니다. 사내 라이브러리를 활용하고 디자이너·개발자와 협업하며 실제 프로젝트를 진행하면서 문제 해결 능력과 커뮤니케이션 역량도 길렀습니다. 이제 React와 TypeScript를 포함한 다양한 개발 기술을 활용해 사용자 친화적인 소프트웨어를 구현하며 성장하고자 합니다.</p>
                </div>

                {/* Contact */}
                <div className="space-y-1 pt-2">
                    <p className="text-gray-800">{`$ contact`}</p>
                    <div className="pl-4 space-y-1">
                        <p>TEL : 010.8337.2568</p>
                        <p>E-MAIL : gpfls662@gmail.com</p>
                    </div>
                </div>

                {/* Skill */}
                <div className="pt-4">
                    <p className="text-gray-800">{`$ skills`}</p>
                    <div className="pl-4 space-y-2">
                        <p className="flex gap-2">
                            <span className="flex-shrink-0 font-semibold">Frontend : </span> React, Next.js, TypeScript, HTML, CSS, TailwindCSS
                        </p>
                        <p>
                            <span className="flex-shrink-0 font-semibold">Tools : </span> GitHub, Figma, Firebase
                        </p>
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
                            <ul>
                                <li className="flex gap-2">
                                    <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>HTML·CSS·사내 라이브러리를 활용한 콘텐츠 제작 및 유지보수
                                </li>
                                <li className="flex gap-2">
                                    <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>양산용 프로토타입 제작
                                </li>
                                <li className="flex gap-2">
                                    <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>웹 접근성(WAI-ARIA 속성, 키보드 네비게이션, 대체 텍스트) 고려한 마크업
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium">[성과]</p>
                            <ul>
                                <li className="flex gap-2">
                                    <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>전자저작물·디지털 교과서 검정 심사 총 6건 통과
                                </li>
                                <li className="flex gap-2">
                                    <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>사내 라이브러리 신규 기능 제안
                                </li>
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
        </section>
    );
}
