import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center border-2 p-3 h-[60px]">
            <h1 className="md:text-3xl sm:text-xl text-lg">Frontend portfolio</h1>

            <div className="flex md:gap-5 sm:gap-3 gap-2">
                <Link href="./">About</Link>
                <Link href="./project">Project</Link>
                {/* <Link href="./work">Work</Link> */}
            </div>
        </header>
    );
}
