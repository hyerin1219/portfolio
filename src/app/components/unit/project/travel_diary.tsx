import Link from 'next/link';

export function Travel_diary() {
    return (
        <div>
            <h3 className="font-bold text-2xl">Team Project_Travel_Diary</h3>
            <div className="flex flex-col gap-5 mt-8">
                {/* 소개 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">소개</p>

                    <div>방문할 예정이거나 다녀온 여행지를 지도에 표시하고, 날짜와 함께 여행 일기를 기록할 수 있습니다. 작성한 일기를 한눈에 확인할 수 있는 페이지와, 친구와 간단하게 내기를 즐길 수 있는 게임 페이지도 함께 제작했습니다.</div>
                </div>
                {/* 기간 / 인원 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">기간 / 인원</p>

                    <div>2025. 05 ~ 2025. 08 / 2명</div>
                </div>
                {/* 기여도 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">기여도</p>

                    <div>기획 - 20%, 디자인 - 80%, 개발 -50%</div>
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
                        <p>1.방문할 장소 또는 다녀온 장소를 지도에 마커로 표시</p>
                        <p>2.마커에 날짜, 장소 설명, 일기 제목을 함께 저장</p>
                        <p> 3.작성한 일기를 한눈에 확인 가능</p>
                        <p>4.룰렛 돌리기 및 주사위 굴리기 게임으로 친구와 간단한 내기 가능</p>
                    </div>
                </div>
                {/* 깃 / figma */}
                <div className="flex items-center justify-between ">
                    <Link className="w-[49%] h-[70px] md:h-[90px] p-3 bg-[#D9D9D9] rounded text-center" href="https://github.com/calmer-ty/travel-diary" target="_blank">
                        <img className="h-6" src="image/ico_github.png" alt="출처: figma" />
                        <span>github 가기</span>
                    </Link>

                    <Link className="w-[49%] h-[70px] md:h-[90px] p-3 bg-[#D9D9D9] rounded text-center" href="https://figmashort.link/H7KYhZ" target="_blank">
                        <img className="h-6" src="image/ico_figma.png" alt="출처: figma" />
                        <span>figma 가기</span>
                    </Link>
                </div>
                {/* 개인 기여 내용 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">개인 기여 내용</p>

                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="w-[100%] md:w-[48%] ">
                            <img className="w-full inline-block" src="/image/travel_diary/img_main.png" alt="" />
                            <p>1. 메인 화면</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/travel_diary/img_main.png" alt="" />
                            <p>2. 구글 지도 POI 데이터 출력</p>
                            <p>3. POI 모달창(여행 일기) form 데이터 저장, 삭제</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/travel_diary/img_main.png" alt="" />
                            <p>4. 북마크(여행 일기 제목) 모달 창</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/travel_diary/img_main.png" alt="" />
                            <p>5. 오류 알럿창</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/travel_diary/img_main.png" alt="" />
                            <p>6. 주사위 굴리기</p>
                        </div>

                        <div className="w-[100%] md:w-[48%]">
                            <img className="w-full inline-block" src="/image/travel_diary/img_main.png" alt="" />
                            <p>7. 롤렛 돌리기</p>
                        </div>
                    </div>
                </div>
                {/* 오류 해결 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">오류 해결</p>

                    {/* 오류 1 */}
                    <div>
                        <div className="font-bold">오류 1 : 여행 일기 제목 동시 변경 문제</div>

                        <div>
                            <p className="font-bold">현상</p>
                            <p>→ 여행 일기 제목을 수정하거나 등록하면, 등록된 모든 여행 일기의 제목이 동시에 바뀌는 문제 발생</p>
                        </div>

                        <div>
                            <p className="font-bold">원인</p>
                            <p>1.여행 일기 데이터 안에 제목 데이터를 함께 저장하는 로직을 분리하지 않아 UI가 꼬임</p>
                            <p>2.Firebase에는 데이터가 정상적으로 저장됐지만, UI 조건 처리 부족으로 오류 발생</p>
                        </div>

                        <div>
                            <p className="font-bold">해결</p>
                            <p>1.여행 일기 제목을 컴포넌트화하여 독립적으로 관리 </p>
                            <p>2.데이터 상태 조건 분기 적용 (데이터가 없을 때, 데이터가 있을 때, 데이터가 선택되었을 때)</p>
                            <p>→ 위 조건을 모두 적용하니 UI에 정상적으로 표시됨</p>
                        </div>
                    </div>

                    {/* 오류 2 */}
                    <div className="mt-10">
                        <div className="font-bold">오류 2 : git 브랜치 충돌 문제</div>

                        <div>
                            <p className="font-bold">현상</p>
                            <p>→ git 관리 과정에서 내용이 겹치는 충돌 발생</p>
                        </div>

                        <div>
                            <p className="font-bold">발생 과정</p>
                            <p>1.feature/calmer 작업 후 pull 없이 merge 진행</p>
                            <p>2.feature/h에서 pull 후 작업 → 내용 겹침</p>
                            <p>3.feature/h에서 reset 후 pull 시 작업 내용과 겹치는 부분 제대로 정리하지 않고 push → merge 충돌</p>
                        </div>

                        <div>
                            <p className="font-bold">해결</p>
                            <p>1.feature/calmer에서 버전 되돌린 후 merge </p>
                            <p>2.로컬에서 feature/h 브랜치 삭제 후 다시 checkout 충돌 없이 최신 버전 반영</p>
                        </div>
                    </div>
                </div>

                {/* 느낀점 */}
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">느낀점</p>

                    <div>
                        <p>- 리팩토링 과정에서 로직을 분리하고 상태를 명확히 관리하는 중요성을 깨달음</p>
                        <p>- 공통된 로직이나 여러 곳에서 쓰일 기능을 Hook으로 관리하니 편리하고 재사용성이 높아짐</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
