import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
// import required modules
import { Autoplay, EffectCards, FreeMode, Navigation } from "swiper"

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, FreeMode, Navigation]}
        // autoplay={{
        //   delay: 1000,
        // }}
        speed={400}
        navigation
        className="swip swip--home"
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
