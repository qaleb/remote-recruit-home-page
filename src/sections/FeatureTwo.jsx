import React from 'react';
import { ReactComponent as FeatureImage } from "../assets/feature-02.svg";

export default function FeatureTwo() {
    return (
        <section
            aria-labelledby="feature-two-title"
            className="px-6 md:px-36 mt-6 md:mt-12"
        >
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">
                <FeatureImage className="w-full h-auto" preserveAspectRatio="none" />

                <div className="relative max-w-[500px] h-[387px] flex flex-col justify-center">
                    <span className="inline-block bg-[#C2EEFF] rounded-[18px] px-4 py-2 text-[12px] leading-[15px] font-semibold tracking-[0.4px] text-[#11142D] opacity-80">
                        Actually Fee Free
                    </span>

                    <h2 id="feature-two-title" className="mt-4 text-[40px] leading-[52px] font-medium text-[#11142D]">
                        Fee-Free Forever
                    </h2>

                    <p className="mt-4 text-[19px] leading-[35px] text-[rgba(17,20,45,0.642764)] max-w-prose">
                        We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.
                    </p>
                </div>
            </div>
        </section>
    );
}
