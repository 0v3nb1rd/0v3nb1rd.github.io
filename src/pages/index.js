import React from 'react'
import {
  Seo,
  SectionHero,
  SectionSlider,
  SectionBio,
  SectionStack,
} from '../components'

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <SectionHero />
      <SectionSlider />
      <SectionBio />
      <SectionStack />
    </>
  )
}
