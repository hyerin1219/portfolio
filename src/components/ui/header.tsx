import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center border-2 p-3 h-[60px]  bg-white">
            <h1 className="md:text-3xl sm:text-xl text-lg  font-bold">
                <Link href="/">Frontend Portfolio</Link>
            </h1>

            <div className="flex md:gap-5 sm:gap-3 gap-3">
                <Link href="/aboutMe">
                    <img className="h-5 mr-1" src="/image/ico_item02.png" alt="" />
                    About
                </Link>
                <Link href="/project">
                    <img className="h-5 mr-1" src="/image/ico_item03.png" alt="" />
                    Project
                </Link>
            </div>
        </header>
    );
}
