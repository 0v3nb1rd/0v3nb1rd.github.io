import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Dino() {
  return (
    <StaticImage
      className="absolute bottom-40 right-20 -z-10"
      placeholder="blurred"
      layout="fixed"
      src="../images/deno.png"
      alt="A kitten"
    />
  )
}
