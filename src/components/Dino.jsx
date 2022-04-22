import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Dino({ className }) {
  return (
    <StaticImage
      className={className}
      placeholder="blurred"
      layout="fixed"
      src="../images/deno.png"
      alt="A kitten"
    />
  )
}
