import Link from 'next/link';

export function H_Market() {
    return (
        <section className="space-y-8 text-base">
            {/* 프로젝트 제목 */}
            <h2 className="font-bold md:text-xl text-lg">{`> Project_H_Market`}</h2>

            {/* 소개 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">소개</p>
                <p>자유롭게 글을 작성할 수 있는 자유 게시판과 중고 물품을 사고팔 수 있는 중고 거래 플랫폼을 제작했습니다.</p>
            </div>

            {/* 기간 / 인원 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">기간 / 인원</p>
                <p>2024. 01 ~ 2024. 12 / 1명</p>
            </div>

            {/* 기여도 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">기여도</p>
                <p>기여 100%</p>
            </div>

            {/* 스킬 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">스킬</p>
                <div className="flex flex-wrap items-center gap-4">
                    <img className="h-8" src="/image/ico_react.png" alt="React" />
                    <img className="h-8" src="/image/ico_typescript.png" alt="TypeScript" />
                    <img className="h-4" src="/image/ico_nextjs_ver2.png" alt="Next.js" />
                    <img className="h-4" src="/image/ico_figma.png" alt="Figma" />
                </div>
            </div>

            {/* 주요 기능 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">주요 기능</p>
                <ul>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full "></span>회원가입 및 로그인
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full "></span>자유 게시판 CRUD
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full "></span>중고 거래 게시판 CRUD
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full "></span>게시물 및 상품 검색
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full "></span>상품 무한스크롤
                    </li>
                </ul>
            </div>

            {/* Git 링크 */}
            <div className="flex gap-4">
                <Link href="https://github.com/hyerin1219/HeY-MARKET" target="_blank" className="flex-1 p-4 bg-[#D9D9D9] rounded-md hover:bg-gray-300 transition text-center flex items-center justify-center gap-2">
                    <img className="h-6" src="/image/ico_github.png" alt="GitHub" />
                    <span>GitHub 바로가기</span>
                </Link>
            </div>

            {/* 개발 내용 */}
            <div className="space-y-4">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">개발 내용</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { img: '/image/h_market/img01.png', title: '로그인 기능', desc: ['form을 이용한 로그인 기능 구현'] },
                        { img: '/image/h_market/img04.png', title: '게시물 CRUD', desc: ['게시물 등록, 수정, 삭제 기능 구현'] },
                        { img: '/image/h_market/img05.png', title: '게시물 검색', desc: ['게시물 검색 기능 구현'] },
                        { img: '/image/h_market/img02.png', title: '상품 CRUD', desc: ['상품 등록, 수정, 삭제 기능 구현'] },
                        { img: '/image/h_market/img06.png', title: '상품 리스트', desc: ['등록된 상품 무한스크롤 구현'] },
                    ].map((item, i) => (
                        <div key={i}>
                            <img className="w-full mb-2 rounded-md shadow-[2px_2px_6px_rgba(0,0,0,0.3)]" src={item.img} alt={item.title} />
                            <p className="font-bold md:text-lg mb-1">{item.title}</p>
                            <ul className="space-y-1">
                                {item.desc.map((el, idx) => (
                                    <li className="flex gap-2" key={idx}>
                                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full mt-2"></span>
                                        {el}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* 느낀점 */}
            <div className="space-y-2">
                <p className="text-[#519AD6] font-bold md:text-xl text-lg">느낀점</p>
                <ul>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full "></span>로그인 토큰처럼 글로벌 상태로 관리할 기능은 초반 설계 필요성을 체감
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="flex-shrink-0 inline-block w-[4px] h-[4px] bg-black rounded-full "></span>기능 단위 컴포넌트 분리의 중요성을 깨달음
                    </li>
                </ul>
            </div>
        </section>
    );
}
