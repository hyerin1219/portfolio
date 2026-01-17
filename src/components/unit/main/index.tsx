import CharBox from '@/components/ui/charBox';
import Link from 'next/link';

export default function Main() {
    return (
        <section className="w-full md:h-full h-auto">
            <div className="flex flex-col items-center justify-center w-full h-full  md:gap-20 gap-10 w-full md:flex-row">
                {/* 캐릭터 영역 */}
                <CharBox />

                {/* 텍스트 영역 */}
                <div className="w-full md:w-130">
                    <div className="w-full border-3 rounded-xl shadow-xl p-5 space-y-5">
                        {/* Title Box */}
                        <div className="flex items-center justify-center gap-3 p-2 bg-[#FFE38F] rounded-xl text-xl shadow-[3px_3px_0_0_#FFC824]">
                            <img className="w-8" src="/image/ico_item01.png" alt="캐릭터 정보 아이콘" />
                            <span>캐릭터 정보</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold">이름</span>
                            <p className="flex-1 px-3 py-2 border border-2 border-[#5A4630] rounded-lg  text-[#5A4630]">정혜린</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold">레벨</span>
                            <p className="flex-1 px-3 py-2 border border-2 border-[#5A4630] rounded-lg  text-[#5A4630]">Lv.1</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold">전직</span>
                            <p className="relative flex-1 px-3 py-2 border border-2 border-[#5A4630] rounded-lg  text-[#5A4630]">
                                프론트엔드 개발자
                                <span
                                    className="absolute top-3 right-5 w-0 h-0 
                                    border-l-[10px] border-l-transparent
                                    border-r-[10px] border-r-transparent
                                    border-t-[15px] border-t-[#5A4630]"
                                ></span>
                            </p>
                        </div>

                        <div className="flex  gap-3">
                            <span className="flex-shrink-0 text-lg font-semibold">스킬</span>
                            <p className="flex-1 px-3 py-2 border border-2 border-[#5A4630] rounded-lg  text-[#5A4630]">React TypeScript Next.js TailwindCSS HTML CSS Firebase Figma</p>
                        </div>
                    </div>

                    {/* 버튼 */}
                    <div className="flex justify-center flex-wrap sm:gap-5 gap-2 mt-8">
                        <Link href="/aboutMe" className="flex items-center justify-center sm:gap-2 gap-1 p-2 px-4 bg-[#C5DFFF] rounded-xl shadow-[3px_3px_0_0_#A9D8FF] hover:shadow-[5px_5px_0_0_#A9D8FF] transition-all">
                            <img className="md:h-8 sm:h-5 h-4" src="/image/ico_item07.png" alt="About 메뉴 아이콘" />
                            <span> About</span>
                        </Link>

                        <Link href="/project" className="flex items-center justify-center sm:gap-2 gap-1 p-2 px-4 bg-[#C5DFFF] rounded-xl shadow-[3px_3px_0_0_#A9D8FF] hover:shadow-[5px_5px_0_0_#A9D8FF] transition-all">
                            <img className="md:h-12 sm:h-9 h-6" src="/image/ico_item03.png" alt="Project 메뉴 아이콘" />
                            <span> Project</span>
                        </Link>

                        <Link href="/career" className="flex items-center justify-center sm:gap-2 gap-1 p-2 px-4 bg-[#C5DFFF] rounded-xl shadow-[3px_3px_0_0_#A9D8FF] hover:shadow-[5px_5px_0_0_#A9D8FF] transition-all">
                            <img className="md:h-12 sm:h-9 h-6" src="/image/ico_item02.png" alt="Career 메뉴 아이콘" />
                            <span>Career</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
