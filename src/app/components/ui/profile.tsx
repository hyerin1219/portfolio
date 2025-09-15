export function Profile() {
    return (
        <div className="flex items-start justify-between mt-30 w-full">
            <img className="w-40" src="/image/img_char.png" alt="출처: figma" />

            <div className="text-lg  whitespace-pre">
                <span className="text-[#519AD6]">const</span> Profile = {'{'}
                {"\n  "}name: "정혜린",
                {"\n  "}birthday: "1996-12-19",
                {"\n  "}email: "gpfls662@gmail.com",
                {"\n  "}phone: "010-8337-2568",
                {"\n"}{' }'}
            </div>
        </div>
    )
}