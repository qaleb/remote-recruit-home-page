import React from 'react';
import { ReactComponent as FeatureImage } from "../../assets/feature-02.svg";
import Badge from '../ui/Badge';
import Reveal from "../ui/Reveal";

export default function FeatureTwo() {
    return (
        <section aria-labelledby="feature-two-title" className="px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <Reveal variant="slide-left" delay={100} className="order-2 lg:order-1">
                    <FeatureImage className="w-full h-auto max-w-2xl mx-auto" preserveAspectRatio="xMidYMid meet" aria-hidden="true" />
                </Reveal>
                <Reveal variant="slide-up" className="order-1 lg:order-2 max-w-2xl mx-auto lg:mx-0 flex flex-col gap-4">
                    <Reveal as="div" variant="fade" delay={50}><Badge>Actually Fee Free</Badge></Reveal>
                    <Reveal as="h2" variant="slide-up" delay={150} id="feature-two-title" className="text-3xl sm:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] my-6 font-medium text-[#11142D]">
                        Fee-Free Forever
                    </Reveal>
                    <Reveal as="p" variant="fade" delay={250} className="text-[19px] sm:text-base md:text-lg leading-7 md:leading-8 text-[#11142D]/65">
                        We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved.
                    </Reveal>
                </Reveal>
            </div>
        </section>
    );
}
