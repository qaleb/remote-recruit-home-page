import React from 'react'
import Hero from '../components/home-sections/Hero'
import FeatureOne from '../components/home-sections/FeatureOne'
import FeatureTwo from '../components/home-sections/FeatureTwo'
import FeatureThree from '../components/home-sections/FeatureThree'
import Pricing from '../components/home-sections/Pricing'
import SignUpAd from '../components/home-sections/SignUpAd'
import CommonQuestions from '../components/home-sections/CommonQuestions'
import Footer from '../components/layout/Footer'

export default function Home() {
    return (
        <>
            <Hero />
            <div className="w-full max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-8">
                <FeatureOne />
                <FeatureTwo />
                <FeatureThree />
            </div>
            <SignUpAd />
            <div className="w-full max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-8">
                <CommonQuestions />
            </div>
            {/* Pricing pulled out to allow wider overlap positioning */}
            <Pricing />
            <Footer />
        </>
    )
}
