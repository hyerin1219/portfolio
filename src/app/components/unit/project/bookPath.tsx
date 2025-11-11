import Link from 'next/link';

export function BookPath() {
    return (
        <div>
            <div className="font-bold text-2xl">Project_BookPath</div>
            <div className="flex flex-col gap-5 mt-8">
                {/* 소개 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">소개</p>

                    <div>읽은 책을 선택해 점수를 매기고, 나만의 독후감을 작성할 수 있는 플렛폼을 제작했습니다.</div>
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
                        <p>3.내가 쓴 독후감 모아 보기</p>
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
                            <p>1. 메인 화면</p>
                        </div>

                        <div className="w-[100%] md:w-[48%] ">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img03.png" alt="" />
                            <p>2. naver 검색 api를 통해 책 검색</p>
                            <p>3. 페이지네이션</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img04.png" alt="" />
                            <p>4. 책 클릭 시 책 정보 모달</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img01.png" alt="" />
                            <p>5. 독후감 등록, 수정, 삭제</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img02.png" alt="" />
                            <p>6. 내가 등록한 독후감 보기</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img05.png" alt="" />
                            <p>7. 전체 책갈피 모임 / 내가 가입한 책갈피 모임 탭으로 구분</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img06.png" alt="" />
                            <p>8. 책갈피 모임 등록</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block shadow-[2px_2px_6px_rgba(0,0,0,0.3)] mb-1" src="/image/book_path/img07.png" alt="" />
                            <p>9. 책갈피 모임 게시글 등록, 수정, 삭제</p>
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
                            <p>→ 키워드로 검색했을 때 전체 검색 결과 수는 정상적으로 표시되지만, 그 이후 페이지들로 이동해도 첫 검색 결과만 계속 렌더링되는 문제 </p>
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
                        <p>- 책갈피 모임에 댓글 기능 추가 예정</p>
                        <p>- firebase function을 이용해 배포</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
