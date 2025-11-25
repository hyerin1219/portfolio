import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center border-2 p-3 h-[60px]">
            <h1 className="md:text-3xl sm:text-xl text-lg">
                <Link href="./">Frontend Portfolio</Link>
            </h1>

            <div className="flex md:gap-5 sm:gap-3 gap-2">
                <Link href="./aboutMe">About</Link>
                <Link href="./project">Project</Link>
            </div>
        </header>
    );
}
