import React from "react";
import { ReactComponent as Background } from "../assets/background-hero.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function Hero() {
    return (
        <div className="relative w-full h-auto overflow-hidden text-white">
            {/* Hero Background */}
            <Background
                className="w-full h-auto z-0 pointer-events-none"
                preserveAspectRatio="none"
                width={1440}
                height={704}
            />

            { /* Top Hat (logo + call to action buttons) */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-12 py-7">
                <Logo />

                <div className="flex items-center gap-6">
                    <button className="text-white font-semibold text-[14px] leading-[18px] tracking-[0.4px] cursor-pointer">
                        Sign In
                    </button>
                    <button className="bg-[#4DA8CC]/90 text-[#F5F7FE] font-semibold text-[14px] leading-[18px] tracking-[0.4px] rounded-[16px] px-5 py-3 cursor-pointer">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Center text block (overlayed) */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
                <div className="max-w-[1040px]">
                    <h1 className="absolute left-0 right-0 top-[calc(50%-36px-72px)] h-[72px] flex items-center justify-center font-poppins font-extrabold text-[53px] leading-[68px] text-center text-white m-0">
                        RemoteRecruit's Difference
                    </h1>

                    <p
                        className="
                            absolute
                            left-[11.54%]
                            right-[11.54%]
                            top-[calc(50%+44px-64px)]
                            h-[128px]
                            font-poppins
                            font-medium
                            text-[20px]
                            leading-[32px]
                            text-center
                            text-white
                            opacity-80
                            mix-blend-normal
                            px-40
                        "
                    >
                        RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.
                    </p>
                </div>
            </div>
        </div>
    );
}
