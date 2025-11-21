import Link from 'next/link';

export function BookPath() {
    return (
        <div>
            <div className="font-bold text-2xl">Project_BookPath</div>
            <div className="flex flex-col gap-5 mt-8">
                {/* 소개 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">소개</p>

                    <div>읽은 책을 선택하고 평가하며 독후감을 작성할 수 있고, 독서 모임을 생성하여 생각을 공유할 수 있는 플랫폼을 반응형으로 제작했습니다.</div>
                </div>
                {/* 기간 / 인원 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">기간 / 인원</p>

                    <div>2025. 09 ~ 2025. 10 / 1명</div>
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
                        <img className="h-8" src="image/ico_tailwindcss.png" alt="출처: figma" />
                        <img className="h-8" src="image/ico_firebase.png" alt="출처: figma" />
                        <img className="h-8" src="image/ico_figma.png" alt="출처: figma" />
                    </div>
                </div>
                {/* 주요 기능 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">주요 기능</p>

                    <div>
                        <p>1.책 검색 기능</p>
                        <p>2.독후감 등록, 수정, 삭제 기능 </p>
                        <p>3.내가 작성한 독후감 모아보기</p>
                        <p>4.책갈피 모임 생성 · 가입 · 게시글 작성</p>
                    </div>
                </div>
                {/* 깃 / figma */}
                <div className="flex items-center justify-between ">
                    <Link className="w-[49%] h-[70px] min-h-[90px] p-3 bg-[#D9D9D9] rounded text-center" href="https://github.com/hyerin1219/bookPath" target="_blank">
                        <img className="h-6" src="image/ico_github.png" alt="출처: figma" />
                        <span>github 가기</span>
                    </Link>

                    <Link className="w-[49%] h-[70px] min-h-[90px] p-3 bg-[#D9D9D9] rounded text-center" href="https://figmashort.link/wx6mfH" target="_blank">
                        <img className="h-6" src="image/ico_figma.png" alt="출처: figma" />
                        <span>figma 가기</span>
                    </Link>
                </div>

                {/* 개인 기여 내용 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">개발 내용</p>

                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="w-[100%] md:w-[48%] ">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img_main.png" alt="" />
                            <p className="font-bold">1. 메인 화면</p>
                            <ul>
                                <li>최신 등록 기준 '오늘의 책 5권 추천' 기능 슬라이드로 구현</li>
                            </ul>
                        </div>

                        <div className="w-[100%] md:w-[48%] ">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img03.png" alt="" />
                            <p className="font-bold">2. 검색 기능</p>

                            <ul>
                                <li>네이버 검색 API 연동</li>
                                <li>페이지네이션 구현</li>
                                <li>작가, 제목 등 키워드로 검색 가능</li>
                            </ul>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img04.png" alt="" />
                            <p className="font-bold">3. 책 정보 모달</p>
                            <ul>
                                <li>독후감 작성 및 상세 페이지로 이동 가능</li>
                            </ul>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img01.png" alt="" />
                            <p className="font-bold">4. 독후감 CRUD 기능</p>
                            <ul>
                                <li>Firebase Storage에 저장</li>
                                <li>Google 로그인 기반 유저 인증</li>
                                <li>react-hook-form 입력값 유효성 검사</li>
                            </ul>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img02.png" alt="" />
                            <p className="font-bold">5. 내가 작성한 독후감 보기</p>

                            <ul>
                                <li>Google 로그인 기반 개인 데이터 조회</li>
                                <li>독후감 상세 페이지 이동</li>
                            </ul>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img05.png" alt="" />
                            <p className="font-bold">6. 책갈피 모임</p>

                            <ul>
                                <li>Google 로그인 기반 유저 인증</li>
                                <li>전체 / 내가 가입한 모임 탭 분리</li>
                                <li>members 배열 구조 기반 필터링</li>
                            </ul>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img06.png" alt="" />
                            <p className="font-bold">7. 책갈피 모임 기능</p>

                            <ul>
                                <li>모임 생성 및 비밀번호 기반 가입</li>
                            </ul>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img07.png" alt="" />
                            <p className="font-bold">9. 책갈피 모임 게시글 CRUD 기능</p>

                            <ul>
                                <li>Firebase Storage에 저장</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 오류 해결 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">오류 해결</p>

                    {/* 오류 1 */}
                    <div>
                        <div className="font-bold">오류 1 : 도서 검색 문제</div>

                        <div>
                            <p className="font-bold">현상</p>
                            <p>키워드로 검색했을 때 전체 검색 결과 수는 정상적으로 표시되지만, 그 이후 페이지들로 이동해도 첫 검색 결과만 계속 렌더링되는 문제 </p>
                        </div>

                        <div>
                            <p className="font-bold">원인</p>
                            <p>검색 위치를 전달하는 파라미터가 누락</p>
                        </div>

                        <div>
                            <p className="font-bold">해결</p>
                            <p>검색 위치를 전달하는 파라미터를 추가하여 각 페이지에 맞는 검색 결과를 정상적으로 렌더링되도록 수정</p>
                        </div>
                    </div>
                </div>

                {/* 느낀점 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">향후 계획</p>

                    <div>
                        <p>- 책갈피 모임 댓글 기능 추가 예정</p>
                        <p>- Firebase Functions을 이용해 배포</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
