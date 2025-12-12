import CharBox from '@/components/ui/charBox';
import HeaderBar from '@/components/ui/headerBar';
import Link from 'next/link';

export default function Main() {
    return (
        <section className="w-full md:h-full h-auto">
            <div className="flex flex-col items-center justify-center md:gap-20 gap-10 w-full h-full md:flex-row ">
                {/* 캐릭터 영역 */}
                <CharBox />

                {/* 텍스트 영역 */}
                <div className="w-full md:w-130">
                    <div className="w-full border-3 rounded-xl shadow-xl p-5 space-y-5">
                        {/* Title Box */}
                        <div className="flex items-center justify-center gap-3 p-2 bg-[#FFE38F] rounded-xl text-xl shadow-[3px_3px_0_0_#FFC824]">
                            <img className="w-8" src="/image/ico_item01.png" alt="" />
                            <span>캐릭터 정보</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold">이름</span>
                            <p className="flex-1 px-3 py-2 border border-2 border-[#5A4630] rounded-lg  text-[#5A4630]">정혜린</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold">레벨</span>
                            <p className="flex-1 px-3 py-2 border border-2 border-[#5A4630] rounded-lg  text-[#5A4630]">Lv.0</p>
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

                        {/* <div className="text-lg font-semibold">gpfls662@gmail.com</div> */}
                    </div>

                    {/* 버튼 */}
                    <div className="flex justify-center gap-5 mt-8">
                        <Link href="/aboutMe" className="flex items-center gap-4 p-2 px-8 bg-[#C5DFFF] rounded-xl shadow-[3px_3px_0_0_#A9D8FF] hover:shadow-[5px_5px_0_0_#A9D8FF] transition-all">
                            <img className="h-12" src="/image/ico_item02.png" alt="" />
                            <span> About</span>
                        </Link>

                        <Link href="/project" className="flex items-center gap-4 p-2 px-8 bg-[#C5DFFF] rounded-xl shadow-[3px_3px_0_0_#A9D8FF] hover:shadow-[5px_5px_0_0_#A9D8FF] transition-all">
                            <img className="h-12" src="/image/ico_item03.png" alt="" />
                            <span> Project</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
