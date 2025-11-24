'use client';
import React from 'react';

const asciiArt = '      _                            __ _            _  _     _  _                     ___      _            \n' + '   _ | |   ___     ___    _ _     / _` |    o O O | || |   | || |   ___      o O O  | _ \\    (_)    _ _    \n' + "  | || |  / -_)   / _ \\  | ' \\    \\__, |   o      | __ |    \\_, |  / -_)    o       |   /    | |   | ' \\   \n" + '  _\\__/   \\___|   \\___/  |_||_|   |___/   TS__[O] |_||_|   _|__/   \\___|   TS__[O]  |_|_\\   _|_|_  |_||_|  \n' + '_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| {======|_|"""""|_| """"|_|"""""| {======|_|"""""|_|"""""|_|"""""| \n' + "'`-0-0-''`-0-0-''`-0-0-''`-0-0-''`-0-0-'./o--000'`-0-0-''`-0-0-''`-0-0-'./o--000'`-0-0-''`-0-0-''`-0-0-'  \n";

export default function AsciiMotion() {
    return (
        <div className="w-full overflow-hidden font-bold">
            <div className="inline-block whitespace-pre font-mono text-sm leading-[14px] animate-scroll">{asciiArt}</div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-scroll {
                    display: inline-block;
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </div>
    );
}
