import React from 'react'
import Hero from '../sections/Hero'
import FeatureOne from '../sections/FeatureOne'
import FeatureTwo from '../sections/FeatureTwo'
import FeatureThree from '../sections/FeatureThree'
import SignUpAd from '../sections/SignUpAd'
import CommonQuestions from '../sections/CommonQuestions'

export default function Home() {
    return (
        <>
            {/* Full-bleed hero section */}
            <Hero />
            {/* Constrained feature sections */}
            <div className="w-full max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-8">
                <FeatureOne />
                <FeatureTwo />
                <FeatureThree />
            </div>
            {/* Full-bleed sign up ad section */}
            <SignUpAd />
            {/* Return to constrained layout for FAQs */}
            <div className="w-full max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-8">
                <CommonQuestions />
            </div>
        </>
    )
}
