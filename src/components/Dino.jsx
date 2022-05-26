import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const Dino = ({ className }) => {
  return (
    <StaticImage
      className={className}
      placeholder="blurred"
      layout="fullWidth"
      src="../images/deno.png"
      alt="A kitten"
    />
  )
}
