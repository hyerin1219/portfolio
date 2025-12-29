import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center border-2 p-3 h-[60px]  bg-white">
            <h1 className="md:text-3xl sm:text-xl text-lg  font-bold hover:bg-[#5A93FF] hover:text-white">
                <Link href="/">HeyRin Portfolio</Link>
            </h1>

            <div className="flex md:gap-5 sm:gap-3 gap-1">
                <Link className="group" href="/aboutMe">
                    <img className="sm:h-5 mr-1 h-[0px]" src="/image/ico_item07.png" alt="" />
                    <span className="group-hover:bg-[#5A93FF] group-hover:text-white">About</span>
                </Link>
                <Link className="group" href="/career">
                    <img className="sm:h-5 mr-1 h-[0px]" src="/image/ico_item02.png" alt="" />
                    <span className="group-hover:bg-[#5A93FF] group-hover:text-white">Career</span>
                </Link>
                <Link className="group" href="/project">
                    <img className="sm:h-5 mr-1 h-[0px]" src="/image/ico_item03.png" alt="" />
                    <span className="group-hover:bg-[#5A93FF] group-hover:text-white">Project</span>
                </Link>
            </div>
        </header>
    );
}
