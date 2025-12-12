import AsciiMotion from './ascii';

export default function Footer() {
    return (
        <footer className="border-2 p-3 h-[75px]  bg-white">
            {/* <AsciiMotion /> */}
            <div>
                <div>JEONG HYE RIN 정혜린 </div>
                <div>gpfls662@gmail.com</div>
            </div>
            <p className="sr-only">
                배경 이미지 출처 : © <a href="https://kr.123rf.com/profile_captainvector">captainvector</a>, <a href="https://www.123rf.com/free-images/">123RF Free Images</a>
            </p>
        </footer>
    );
}
