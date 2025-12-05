import Link from 'next/link';

export function Travel_diary() {
    return (
        <section className="space-y-8 text-base">
            {/* 프로젝트 제목 */}
            <h2 className="font-bold md:text-xl text-lg">{`> Team Project_Travel_Diary`}</h2>

            {/* 소개 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">소개</p>
                <p>방문할 예정이거나 다녀온 여행지를 지도에 표시하고, 날짜와 함께 여행 일기를 기록할 수 있는 서비스입니다.</p>
            </div>

            {/* 기간 / 인원 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">기간 / 인원</p>
                <p>2025. 05 ~ 2025. 08 / 팀 프로젝트(2명)</p>
            </div>

            {/* 기여도 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">기여도</p>
                <p>기획 20%, 디자인 80%, 개발 50%</p>
            </div>

            {/* URL */}
            <div className="flex flex-col items-center  md:flex-row gap-4">
                <div className="flex-1 w-full flex items-center gap-3 border-2 p-2 rounded-lg">
                    <img className="w-15" src="image/travel_diary/qr.png" alt="" />
                    <Link className="w-[calc(100%_-_80px)] p-4 bg-[#D9D9D9] rounded-md hover:bg-gray-300 transition text-center" href="https://travel-diary.hyerin.store" target="_blank">
                        <span className="font-semibold">Travel Diary 바로가기</span>
                    </Link>
                </div>
                <Link className="flex-1 w-full  p-4 bg-[#D9D9D9] rounded-md hover:bg-gray-300 transition text-center" href="https://github.com/calmer-ty/travel-diary" target="_blank">
                    <img className="h-6 mr-2" src="image/ico_github.png" alt="GitHub" />
                    <span>GitHub 가기</span>
                </Link>

                <Link className="flex-1 w-full  p-4 bg-[#D9D9D9] rounded-md hover:bg-gray-300 transition text-center" href="https://www.figma.com/design/rUgWqqHylNWznqosWIqEfI/%ED%8A%B8%EB%A0%88%EB%B8%94-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC?node-id=0-1&p=f&t=Du20DGC3WrXMBmIP-0" target="_blank">
                    <img className="h-6 mr-2" src="image/ico_figma.png" alt="Figma" />
                    <span>Figma 가기</span>
                </Link>
            </div>

            {/* 스킬 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">스킬</p>
                <div className="flex flex-wrap items-center gap-4">
                    <img className="h-8" src="image/ico_react.png" alt="React" />
                    <img className="h-8" src="image/ico_typescript.png" alt="TypeScript" />
                    <img className="h-4" src="image/ico_nextjs_ver2.png" alt="Next.js" />
                    <img className="h-8" src="image/ico_tailwindcss.png" alt="TailwindCSS" />
                    <img className="h-8" src="image/ico_firebase.png" alt="Firebase" />
                    <img className="h-8" src="image/ico_figma.png" alt="Figma" />
                </div>
                <p>Next.js로 성능을 최적화하고, Firebase로 인증 및 데이터 관리를 처리했습니다. Tailwind CSS로 반응형 UI를 구현했습니다.</p>
            </div>

            {/* 주요 기능 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">주요 기능</p>
                <ul>
                    <li className="flex  gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>
                        Google map를 활용하여 여행에 관한 정보를 마커로 등록
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full"></span>
                        사용자가 작성한 여행 일기 목록 조회 및 관리 기능
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full"></span>
                        간단한 미니 게임(룰렛·주사위) 제공
                    </li>
                </ul>
            </div>

            {/* 개인 기여 내용 */}
            <div className="space-y-4">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">개발 내용</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        {
                            img: '/image/travel_diary/img_main_v2.png',
                            title: '메인 화면',
                            desc: ['useAuth 훅을 통해 로그인 여부를 확인하여, 인증이 필요한 메뉴 이동 제한', '외교부 여행 경보 제도 api를 이용하여 여행 주의 국가 데이터 출력 후 단계별 데이터 필터링', '여행지 검색창에서 입력된 검색어를 router query를 이용하여 지도 페이지로 이동한 뒤 검색어에 맞는 위치의 지도 로드 ', '경보 단계별 색상·라벨를 재사용 가능하게 구현'],
                        },
                        {
                            img: '/image/travel_diary/img07.png',
                            title: '여행 주의 국가 정보 모달',
                            desc: ['다이얼로그 컴포넌트를 이용하여 모달창 생성', '데이터가 없거나 단계가 null인 경우 필터링하여 필요한 정보를 깔끔하게 구현'],
                        },
                        {
                            img: '/image/travel_diary/img01.png',
                            title: '지도 기능',
                            desc: ['Google Maps Places API로 POI 검색학여 출력'],
                        },
                        {
                            img: '/image/travel_diary/img02.png',
                            title: '북마크(여행 일기 제목) 모달',
                            desc: ['Firebase를 사용해 북마크 데이터 관리', '여행 일기 제목 중복 검증'],
                        },
                        {
                            img: '/image/travel_diary/img06.png',
                            title: '오류 알림창',
                            desc: ['잘못된 입력값 또는 빈 데이터에 대한 오류를 재사용 가능한 커스텀 훅으로 구현'],
                        },
                        {
                            img: '/image/travel_diary/img04.png',
                            title: '주사위 굴리기',
                            desc: ['1~6 사이 랜덤 숫자 출력 기능', 'useAudio 훅과 <audio>태그를 활용해 효과음 재생', 'conic-gradient과 CSS를 활용하여 룰렛 회전 애니메이션 구현', '게임 진행 상태를 관리하여 UI변화를 명확히 표현'],
                        },
                        {
                            img: '/image/travel_diary/img05.png',
                            title: '룰렛 돌리기',
                            desc: ['랜덤 데이터 출력', '룰렛 아이템 중복 입력 검증', 'Framer Motion을 활용해 주사위 등장 시 자연스러운 애니메이션 적용', 'useAudio 훅과 <audio>태그를 활용해 효과음 재생', '아이템 추가/삭제 기능 제공, 룰렛 회전 중 인터랙션 제한으로 UX 안정화'],
                        },
                    ].map((item, i) => (
                        <div key={i}>
                            <img className="w-full mb-2 rounded-md shadow-[2px_2px_6px_rgba(0,0,0,0.3)]" src={item.img} alt={item.title} />
                            <p className="font-bold md:text-xl text-lg mb-1">{item.title}</p>

                            <ul className="space-y-1">
                                {item.desc.map((el, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>
                                        {el}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* 오류 해결 */}
            <div className="space-y-4">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">오류 해결</p>

                <div>
                    <p>
                        <span className="font-semibold">오류 1</span> : 여행 일기 제목 동시 변경 문제
                    </p>
                    <p>
                        <span className="font-semibold">현상</span> : 여행 일기 제목이 동시에 변경되는 현상
                    </p>
                    <p>
                        <span className="font-semibold">해결</span> : 여행 일기 제목 데이터 구조를 분리하고, 조건 분기 처리를 추가하여 UI 동기화 문제 해결
                    </p>
                </div>

                <div>
                    <p>
                        <span className="font-semibold">오류 2</span> : Git 브랜치 충돌 문제
                    </p>
                    <p>
                        <span className="font-semibold">현상</span> : 로컬에서 pull 없이 작업 후 push하여 발생한 충돌
                    </p>
                    <p>
                        <span className="font-semibold">해결</span> : 브랜치 버전을 되돌리고 재정리하여 문제 해결
                    </p>
                </div>
            </div>

            {/* 사용자 피드백 반영 내용 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">사용자 피드백 반영 내용</p>
                <div className="flex items-center justify-between">
                    <img className="w-[47%] mb-2 rounded-md shadow-[2px_2px_6px_rgba(0,0,0,0.3)]" src="/image/travel_diary/img_main.png" alt="메인 화면 변경 전" />
                    <span className="text-2xl">➡︎</span>
                    <img className="w-[47%] mb-2 rounded-md shadow-[2px_2px_6px_rgba(0,0,0,0.3)]" src="/image/travel_diary/img_main_v2.png" alt="메인 화면 변경 후" />
                </div>
                <ul>
                    <li className="flex gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>
                        사용자 경험을 고려한 직관적인 UI 구조로 전면 재정비
                    </li>
                    <li className="flex gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>
                        브랜드 가독성을 높이기 위한 로고 리디자인 작업 수행
                    </li>
                    <li className="flex gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>
                        주요 기능을 한눈에 파악할 수 있도록 전체 메뉴 구조
                    </li>
                    <li className="flex  gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full md:mt-3 mt-2"></span>
                        콘텐츠 추가 — 여행 주의 국가 정보, 메인 페이지 여행지 검색 기능 등 제공
                    </li>
                </ul>
            </div>

            {/* 느낀점 */}
            <div className="space-y-4">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg ">느낀점</p>
                <ul>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full "></span>리팩토링 과정에서 로직 분리와 상태 관리의 중요성을 깨달음
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full "></span>공통 로직을 Hook으로 관리하니 유지보수성과 재사용성이 크게 향상됨
                    </li>
                </ul>
            </div>
        </section>
    );
}
