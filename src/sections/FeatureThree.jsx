import React from 'react';
import { ReactComponent as FeatureImage } from "../assets/feature-03.svg";

export default function FeatureThree() {
    return (
        <section
            aria-labelledby="feature-one-title"
            className="px-6 md:px-36 mt-6 md:mt-12"
        >
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">
                <div className="relative max-w-[500px] h-[387px] flex flex-col justify-center">
                    <span className="inline-block bg-[#C2EEFF] rounded-[18px] px-4 py-2 text-[12px] leading-[15px] font-semibold tracking-[0.4px] text-[#11142D] opacity-80">
                        Global Reach
                    </span>

                    <h2 id="feature-one-title" className="mt-4 text-[40px] leading-[52px] font-medium text-[#11142D]">
                        The First Fully Global Job Board, Anywhere, Ever
                    </h2>

                    <p className="mt-4 text-[19px] leading-[35px] text-[rgba(17,20,45,0.642764)] max-w-prose">
                        RemoteRecruit connects candidates with opportunities around the world. With today's remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.
                    </p>
                </div>

                <FeatureImage className="w-full h-auto" preserveAspectRatio="none" />
            </div>
        </section>
    );
}
