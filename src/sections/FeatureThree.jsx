import React from 'react';
import { ReactComponent as FeatureImage } from "../assets/feature-03.svg";
import Badge from '../components/Badge';

export default function FeatureThree() {
    return (
        <section aria-labelledby="feature-three-title" className="px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-1 lg:order-1 max-w-2xl mx-auto lg:mx-0 flex flex-col gap-4">
                    <Badge>Custom Profile</Badge>

                    <h2 id="feature-three-title" className="text-3xl sm:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] my-6 font-medium text-[#11142D]">
                        Showcase Your Talents
                    </h2>

                    <p className="text-[19px] sm:text-base md:text-lg leading-7 md:leading-8 text-[#11142D]/65">
                        Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.
                    </p>
                </div>

                <div className="order-2 lg:order-2">
                    <FeatureImage
                        className="w-full h-auto max-w-2xl mx-auto"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
}
