export default function AboutMe() {
    return (
        <section className="w-full h-auto ">
            {/* 컨텐츠 박스 */}
            <div className="w-full  p-6 border-4  border-[#5A93FF]  bg-[#F7FAFF]  rounded-xl  shadow-[6px_6px_0_0_#A9D8FF] ">
                <div className="flex items-center justify-center gap-3 mb-6 p-3  bg-[#FFE38F] rounded-xl text-xl shadow-[3px_3px_0_0_#FFC824]">
                    <img className="h-10" src="/image/ico_item04.png" alt="모험가 아이콘" />
                    <span className="sm:text-xl font-bold text-lg text-center">프론트엔드 모험가 정혜린</span>
                </div>

                <div className="text-justify sm:text-lg mb-6 space-y-4">
                    <p>안녕하세요. 사용자 경험을 중심으로 생각하며, 키보드에서 손을 떼지 않을 때 가장 몰입하는 신입 프론트엔드 개발자 정혜린입니다.</p>
                    <p>지난 2년간 웹 퍼블리셔로 근무하며 HTML, CSS, 사내 라이브러리를 활용해 디지털 교과서 콘텐츠를 제작했습니다. 이 과정에서 재사용 가능한 컴포넌트 설계, 구조화된 레이아웃 구성, 프로젝트 일정 관리 및 팀원과의 협업 경험을 쌓았습니다.</p>
                    <p>현재는 React와 TypeScript를 중심으로 상태 관리, UI 인터랙션, 사용자 흐름을 고려한 기능 구현에 집중하며 프론트엔드 개발자로의 전환을 준비하고 있습니다. 단순히 화면을 만드는 것을 넘어, 사용자가 편리하게 사용할 수 있는 인터페이스와 안정적인 구조를 설계하는 개발자로 성장하고자 합니다.</p>
                </div>

                <div className="text-justify  mb-6 space-y-4">
                    {/* 나의 강점 */}
                    <div>
                        &#91;Key Strengths&#93;
                        <br /> - 퍼블리셔 경험 기반의 탄탄한 UI 구조 설계
                        <br />- React + TypeScript로 상태 관리와 인터랙션 구현
                        <br /> - 재사용 가능한 컴포넌트 설계에 익숙
                        <br /> - 사용자 흐름을 고려한 UX 중심 개발
                    </div>

                    {/* 스킬 */}
                    <div>
                        &#91;Skills&#93;
                        <br />- React / TypeScript : 컴포넌트 기반 UI, 타입 안정성
                        <br />- Next.js : 페이지 구조 설계, 동적 라우팅
                        <br />- Tailwind CSS : 일관된 디자인 구성
                        <br />- firebase : 일관된 디자인 구성
                        <br />- Figma : 개발을 위한 UI 제작
                    </div>
                </div>

                <div className="space-y-2">
                    <p>TEL : 010.8337.2568</p>
                    <p>EMAIL : gpfls662@gmail.com</p>
                </div>
            </div>
        </section>
    );
}
