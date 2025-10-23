import React from 'react'
import Hero from '../sections/Hero'
import FeatureOne from '../sections/FeatureOne'
import FeatureTwo from '../sections/FeatureTwo'
import FeatureThree from '../sections/FeatureThree'
import SignUpAd from '../sections/SignUpAd'
import Pricing from '../sections/Pricing'
import CommonQuestions from '../sections/CommonQuestions'
import Footer from '../sections/Footer'

export default function Home() {
    return (
        <div className="w-[1440px] mx-auto">
            <Hero />
            <FeatureOne />
            <FeatureTwo />
            <FeatureThree />
            <SignUpAd />
            <Pricing />
            <CommonQuestions />
            <Footer />
        </div>
    )
}
