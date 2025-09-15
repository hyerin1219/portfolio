import { useState, useEffect } from "react";

export function AboutMe() {
    const text = "Hi, I'm 혜린";
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);


    // 한글 자씩 나오기
    useEffect(() => {
        let index = 0;

        const type = () => {
            if (index < text.length) {
                const char = text.charAt(index); // 한 글자 가져오기
                setDisplayedText((prev) => prev + char);
                index++;
                const delay = 100 + Math.random() * 200;
                setTimeout(type, delay);
            }
        };

        type();
    }, []);

    // 커서 깜박이기
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div>
            <p className="text-5xl w-full">
                {displayedText}
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} inline-block`}>
                    |
                </span>
            </p>

        </div>
    )
}