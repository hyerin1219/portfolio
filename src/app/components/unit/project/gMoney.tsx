import Link from 'next/link';

export function GMoney() {
    return (
        <div>
            <div className="font-bold text-2xl">Project_GMoney</div>
            <div className="flex flex-col gap-5 mt-8">
                {/* 소개 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">소개</p>

                    <div>경기지역카드 사용자가 가맹점을 검색하고 즐겨찾기에 등록하며, 차별 거래를 신고할 수 있는 웹사이트를 제작했습니다.</div>
                </div>
                {/* 기간 / 인원 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">기간 / 인원</p>

                    <div>2024. 12 ~ 2025. 03 / 1명</div>
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
                    </div>
                </div>
                {/* 주요 기능 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">주요 기능</p>

                    <div>
                        <p>1.경기지역화폐 가맹점 리스트 지도 확인</p>
                        <p>2.경기지역화폐 가맹점 차별거래 신고</p>
                    </div>
                </div>
                {/* 깃 / figma */}
                <div className="flex items-center justify-between ">
                    <Link className="w-full min-h-[90px] p-3 bg-[#D9D9D9] rounded text-center" href="https://github.com/hyerin1219/gMoney" target="_blank">
                        <img className="h-6" src="image/ico_github.png" alt="출처: figma" />
                        <span>github 가기</span>
                    </Link>
                </div>
                {/* 개인 기여 내용 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">개발 내용</p>

                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="w-[100%] md:w-[48%] ">
                            <img className="w-full inline-block" src="/image/travel_diary/img_main.png" alt="" />
                            <p>1. 카카오 로그인 api 사용하여 로그인 구현</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/travel_diary/img_main.png" alt="" />
                            <p>2. 차별거래 신고</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/travel_diary/img_main.png" alt="" />
                            <p>3. 경기지역화폐 가맹점 리스트</p>
                        </div>
                    </div>
                </div>
                {/* 오류 해결 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">오류 해결</p>

                    {/* 오류 1 */}
                    <div>
                        <div className="font-bold">오류 1 : 페이지 로딩 문제</div>

                        <div>
                            <p className="font-bold">현상</p>
                            <p>→ 페이지 처음 로딩 시 모든 API 데이터를 한 번에 불러와서 초기 로딩 속도가 느려짐</p>
                        </div>

                        <div>
                            <p className="font-bold">원인</p>
                            <p>모든 API 데이터를 초기에 한 번에 요청하도록 구현되어 있음</p>
                        </div>

                        <div>
                            <p className="font-bold">해결</p>
                            <p>시·군별 카테고리로 데이터를 분리하고, 사용자가 선택한 값에 따라 필요한 API만 호출하도록 수정</p>
                        </div>
                    </div>

                    {/* 오류 2 */}
                    <div className="mt-10">
                        <div className="font-bold">오류 2 : 지도가 로드되지 않는 문제</div>

                        <div>
                            <p className="font-bold">현상</p>
                            <p>→ 가맹점을 지도에 마커로 표시할 때 특정 시·군에서는 지도가 로드되지 않는 문제가 발생</p>
                        </div>

                        <div>
                            <p className="font-bold">원인</p>
                            <p>API 데이터 일부 값이 누락되어, 마커 생성 시 필수 데이터가 없어 지도 로딩이 실패</p>
                        </div>

                        <div>
                            <p className="font-bold">해결</p>
                            <p>누락된 데이터는 마커에서 제외하고, 리스트에는 정상적으로 표시되도록 수정</p>
                        </div>
                    </div>
                </div>

                {/* 느낀점 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">느낀점</p>

                    <div>
                        <p>- 데이터 로딩 최적화와 예외 처리의 중요성을 깨달음</p>
                        <p>- 사용자 경험 중심의 API 설계 중요성을 깨달음</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
