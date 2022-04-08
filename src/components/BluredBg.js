import React from "react"

export default function BluredBg() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 -z-10">
        <div className="absolute top-0 overflow-visible opacity-50 dark:opacity-30 left-16">
          <div className="mix-blend-multiply absolute w-[700px] h-[900px] rounded-[40rem] circle-obj"></div>
        </div>
        <div className="absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-52">
          <div className="mix-blend-multiply absolute w-[600px] h-[600px] rounded-[40rem] circle-obj2"></div>
        </div>
      </div>
    </>
  )
}
