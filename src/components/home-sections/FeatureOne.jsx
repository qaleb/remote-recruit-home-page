import React from "react";
import { ReactComponent as FeatureImage } from "../../assets/feature-01.svg";
import Badge from "../ui/Badge";
import Reveal from "../ui/Reveal";

export default function FeatureOne() {
    return (
        <section aria-labelledby="feature-one-title" className="px-4 sm:px-6 lg:px-12 xl:px-24" >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <Reveal variant="slide-up" className="order-1 lg:order-1 max-w-2xl mx-auto lg:mx-0 flex flex-col gap-4">
                    <Reveal as="div" variant="fade" delay={50}><Badge>Global Reach</Badge></Reveal>
                    <Reveal as="h2" variant="slide-up" delay={100} id="feature-one-title" className="text-3xl sm:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] my-2 md:my-6 font-medium text-[#11142D]">
                        The First Fully Global Job Board, Anywhere, Ever
                    </Reveal>
                    <Reveal as="p" variant="fade" delay={200} className="text-[19px] sm:text-base md:text-lg leading-7 md:leading-8 text-[#11142D]/65">
                        RemoteRecruit connects candidates with opportunities around the world. With today's remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.
                    </Reveal>
                </Reveal>
                <Reveal variant="slide-right" delay={150} className="order-2 lg:order-2">
                    <FeatureImage className="w-full h-auto max-w-2xl mx-auto" preserveAspectRatio="xMidYMid meet" aria-hidden="true" />
                </Reveal>
            </div>
        </section>
    );
}
