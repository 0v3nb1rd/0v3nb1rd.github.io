import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
// import required modules
import { EffectCards } from "swiper"

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="img-box">
            <img src="/img/portfolio/arkcryo.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-box">
            <img src="/img/portfolio/appteka.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-box">
            <img src="/img/portfolio/nadiyaClinik.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-box">
            <img src="/img/portfolio/arkcryo.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-box">
            <img src="/img/portfolio/appteka.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-box">
            <img src="/img/portfolio/nadiyaClinik.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-box">
            <img src="/img/portfolio/arkcryo.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-box">
            <img src="/img/portfolio/appteka.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-box">
            <img src="/img/portfolio/nadiyaClinik.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
