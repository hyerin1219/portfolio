import Link from 'next/link';

export function H_Market() {
    return (
        <div>
            <div className="font-bold text-2xl">Project_H_Market</div>
            <div className="flex flex-col gap-5 mt-8">
                {/* 소개 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">소개</p>

                    <div>자유롭게 글을 작성할 수 있는 자유 게시판과 중고 물품을 사고팔 수 있는 중고 거래 플랫폼을 제작했습니다.</div>
                </div>
                {/* 기간 / 인원 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">기간 / 인원</p>

                    <div>2024. 01 ~ 2024. 12 / 1명</div>
                </div>
                {/* 기여도 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">기여도</p>

                    <div>기여 - 100%</div>
                </div>
                {/* 스킬 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">스킬</p>

                    <div className="flex items-center gap-5">
                        <img className="h-8" src="image/ico_react.png" alt="출처: figma" />
                        <img className="h-8" src="image/ico_typescript.png" alt="출처: figma" />
                        <img className="h-4" src="image/ico_nextjs_ver2.png" alt="출처: figma" />
                        <img className="h-4" src="image/ico_figma.png" alt="출처: figma" />
                    </div>
                </div>
                {/* 주요 기능 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">주요 기능</p>

                    <div>
                        <p>1.회원가입</p>
                        <p>2.자유 게시판</p>
                        <p>3.중고 거래 게시판</p>
                    </div>
                </div>
                {/* 깃 / figma */}
                <Link className="w-full min-h-[90px] p-3 bg-[#D9D9D9] rounded text-center" href="https://github.com/hyerin1219/HeY-MARKET" target="_blank">
                    <img className="h-6" src="image/ico_github.png" alt="출처: figma" />
                    <span>github 가기</span>
                </Link>

                {/* 개인 기여 내용 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">개발 내용</p>

                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="w-[100%] md:w-[48%] ">
                            <img className="w-full inline-block" src="/image/h_market/img01.png" alt="" />
                            <p>1. form을 이용한 로그인 기능</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/h_market/img04.png" alt="" />
                            <p>2. 게시물 등록, 수정, 삭제</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/h_market/img05.png" alt="" />
                            <p>3. 게시물 검색 기능</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/h_market/img02.png" alt="" />
                            <p>4. 상품 등록, 수정, 삭제</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/h_market/img06.png" alt="" />
                            <p>5. 등록된 상품 무한스크롤</p>
                        </div>
                    </div>
                </div>

                {/* 느낀점 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">느낀점</p>

                    <div>
                        <p>- 로그인 토큰같이 글로벌에서 관리 될 기능들은 초반에 설정, 정리해야겠다고 깨달음</p>
                        <p>- 기능 기반 컴포넌트 잘 분리해야겠다고 깨달음</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
