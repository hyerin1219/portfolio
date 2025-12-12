export default function CharBox() {
    return (
        <div className="flex flex-col items-center justify-center w-95 h-115 bg-[#FFE7E5] rounded-t-[80px] shadow-[6px_6px_0_0_#FF7A70] p-2">
            <div className="relative w-85 h-105">
                <img className="w-full h-full object-contain absolute top-0 left-0 animate-frame1" src="/image/img_char01.png" alt="" />
                <img className="w-full h-full object-contain absolute top-0 left-0 animate-frame2" src="/image/img_char02.png" alt="" />
            </div>

            <div className="p-2 px-5 text-white text-center text-lg rounded mt-3 bg-black">정혜린</div>
        </div>
    );
}
