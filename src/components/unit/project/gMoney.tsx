'use client';
import Link from 'next/link';

export function GMoney() {
    return (
        <section className="space-y-8 text-base">
            {/* 프로젝트 제목 */}
            <h2 className="font-bold md:text-xl text-lg">Project_GMoney</h2>

            {/* 소개 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">소개</p>
                <p>경기지역카드 사용자가 가맹점을 검색, 조회하고, 차별 거래를 신고할 수 있는 서비스 입니다.</p>
            </div>

            {/* 기간 / 인원 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">기간 / 인원</p>
                <p>2024. 12 ~ 2025. 03 / 1명</p>
            </div>

            {/* 기여도 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">기여도</p>
                <p>기획 100%, 디자인 100%, 개발 100%</p>
            </div>

            {/* 스킬 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">스킬</p>
                <div className="flex flex-wrap items-center gap-4">
                    <img className="h-8" src="/image/ico_react.png" alt="React" />
                    <img className="h-8" src="/image/ico_typescript.png" alt="TypeScript" />
                    <img className="h-4" src="/image/ico_nextjs_ver2.png" alt="Next.js" />
                    <img className="h-8" src="/image/ico_firebase.png" alt="Firebase" />
                </div>
                <p>Next.js 기반으로 반응형 UI와 Firebase로 데이터 관리를 구현했습니다. 또한 emotion으로 스타일을 적용하였습니다.</p>
            </div>

            {/* 주요 기능 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">핵심 기능</p>
                <ul className="">
                    <li className="flex gap-2">
                        <span>•</span>
                        경기지역화폐 가맹점 현황을 지도 기반으로 시각화하여 확인,
                    </li>
                    <li className="flex gap-2">
                        <span>•</span>
                        가맹점 데이터를 카테고리별로 체계적으로 분류 및 관리
                    </li>
                    <li className="flex gap-2">
                        <span>•</span>
                        키워드 기반 검색 기능으로 특정 가맹점 정보 조회
                    </li>
                    <li className="flex gap-2">
                        <span>•</span>
                        경기지역화폐 가맹점 내 차별거래 사례 신고
                    </li>
                </ul>
            </div>

            {/* Git 링크 */}
            <div className="flex flex-col md:flex-row gap-4">
                <Link href="https://github.com/hyerin1219/gMoney" target="_blank" className="flex-1 p-4 bg-[#D9D9D9] rounded-md hover:bg-gray-300 transition text-center inline-flex items-center justify-center gap-2">
                    <img className="h-6" src="/image/ico_github.png" alt="GitHub" />
                    <span>GitHub 바로가기</span>
                </Link>
            </div>

            {/* 개발 내용 */}
            <div className="space-y-4">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">개발 내용</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        {
                            img: '/image/g_money/img_main_v2.png',
                            title: '메인 화면',
                            desc: ['메인 화면 UI 구현 및 직관적 레이아웃 설계', '지역화폐 사용처를 CSS 애니메이션으로 시각화', '핵심 기능 메뉴를 빠르게 탐색 가능'],
                        },
                        {
                            img: '/image/g_money/img02.png',
                            title: '카카오 로그인',
                            desc: ['카카오 OAuth API 연동을 통한 간편 로그인 기능 구현'],
                        },
                        {
                            img: '/image/g_money/img01.png',
                            title: '차별거래 신고',
                            desc: ['Firebase를 활용한 차별거래 신고 기능 구현', 'Daum Postcode API로 우편번호 및 주소 자동 검색', 'react-hook-form과 yup을 활용한 실시간 유효성 검증'],
                        },
                        {
                            img: '/image/g_money/img03.png',
                            title: '가맹점 리스트',
                            desc: ['입력된 키워드 기반으로 가맹점 이름 검색', 'Material-UI Select 컴포넌트를 활용한 지역 선택 기능 구현', 'Kakao Map API를 통해 선택된 가맹점 위치 마커 표시', '지역 선택 시 API 호출, 검색어 입력 시 지도와 리스트 동기화', '지역별 카테고리 생성 및 체계적 분류'],
                        },
                    ].map((item, i) => (
                        <div key={i}>
                            <img className="w-full mb-2 rounded-md shadow-[2px_2px_6px_rgba(0,0,0,0.3)]" src={item.img} alt={item.title} />
                            <p className="font-bold md:text-xl text-lg mb-1">{item.title}</p>
                            <ul className="space-y-1">
                                {item.desc.map((el, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <span>•</span>
                                        {el}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* ui 변경 내용 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">UI 디자인 개선 사항</p>

                <div className="flex items-center justify-between flex-col md:flex-row">
                    <img className="md:w-[47%] w-full mb-2 rounded-md shadow-[2px_2px_6px_rgba(0,0,0,0.3)]" src="/image/g_money/img_main.png" alt="메인 화면 변경 전" />
                    <span className="text-xl">➡︎</span>
                    <img className="md:w-[47%] w-full mb-2 rounded-md shadow-[2px_2px_6px_rgba(0,0,0,0.3)]" src="/image/g_money/img_main_v2.png" alt="메인 화면 변경 후" />
                </div>

                <ul className="space-y-1">
                    <li className="flex gap-2">
                        <span>•</span>
                        사용자 경험을 고려한 직관적 UI 구조로 전면 개선
                    </li>
                    <li className="flex gap-2">
                        <span>•</span>
                        현대적이고 깔끔한 시각 디자인 적용
                    </li>
                    <li className="flex gap-2">
                        <span>•</span>
                        지역화폐 사용 가능 매장 정보를 시각적으로 강조
                    </li>
                </ul>
            </div>

            {/* 오류 해결 */}
            <div className="space-y-4">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">오류 해결</p>

                <div className="">
                    <p>
                        <span className="font-semibold">오류 1</span> : 지도가 로드되지 않는 문제
                    </p>
                    <p>
                        <span className="font-semibold">현상</span> : 폐업된 매장에 대한 데이터 값 누락으로 인한 오류로 지도가 로드되지 않음
                    </p>
                    <p>
                        <span className="font-semibold">해결</span> : API 데이터 일부 값 누락으로 마커 생성 실패 확인 후 누락 데이터 제외
                    </p>
                </div>
                <div className="">
                    <p>
                        <span className="font-semibold">오류 2</span> : 페이지 로딩 문제
                    </p>
                    <p>
                        <span className="font-semibold">현상</span> : 페이지 처음 로딩 시 모든 API 데이터를 한 번에 불러와 초기 로딩 속도가 느림
                    </p>
                    <p>
                        <span className="font-semibold">해결</span> : 시·군별 카테고리로 데이터 분리 후 필요한 API만 호출하도록 수정
                    </p>
                </div>
            </div>

            {/* 느낀점 */}
            <div className="space-y-4">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">느낀점</p>
                <ul>
                    <li className="flex gap-2">
                        <span>•</span>데이터 로딩 최적화와 예외 처리의 중요성 체감
                    </li>
                    <li className="flex gap-2">
                        <span>•</span>사용자 경험 중심 API 설계의 중요성 체감
                    </li>
                </ul>
            </div>
        </section>
    );
}
