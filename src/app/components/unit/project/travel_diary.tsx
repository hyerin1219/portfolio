import Link from 'next/link';

export function Travel_diary() {
    return (
        <div>
            <h3 className="font-bold text-2xl">Team Project_Travel_Diary</h3>
            <div className="flex flex-col gap-5 mt-8">
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">소개</p>

                    <div>방문할 예정이거나 다녀온 여행지를 지도에 표시하고, 날짜와 함께 여행 일기를 기록할 수 있습니다. 작성한 일기를 한눈에 확인할 수 있는 페이지와, 친구와 간단하게 내기를 즐길 수 있는 게임 페이지도 함께 제작했습니다.</div>
                </div>
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">기간 / 인원</p>

                    <div>2025. 05 ~ 2025. 08 / 2명</div>
                </div>
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">기여도</p>

                    <div>기획 - 20%, 디자인 - 80%, 개발 -50%</div>
                </div>
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
                <div>
                    <p className="text-[#519AD6] font-bold text-xl">주요 기능</p>

                    <div>
                        <p>1.방문할 장소 또는 다녀온 장소를 지도에 마커로 표시</p>
                        <p>2.마커에 날짜, 장소 설명, 일기 제목을 함께 저장</p>
                        <p> 3.작성한 일기를 한눈에 확인 가능</p>
                        <p>4.룰렛 돌리기 및 주사위 굴리기 게임으로 친구와 간단한 내기 가능</p>
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <Link className="relative w-[49%] min-h-[100px] bg-[#D9D9D9] rounded p-2 pt-10 text-center" href="https://github.com/calmer-ty/travel-diary" target="_blank">
                        <img className="absolute top-2 left-2 h-6" src="image/ico_github.png" alt="출처: figma" />
                        https://github.com/calmer-ty/travel-diary
                    </Link>

                    <Link className="relative w-[49%] min-h-[100px] bg-[#D9D9D9] rounded p-2 pt-10 text-center" href="https://figmashort.link/H7KYhZ" target="_blank">
                        <img className="absolute top-2 left-2 h-6" src="image/ico_figma.png" alt="출처: figma" />
                        https://figmashort.link/H7KYhZ
                    </Link>
                </div>

                <div>
                    <p className="text-[#519AD6] font-bold text-xl">개인 기여 내용</p>

                    <div>
                        <div>
                            <img src="/image/travel_diary/img_main.png" alt="" />
                            <div>1. 메인 화면</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
