export default function Career() {
    return (
        <section className="w-full md:h-full h-auto">
            {/* 컨텐츠 박스 */}
            <div className=" w-full md:h-full h-auto p-6 border-4  border-[#5A93FF]  bg-[#F7FAFF]  rounded-xl  shadow-[6px_6px_0_0_#A9D8FF]">
                <div className="flex justify-center items-center gap-3 mb-6 p-3  bg-[#FFE38F] rounded-xl text-xl shadow-[3px_3px_0_0_#FFC824]">
                    <img className="h-12" src="/image/ico_item05.png" alt="" />
                    <span className="sm:text-xl font-bold text-lg text-center ">모험 기록 &#40;Career Log &#41;</span>
                </div>

                <div className="space-y-10">
                    {/* 어벤저스 */}
                    <div className="space-y-2">
                        <div className="flex items-start gap-2  flex-col sm:flex-row sm:items-center">
                            <span className="text-gray-600">2023.03 ~ 2025.06</span>
                            <span className="font-bold text-[#2857A4]"> &#40;주 &#41;어벤저스 | 주임 · 퍼블리셔</span>
                        </div>

                        <div>
                            <p className="font-semibold"> 프로젝트</p>
                            <p className="text-gray-700">YBM·천재·동아 초/중등 전자저작물, 디지털 교과서 제작</p>
                        </div>

                        <div>
                            <p className="font-semibold">역할</p>
                            <ul className="space-y-1">
                                <li>• HTML/CSS 기반 콘텐츠 제작 및 유지보수</li>
                                <li>• 양산용 프로토타입 제작</li>
                                <li>• 웹 접근성 고려&#40;WAI-ARIA, 키보드 네비게이션, 대체 텍스트 &#41;한 마크업 구조 설계</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">성과</p>
                            <ul className="space-y-1">
                                <li>• 전자저작물·디지털 교과서 검정 심사 총 6건 통과</li>
                                <li>• 신규 기능 제안을 통해 프로젝트 고도화에 기여</li>
                            </ul>
                        </div>
                    </div>

                    {/* 제과,제빵 */}
                    <div className="space-y-2">
                        <div className="flex items-start gap-2  flex-col sm:flex-row sm:items-center">
                            <span className="text-gray-600">2016 ~ 2022</span>
                            <span className="font-bold text-[#2857A4]">제과·제빵 생산 및 관리</span>
                        </div>

                        <p className="text-gray-700">생산 일정 관리와 팀 협업을 통해 책임감과 커뮤니케이션 역량을 쌓았습니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
