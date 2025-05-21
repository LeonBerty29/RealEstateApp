import React from 'react'
import { Herosection } from './hero-section'
import { FeaturesSection } from './features-section'
import { DiscoverSection } from './discover-section'
import { CallToActionSection } from './call-to-action-section'
import { FooterSection } from './footer-section'

const Landing = () => {
  return (
    <div>
        <Herosection />
        <FeaturesSection />
        <DiscoverSection />
        <CallToActionSection />
        <FooterSection />
    </div>
  )
}

export default Landing