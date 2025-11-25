import HeaderBar from '@/components/ui/headerBar';
import Link from 'next/link';

export default function Main() {
    return (
        <section className="w-full  flex flex-col">
            <HeaderBar page="Frontend Portfolio" />

            <div className="p-3 pb-5">
                <p className="text-lg font-bold">{`> Jeong Hye Rin`}</p>

                <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-8">
                    {/* 왼쪽: 소개 */}
                    <div className="flex-1 space-y-6 text-justify">
                        <p className="text-xl md:text-2xl font-semibold text-gray-700">안녕하세요. 키보드 글자가 지워질 때까지 몰입하며 코딩하는 신입 개발자 정혜린입니다.</p>
                        <p className="text-gray-600">React, Next.js, TypeScript를 활용하여 사용자 친화적 웹을 구현하고, HTML/CSS 기반 디지털 교과서 콘텐츠 제작 경험과 사내 라이브러리 개선 경험을 보유하고 있습니다.</p>

                        {/* 링크 버튼 */}
                        <div className="flex justify-center flex-wrap gap-6">
                            <Link href="./aboutMe" className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-lg transition">
                                <img className="w-6 mr-3" src="./image/icon_folder.png" alt="" />
                                About
                            </Link>
                            <Link href="./project" className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-lg transition">
                                <img className="w-6 mr-3" src="./image/icon_folder.png" alt="" />
                                Project
                            </Link>
                        </div>
                    </div>

                    {/* 오른쪽: 프로필 사진 */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
                            <img
                                src="/image/img_char.png" // 실제 사진 경로
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
