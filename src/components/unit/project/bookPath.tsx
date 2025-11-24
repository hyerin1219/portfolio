import Link from 'next/link';

export function BookPath() {
    return (
        <section className="space-y-8  text-justify">
            {/* 프로젝트 제목 */}
            <h2 className=" font-bold text-xl">{`>  Project_BookPath`}</h2>

            {/* 소개 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold text-xl ">소개</p>
                <p>읽은 책을 선택하고 평가하며 독후감을 작성할 수 있고, 독서 모임을 생성하여 생각을 공유할 수 있는 플랫폼을 반응형으로 제작했습니다.</p>
            </div>

            {/* 기간 / 인원 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold text-xl ">기간 / 인원</p>
                <p>2025. 09 ~ 2025. 10 / 1명</p>
            </div>

            {/* 기여도 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold text-xl ">기여도</p>
                <p>기획-100% 디자인-100% 개발-100%</p>
            </div>

            {/* 스킬 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold text-xl ">스킬</p>
                <div className="flex flex-wrap items-center gap-4">
                    <img className="h-8" src="image/ico_react.png" alt="React" />
                    <img className="h-8" src="image/ico_typescript.png" alt="TypeScript" />
                    <img className="h-4" src="image/ico_nextjs_ver2.png" alt="Next.js" />
                    <img className="h-8" src="image/ico_tailwindcss.png" alt="TailwindCSS" />
                    <img className="h-8" src="image/ico_firebase.png" alt="Firebase" />
                    <img className="h-8" src="image/ico_figma.png" alt="Figma" />
                </div>
                <p>Next.js로 페이지 성능을 최적화하고, Firebase를 활용해 사용자 인증, 데이터 관리를 간편하게 구현했습니다. 또한 Tailwind CSS를 이용해 빠르고 효율적인 반응형 UI를 구현했습니다.</p>
            </div>

            {/* 주요 기능 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold text-xl ">주요 기능</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>사용자 맞춤 도서 검색 및 필터링 기능 구현</li>
                    <li>독후감 CRUD 기능 개발 및 데이터 동기화</li>
                    <li>사용자가 작성한 독후감 통합 조회 및 관리 기능 제공</li>
                    <li>독서 모임 생성, 가입, 게시글 관리 기능 설계</li>
                </ul>
            </div>

            {/* 깃 / figma */}
            <div className="flex flex-col md:flex-row gap-4">
                <Link className="flex-1 p-4 bg-[#D9D9D9] rounded-md hover:bg-gray-300 transition text-center" href="https://github.com/hyerin1219/bookPath" target="_blank">
                    <img className="h-6 mr-2" src="image/ico_github.png" alt="GitHub" />
                    <span>GitHub 가기</span>
                </Link>

                <Link className="flex-1 p-4 bg-[#D9D9D9] rounded-md hover:bg-gray-300 transition text-center" href="https://figmashort.link/wx6mfH" target="_blank">
                    <img className="h-6 mr-2" src="image/ico_figma.png" alt="Figma" />
                    <span>Figma 가기</span>
                </Link>
            </div>

            {/* 개인 기여 내용 */}
            <div className="space-y-4">
                <p className="text-[#519AD6] font-bold text-xl ">개발 내용</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 각 기능 블록 */}
                    {[
                        {
                            img: '/image/book_path/img_main.png',
                            title: '메인 화면',
                            desc: ["최신 등록 기준 '오늘의 책 추천' 기능을 React와 Embla Carousel 라이브러리를 활용한 슬라이드 컴포넌트로 구현"],
                        },
                        {
                            img: '/image/book_path/img03.png',
                            title: '검색 기능',
                            desc: ['네이버 검색 API 연동으로 실시간 도서 검색 구현', '페이지네이션을 통해 데이터 효율적 렌더링', '작가 및 제목 기반 키워드 필터링 기능 제공'],
                        },
                        {
                            img: '/image/book_path/img04.png',
                            title: '책 정보 모달',
                            desc: ['독후감 작성 페이지 이동 기능 구현 ', '책 컴포넌트화로 재사용 가능', 'Modal 컴포넌트로 구현'],
                        },
                        {
                            img: '/image/book_path/img01.png',
                            title: '독후감 CRUD 기능',
                            desc: ['Firebase를 활용한 CRUD 구현', 'Google OAuth 기반 유저 인증 처리', 'react-hook-form을 통한 입력값 유효성 검증'],
                        },
                        {
                            img: '/image/book_path/img02.png',
                            title: '내가 작성한 독후감 보기',
                            desc: ['Google 로그인 기반 유저 개인 데이터 조회 및 렌더링', '동적 라우팅 [isbn].tsx을 활용해 독후감 상세 페이지를 각 글의 고유 ID 기반으로 렌더링하도록 구현'],
                        },
                        {
                            img: '/image/book_path/img05.png',
                            title: '책갈피 모임',
                            desc: ['Google OAuth 인증 기반 모임 접근 제어', '전체/가입한 모임 탭 분리 및 상태 관리', 'members 배열 구조 기반 필터링 및 렌더링 최적화', '동적 라우팅 [id.tsx]을 활용해 책갈피 모임의 디테일 페이지를 고유의 clubId 기반으로 렌더링하도록 구현'],
                        },
                        {
                            img: '/image/book_path/img06.png',
                            title: '책갈피 모임 생성 기능',
                            desc: ['모임 생성 기능 구현 및 비밀번호 기반 접근 제어'],
                        },
                        {
                            img: '/image/book_path/img07.png',
                            title: '책갈피 모임 게시글 CRUD 기능',
                            desc: ['Firebase를 활용한 게시글 CRUD 구현', '동적 라우팅 [id].tsx을 활용해 책갈피 모임 게시글 페이지를 각 글의 고유 ID 기반으로 렌더링하도록 구현'],
                        },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-md ">
                            <img className="w-full mb-2 rounded-md shadow-[2px_2px_6px_rgba(0,0,0,0.3)]" src={item.img} alt={item.title} />
                            <p className="font-bold text-xl mb-1">{item.title}</p>
                            <ul className="space-y-1">
                                {item.desc.map((el, idx) => (
                                    <li className="flex  gap-2" key={idx}>
                                        <span className="flex-shrink-0 inline-block w-[6px] h-[6px] bg-black rounded-full mt-3"></span>
                                        {el}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* 오류 해결 / 향후 계획 */}
            <div className="space-y-4">
                <p className="text-[#519AD6] font-bold text-xl ">오류 해결</p>
                <p>키워드 검색 문제: 페이지 이동 후 첫 검색 결과만 렌더링되는 문제 → 검색 위치 파라미터 추가로 해결</p>

                {/* <ul>
                    <li>
                        <p>오류 1: 도서 검색 문제</p>
                        <p>현상 : 키워드로 검색했을 때 전체 검색 결과 수는 정상적으로 표시되지만, 그 이후 페이지들로 이동해도 첫 검색 결과만 계속 렌더링되는 문제</p>
                        <p>해결 : 검색 위치를 전달하는 파라미터가 누락이 되어 이를 추가하여 각 페이지에 맞는 검색 결과를 정상적으로 렌더링되도록 수정</p>
                    </li>
                </ul> */}

                <p className="text-[#519AD6] font-bold text-xl ">향후 계획</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>책갈피 모임 댓글 기능 추가 예정</li>
                    <li>Firebase Functions을 이용해 배포</li>
                </ul>
            </div>
        </section>
    );
}
