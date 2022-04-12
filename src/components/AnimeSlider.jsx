import React from "react"
import { BigHead } from "@bigheads/core"

export default function AnimeSlider({ className, children, ...props }) {
  const faces = [
    {
      accessory: "none",
      clothing: "dressShirt",
      clothingColor: "blue",
      eyes: "normal",
      graphic: "react",
    },
    {
      accessory: "shades",
      clothing: "shirt",
      clothingColor: "blue",
      eyes: "happy",
      graphic: "graphql",
    },
    {
      accessory: "none",
      clothing: "vneck",
      clothingColor: "green",
      eyes: "normal",
      graphic: "vue",
    },
    {
      accessory: "roundGlasses",
      clothing: "tankTop",
      clothingColor: "blue",
      eyes: "normal",
      graphic: "react",
    },
    {
      accessory: "shades",
      clothing: "dressShirt",
      clothingColor: "red",
      eyes: "normal",
      graphic: "react",
    },
    {
      accessory: "shades",
      clothing: "dressShirt",
      clothingColor: "blue",
      eyes: "normal",
      graphic: "none",
    },
  ]
  // for (let i of faces) {
  //   console.log(i)
  // }

  // setInterval(() => {
  //   console.log("hello")
  // }, 1000)

  React.useEffect(() => {
    // setInterval(() => {}, 1000)
  }, [])

  return (
    <div className={className}>
      {/* <video src="/clips.mp4" type="video/mp4" autoPlay loop></video> */}
      <BigHead
        mask={false}
        // faceMask={true} //boolean
        faceMaskColor="white" // blue, red, green, black
        body="chest"
        accessory="shades" // "none" "shades" "roundGlasses"
        // circleColor="blue" //
        clothing="shirt" // dressShirt, shirt, vneck, tankTop
        clothingColor="blue"
        eyebrows="concerned" // concerned, angry
        eyes="normal" // heart, normal, content, simple, happy, squint, wink
        facialHair="none" // mediumBeard
        graphic="react" // vue, graphql, none ,react
        hair="short" // bob, bob
        hairColor="brown"
        hat="none5" //none5, beanie
        hatColor="blue"
        lashes={true}
        // lipColor="purple"
        mouth="openSmile" // serious, openSmile, grin, open, tongue
        skinTone="light"
      />
    </div>
  )
}
