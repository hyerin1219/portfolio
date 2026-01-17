export default function CharBox() {
    return (
        <div className="flex flex-col items-center justify-center w:70 h-90 bg-[#FFE7E5] rounded-t-[80px] shadow-[6px_6px_0_0_#FF7A70] p-2 sm:w-95  sm:h-115">
            <div className="relative smd:w-85 smd:h-105 w-65 h-85">
                <img className="w-full h-full object-contain absolute top-0 left-0 animate-frame1" src="/image/img_char01.png" alt="정혜린 캐릭터" />
                <img className="w-full h-full object-contain absolute top-0 left-0 animate-frame2" src="/image/img_char02.png" alt="정혜린 캐릭터" />
            </div>

            <div className="p-2 px-5 text-white text-center text-lg rounded mt-3 bg-black">정혜린</div>
        </div>
    );
}
