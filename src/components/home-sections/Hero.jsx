import React from "react";
import logo from "../../assets/logo.svg";
import background from "../../assets/background-hero.svg";
import Reveal from "../ui/Reveal";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="w-full mx-auto">
                {/* Top Hat - Logo and CTA Buttons */}
                <Reveal variant="fade" delay={50} className="flex items-center justify-between px-4 md:px-12 py-6 md:py-8">
                    <img src={logo} alt="RemoteRecruit logo" className="w-24 md:w-32 h-auto" />
                    <div className="flex items-center gap-4 md:gap-6">
                        <a href="/signin" className="text-[#F5F7FE] font-semibold text-sm transition-colors duration-200 hover:text-blue-300">
                            Sign In
                        </a>
                        <a href="/signup" className="bg-[#4DA8CC]/90 text-[#F5F7FE] font-semibold text-sm rounded-2xl px-4 md:px-5 py-2.5 md:py-3 transition-colors duration-200 hover:bg-blue-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                            Sign Up
                        </a>
                    </div>
                </Reveal>

                {/* Hero text */}
                <div className="flex flex-col items-center justify-center mt-16 md:mt-32 lg:mt-44 px-4">
                    <Reveal as="h1" variant="slide-up" delay={100} className="max-w-4xl mx-auto text-3xl md:text-[53px] leading-tight md:leading-[68px] font-bold text-center text-white">
                        RemoteRecruit's Difference
                    </Reveal>
                    <Reveal as="p" variant="fade" delay={250} className="max-w-[800px] mt-6 md:mt-8 mx-auto text-base md:text-[20px] leading-relaxed md:leading-[32px] font-medium text-center text-white/80">
                        RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
