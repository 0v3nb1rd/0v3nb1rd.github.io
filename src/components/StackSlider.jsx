import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper'

export const StackSlider = (props) => {
  return (
    <Swiper
      className="swipere__brands"
      modules={[Autoplay, FreeMode]}
      slidesPerView={'auto'}
      loop={true}
      freeMode={true}
      speed={4000}
      // centeredSlides={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        waitForTransition: true,
        autoplayStopOnLast: true,
      }}
      // slidesPerView={7}
    >
      {props.stack.map((itm, idx) => (
        <SwiperSlide key={props.id + '_' + idx}>
          <li className="logo flex max-w-[25px] h-[25px]">
            <img
              className="m-auto w-full max-h-full h-auto"
              src={stackData[itm]}
              alt="portfolio"
            />
          </li>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const stackData = {
  //Asign stack:
  html: '/img/skills/icon_html.svg',
  less: '/img/skills/icon_less.svg',
  // scss: '/img/skills/icon_less.svg',
  bootstrap: '/img/skills/icon_bootstrap.svg',
  js: '/img/skills/icon_js.svg',
  jquery: '/img/skills/icon_jquery.svg',
  slick: '/img/skills/icon_slick.png',
  anime: '/img/skills/icon_anime.svg',
  gsap: '/img/skills/icon_gsap.svg',
  php: '/img/skills/icon_php.svg',
  git: '/img/skills/icon_git.svg',
  eegnith: '/img/skills/icon_eegnith.svg',

  react: '/img/skills/icon_react.svg',
  redux: '/img/skills/icon_redux.svg',
  gulp: '/img/skills/icon_gulp.svg',
  // vue: '/img/skills/icon_gulp.svg',
  // nuxt: '/img/skills/icon_gulp.svg',
  // vuetify: '/img/skills/icon_gulp.svg',
  // heroku: '/img/skills/icon_gulp.svg',
  // api: '/img/skills/icon_gulp.svg',
}
