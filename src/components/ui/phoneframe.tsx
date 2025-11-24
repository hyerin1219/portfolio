import { ReactNode } from 'react';

interface IPhoneFrameProps {
    children: ReactNode;
}

export default function PhoneFrame({ children }: IPhoneFrameProps) {
    return (
        <div className="size-full border-5 rounded-4xl p-5 ">
            <div className="w-[200px] h-[50px] rounded-4xl bg-black mx-auto mb-5"></div>
            <div>{children}</div>
        </div>
    );
}
