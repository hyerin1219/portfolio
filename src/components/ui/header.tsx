import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center border-2 p-3 h-[60px]">
            <h1 className="text-3xl ">Frontend portfolio</h1>

            <div className="flex gap-5">
                <Link href="./">About Me</Link>
                <Link href="./project">Project</Link>
                <Link href="./work">Work</Link>
            </div>
        </header>
    );
}
