import React from "react"

import { graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Dino({ data }) {
  console.log(data)
  return (
    <div>
      <StaticImage
        placeholder="blurred"
        layout="fixed"
        src="../images/deno.png"
        alt="A kitten"
      />
    </div>
  )
}

// export const queryDino = graphql`
// 	query {}
// `
