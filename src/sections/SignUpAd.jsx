import React from 'react'
import { ReactComponent as FeatureImage } from "../assets/signup-ad.svg";

export default function SignUpAd() {
    return (
        <section className="px-6 md:px-36 py-12 md:py-24">
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">
                {/* Left: illustration */}
                <div className="w-full">
                    <FeatureImage className="w-full h-auto" preserveAspectRatio="none" />
                </div>

                {/* Right: text block + CTA — styled to match Figma */}
                <div className="relative flex flex-col justify-center">
                    <span className="text-[16px] leading-[30px] font-semibold tracking-[1px] text-[#1E3E85]">
                        Are you ready?
                    </span>

                    <h2 className="mt-4 text-[44px] leading-[57px] font-semibold text-[#11142D]">
                        Help is only a few clicks away!
                    </h2>

                    <p className="mt-6 text-[18px] leading-[33px] text-[#767784] max-w-[520px]">
                        Click Below to get set up super quickly and find help now!
                    </p>

                    <div className="mt-8">
                        <a
                            href="#get-started"
                            role="button"
                            aria-label="Get started"
                            className="inline-flex items-center w-[180px] h-[61px] rounded-[40px] bg-[#52B4DA] bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52B4DA]"
                        >
                            <span className="flex items-center justify-center ml-4 w-10 h-10 rounded-full bg-[#52B4DA]">
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M1 6h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 1l6 5-6 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>

                            <span className="ml-4 font-medium text-[16px] text-[#1E3E85]">
                                Get Started
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
