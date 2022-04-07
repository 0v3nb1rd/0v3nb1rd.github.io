import React from "react"
import Layout from "../../components/Layout"

import { Autoplay, FreeMode, Mousewheel } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
// import "swiper/css/mousewheel"

export default function Projects() {
  return (
    <Layout>
      <section className="hero ">
        <div className="container">
          <div class="flex flex-wrap justify-center -mx-4">
            <div class="w-full px-4">
              <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span class="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Recent News
                </h2>
                <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[FreeMode, Mousewheel]}
          spaceBetween={80}
          slidesPerView={4}
          // centeredSlides={true}
          loadSlides={3}
          // loop={true}
          freeMode={true}
          mousewheel={{ releaseOnEdges: true }}
          className="swiper--proj"
        >
          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="-m-4 -mb-8 portfolio__slide relative rounded-xl rounded-tr-none rounded-tl-none overflow-hidden h-80">
                <img
                  class="object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col p-4 pt-10 relative">
                <div className="absolute -top-4 py-2 left-0 right-0 w-full">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    // centeredSlides={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      waitForTransition: true,
                      autoplayStopOnLast: true,
                    }}
                    slidesPerView={5}
                  >
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_react.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_redux.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_js.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_git.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_gulp.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_less.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className=" flex items-center justify-between">
                  <div class="flex flex-col">
                    <div className="flex space-x-3">
                      <svg
                        width="39"
                        height="33"
                        viewBox="0 0 39 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.0331 5.4707L28.873 5.55737C30.7797 7.11737 32.1664 9.3707 32.6864 12.0574C32.7731 12.5774 32.8597 13.184 32.8597 13.704L35.2864 10.2374L38.6664 5.4707H33.0331Z"
                          fill="black"
                        />
                        <path
                          d="M29.4798 18.2107C29.2198 20.0307 28.6132 21.8507 27.4865 23.4974C23.5865 29.304 15.7865 30.864 9.97981 26.964C4.17314 23.064 2.61314 15.264 6.51314 9.45735C10.2398 3.82402 17.7798 2.17735 23.4998 5.64402L28.8732 5.55735C28.0065 4.60402 27.0532 3.73735 25.9265 3.04402C18.5598 -1.89598 8.50648 0.0973525 3.56648 7.55069C-1.37352 14.9174 0.619811 24.9707 8.07315 29.9107C15.4398 34.8507 25.4932 32.8574 30.4332 25.404C32.8598 21.764 33.6398 17.5174 32.8598 13.6174L29.4798 18.2107Z"
                          fill="#E7CC00"
                        />
                      </svg>

                      <h2 class="text-xxl text-gray-900 font-bold">Arkcryo</h2>
                    </div>
                    <div className="flex mt-3 items-center">
                      <p className="text-sm font-normal ">
                        Corporative site for cryodelivery company
                      </p>
                    </div>
                  </div>
                  <ul class="flex flex-col mx-2">
                    <li className="my-2 tooltip" data-tip="figma screen">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_figma.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show code">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_github.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show site">
                      <a
                        class="flex w-8 max-h-8"
                        href="htts://github.com"
                        title="visit site"
                      >
                        <img src="/img/skills/icon_chrome.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="-m-4 -mb-8 portfolio__slide relative rounded-xl rounded-tr-none rounded-tl-none overflow-hidden h-80">
                <img
                  class="object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col p-4 pt-10 relative">
                <div className="absolute -top-4 py-2 left-0 right-0 w-full">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    // centeredSlides={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      waitForTransition: true,
                      autoplayStopOnLast: true,
                    }}
                    slidesPerView={5}
                  >
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_react.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_redux.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_js.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_git.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_gulp.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_less.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className=" flex items-center justify-between">
                  <div class="flex flex-col">
                    <div className="flex space-x-3">
                      <svg
                        width="39"
                        height="33"
                        viewBox="0 0 39 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.0331 5.4707L28.873 5.55737C30.7797 7.11737 32.1664 9.3707 32.6864 12.0574C32.7731 12.5774 32.8597 13.184 32.8597 13.704L35.2864 10.2374L38.6664 5.4707H33.0331Z"
                          fill="black"
                        />
                        <path
                          d="M29.4798 18.2107C29.2198 20.0307 28.6132 21.8507 27.4865 23.4974C23.5865 29.304 15.7865 30.864 9.97981 26.964C4.17314 23.064 2.61314 15.264 6.51314 9.45735C10.2398 3.82402 17.7798 2.17735 23.4998 5.64402L28.8732 5.55735C28.0065 4.60402 27.0532 3.73735 25.9265 3.04402C18.5598 -1.89598 8.50648 0.0973525 3.56648 7.55069C-1.37352 14.9174 0.619811 24.9707 8.07315 29.9107C15.4398 34.8507 25.4932 32.8574 30.4332 25.404C32.8598 21.764 33.6398 17.5174 32.8598 13.6174L29.4798 18.2107Z"
                          fill="#E7CC00"
                        />
                      </svg>

                      <h2 class="text-xxl text-gray-900 font-bold">Arkcryo</h2>
                    </div>
                    <div className="flex mt-3 items-center">
                      <p className="text-sm font-normal ">
                        Corporative site for cryodelivery company
                      </p>
                    </div>
                  </div>
                  <ul class="flex flex-col mx-2">
                    <li className="my-2 tooltip" data-tip="figma screen">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_figma.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show code">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_github.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show site">
                      <a
                        class="flex w-8 max-h-8"
                        href="htts://github.com"
                        title="visit site"
                      >
                        <img src="/img/skills/icon_chrome.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="-m-4 -mb-8 portfolio__slide relative rounded-xl rounded-tr-none rounded-tl-none overflow-hidden h-80">
                <img
                  class="object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col p-4 pt-10 relative">
                <div className="absolute -top-4 py-2 left-0 right-0 w-full">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    // centeredSlides={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      waitForTransition: true,
                      autoplayStopOnLast: true,
                    }}
                    slidesPerView={5}
                  >
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_react.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_redux.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_js.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_git.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_gulp.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_less.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className=" flex items-center justify-between">
                  <div class="flex flex-col">
                    <div className="flex space-x-3">
                      <svg
                        width="39"
                        height="33"
                        viewBox="0 0 39 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.0331 5.4707L28.873 5.55737C30.7797 7.11737 32.1664 9.3707 32.6864 12.0574C32.7731 12.5774 32.8597 13.184 32.8597 13.704L35.2864 10.2374L38.6664 5.4707H33.0331Z"
                          fill="black"
                        />
                        <path
                          d="M29.4798 18.2107C29.2198 20.0307 28.6132 21.8507 27.4865 23.4974C23.5865 29.304 15.7865 30.864 9.97981 26.964C4.17314 23.064 2.61314 15.264 6.51314 9.45735C10.2398 3.82402 17.7798 2.17735 23.4998 5.64402L28.8732 5.55735C28.0065 4.60402 27.0532 3.73735 25.9265 3.04402C18.5598 -1.89598 8.50648 0.0973525 3.56648 7.55069C-1.37352 14.9174 0.619811 24.9707 8.07315 29.9107C15.4398 34.8507 25.4932 32.8574 30.4332 25.404C32.8598 21.764 33.6398 17.5174 32.8598 13.6174L29.4798 18.2107Z"
                          fill="#E7CC00"
                        />
                      </svg>

                      <h2 class="text-xxl text-gray-900 font-bold">Arkcryo</h2>
                    </div>
                    <div className="flex mt-3 items-center">
                      <p className="text-sm font-normal ">
                        Corporative site for cryodelivery company
                      </p>
                    </div>
                  </div>
                  <ul class="flex flex-col mx-2">
                    <li className="my-2 tooltip" data-tip="figma screen">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_figma.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show code">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_github.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show site">
                      <a
                        class="flex w-8 max-h-8"
                        href="htts://github.com"
                        title="visit site"
                      >
                        <img src="/img/skills/icon_chrome.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="-m-4 -mb-8 portfolio__slide relative rounded-xl rounded-tr-none rounded-tl-none overflow-hidden h-80">
                <img
                  class="object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col p-4 pt-10 relative">
                <div className="absolute -top-4 py-2 left-0 right-0 w-full">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    // centeredSlides={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      waitForTransition: true,
                      autoplayStopOnLast: true,
                    }}
                    slidesPerView={5}
                  >
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_react.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_redux.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_js.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_git.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_gulp.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_less.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className=" flex items-center justify-between">
                  <div class="flex flex-col">
                    <div className="flex space-x-3">
                      <svg
                        width="39"
                        height="33"
                        viewBox="0 0 39 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.0331 5.4707L28.873 5.55737C30.7797 7.11737 32.1664 9.3707 32.6864 12.0574C32.7731 12.5774 32.8597 13.184 32.8597 13.704L35.2864 10.2374L38.6664 5.4707H33.0331Z"
                          fill="black"
                        />
                        <path
                          d="M29.4798 18.2107C29.2198 20.0307 28.6132 21.8507 27.4865 23.4974C23.5865 29.304 15.7865 30.864 9.97981 26.964C4.17314 23.064 2.61314 15.264 6.51314 9.45735C10.2398 3.82402 17.7798 2.17735 23.4998 5.64402L28.8732 5.55735C28.0065 4.60402 27.0532 3.73735 25.9265 3.04402C18.5598 -1.89598 8.50648 0.0973525 3.56648 7.55069C-1.37352 14.9174 0.619811 24.9707 8.07315 29.9107C15.4398 34.8507 25.4932 32.8574 30.4332 25.404C32.8598 21.764 33.6398 17.5174 32.8598 13.6174L29.4798 18.2107Z"
                          fill="#E7CC00"
                        />
                      </svg>

                      <h2 class="text-xxl text-gray-900 font-bold">Arkcryo</h2>
                    </div>
                    <div className="flex mt-3 items-center">
                      <p className="text-sm font-normal ">
                        Corporative site for cryodelivery company
                      </p>
                    </div>
                  </div>
                  <ul class="flex flex-col mx-2">
                    <li className="my-2 tooltip" data-tip="figma screen">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_figma.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show code">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_github.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show site">
                      <a
                        class="flex w-8 max-h-8"
                        href="htts://github.com"
                        title="visit site"
                      >
                        <img src="/img/skills/icon_chrome.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="-m-4 -mb-8 portfolio__slide relative rounded-xl rounded-tr-none rounded-tl-none overflow-hidden h-80">
                <img
                  class="object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col p-4 pt-10 relative">
                <div className="absolute -top-4 py-2 left-0 right-0 w-full">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    // centeredSlides={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      waitForTransition: true,
                      autoplayStopOnLast: true,
                    }}
                    slidesPerView={5}
                  >
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_react.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_redux.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_js.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_git.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_gulp.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_less.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className=" flex items-center justify-between">
                  <div class="flex flex-col">
                    <div className="flex space-x-3">
                      <svg
                        width="39"
                        height="33"
                        viewBox="0 0 39 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.0331 5.4707L28.873 5.55737C30.7797 7.11737 32.1664 9.3707 32.6864 12.0574C32.7731 12.5774 32.8597 13.184 32.8597 13.704L35.2864 10.2374L38.6664 5.4707H33.0331Z"
                          fill="black"
                        />
                        <path
                          d="M29.4798 18.2107C29.2198 20.0307 28.6132 21.8507 27.4865 23.4974C23.5865 29.304 15.7865 30.864 9.97981 26.964C4.17314 23.064 2.61314 15.264 6.51314 9.45735C10.2398 3.82402 17.7798 2.17735 23.4998 5.64402L28.8732 5.55735C28.0065 4.60402 27.0532 3.73735 25.9265 3.04402C18.5598 -1.89598 8.50648 0.0973525 3.56648 7.55069C-1.37352 14.9174 0.619811 24.9707 8.07315 29.9107C15.4398 34.8507 25.4932 32.8574 30.4332 25.404C32.8598 21.764 33.6398 17.5174 32.8598 13.6174L29.4798 18.2107Z"
                          fill="#E7CC00"
                        />
                      </svg>

                      <h2 class="text-xxl text-gray-900 font-bold">Arkcryo</h2>
                    </div>
                    <div className="flex mt-3 items-center">
                      <p className="text-sm font-normal ">
                        Corporative site for cryodelivery company
                      </p>
                    </div>
                  </div>
                  <ul class="flex flex-col mx-2">
                    <li className="my-2 tooltip" data-tip="figma screen">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_figma.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show code">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_github.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show site">
                      <a
                        class="flex w-8 max-h-8"
                        href="htts://github.com"
                        title="visit site"
                      >
                        <img src="/img/skills/icon_chrome.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="-m-4 -mb-8 portfolio__slide relative rounded-xl rounded-tr-none rounded-tl-none overflow-hidden h-80">
                <img
                  class="object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col p-4 pt-10 relative">
                <div className="absolute -top-4 py-2 left-0 right-0 w-full">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    // centeredSlides={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      waitForTransition: true,
                      autoplayStopOnLast: true,
                    }}
                    slidesPerView={5}
                  >
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_react.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_redux.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_js.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_git.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_gulp.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_less.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className=" flex items-center justify-between">
                  <div class="flex flex-col">
                    <div className="flex space-x-3">
                      <svg
                        width="39"
                        height="33"
                        viewBox="0 0 39 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.0331 5.4707L28.873 5.55737C30.7797 7.11737 32.1664 9.3707 32.6864 12.0574C32.7731 12.5774 32.8597 13.184 32.8597 13.704L35.2864 10.2374L38.6664 5.4707H33.0331Z"
                          fill="black"
                        />
                        <path
                          d="M29.4798 18.2107C29.2198 20.0307 28.6132 21.8507 27.4865 23.4974C23.5865 29.304 15.7865 30.864 9.97981 26.964C4.17314 23.064 2.61314 15.264 6.51314 9.45735C10.2398 3.82402 17.7798 2.17735 23.4998 5.64402L28.8732 5.55735C28.0065 4.60402 27.0532 3.73735 25.9265 3.04402C18.5598 -1.89598 8.50648 0.0973525 3.56648 7.55069C-1.37352 14.9174 0.619811 24.9707 8.07315 29.9107C15.4398 34.8507 25.4932 32.8574 30.4332 25.404C32.8598 21.764 33.6398 17.5174 32.8598 13.6174L29.4798 18.2107Z"
                          fill="#E7CC00"
                        />
                      </svg>

                      <h2 class="text-xxl text-gray-900 font-bold">Arkcryo</h2>
                    </div>
                    <div className="flex mt-3 items-center">
                      <p className="text-sm font-normal ">
                        Corporative site for cryodelivery company
                      </p>
                    </div>
                  </div>
                  <ul class="flex flex-col mx-2">
                    <li className="my-2 tooltip" data-tip="figma screen">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_figma.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show code">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_github.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show site">
                      <a
                        class="flex w-8 max-h-8"
                        href="htts://github.com"
                        title="visit site"
                      >
                        <img src="/img/skills/icon_chrome.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="-m-4 -mb-8 portfolio__slide relative rounded-xl rounded-tr-none rounded-tl-none overflow-hidden h-80">
                <img
                  class="object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col p-4 pt-10 relative">
                <div className="absolute -top-4 py-2 left-0 right-0 w-full">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    // centeredSlides={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      waitForTransition: true,
                      autoplayStopOnLast: true,
                    }}
                    slidesPerView={5}
                  >
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_react.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_redux.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_js.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_git.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_gulp.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_less.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className=" flex items-center justify-between">
                  <div class="flex flex-col">
                    <div className="flex space-x-3">
                      <svg
                        width="39"
                        height="33"
                        viewBox="0 0 39 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.0331 5.4707L28.873 5.55737C30.7797 7.11737 32.1664 9.3707 32.6864 12.0574C32.7731 12.5774 32.8597 13.184 32.8597 13.704L35.2864 10.2374L38.6664 5.4707H33.0331Z"
                          fill="black"
                        />
                        <path
                          d="M29.4798 18.2107C29.2198 20.0307 28.6132 21.8507 27.4865 23.4974C23.5865 29.304 15.7865 30.864 9.97981 26.964C4.17314 23.064 2.61314 15.264 6.51314 9.45735C10.2398 3.82402 17.7798 2.17735 23.4998 5.64402L28.8732 5.55735C28.0065 4.60402 27.0532 3.73735 25.9265 3.04402C18.5598 -1.89598 8.50648 0.0973525 3.56648 7.55069C-1.37352 14.9174 0.619811 24.9707 8.07315 29.9107C15.4398 34.8507 25.4932 32.8574 30.4332 25.404C32.8598 21.764 33.6398 17.5174 32.8598 13.6174L29.4798 18.2107Z"
                          fill="#E7CC00"
                        />
                      </svg>

                      <h2 class="text-xxl text-gray-900 font-bold">Arkcryo</h2>
                    </div>
                    <div className="flex mt-3 items-center">
                      <p className="text-sm font-normal ">
                        Corporative site for cryodelivery company
                      </p>
                    </div>
                  </div>
                  <ul class="flex flex-col mx-2">
                    <li className="my-2 tooltip" data-tip="figma screen">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_figma.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show code">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_github.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show site">
                      <a
                        class="flex w-8 max-h-8"
                        href="htts://github.com"
                        title="visit site"
                      >
                        <img src="/img/skills/icon_chrome.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="-m-4 -mb-8 portfolio__slide relative rounded-xl rounded-tr-none rounded-tl-none overflow-hidden h-80">
                <img
                  class="object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col p-4 pt-10 relative">
                <div className="absolute -top-4 py-2 left-0 right-0 w-full">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    // centeredSlides={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      waitForTransition: true,
                      autoplayStopOnLast: true,
                    }}
                    slidesPerView={5}
                  >
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_react.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_redux.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_js.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_git.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_gulp.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li className="logo flex max-w-[25px] h-[25px]">
                        <img
                          className="m-auto w-full max-h-full h-auto"
                          src="/img/skills/icon_less.svg"
                          alt=""
                        />
                      </li>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className=" flex items-center justify-between">
                  <div class="flex flex-col">
                    <div className="flex space-x-3">
                      <svg
                        width="39"
                        height="33"
                        viewBox="0 0 39 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.0331 5.4707L28.873 5.55737C30.7797 7.11737 32.1664 9.3707 32.6864 12.0574C32.7731 12.5774 32.8597 13.184 32.8597 13.704L35.2864 10.2374L38.6664 5.4707H33.0331Z"
                          fill="black"
                        />
                        <path
                          d="M29.4798 18.2107C29.2198 20.0307 28.6132 21.8507 27.4865 23.4974C23.5865 29.304 15.7865 30.864 9.97981 26.964C4.17314 23.064 2.61314 15.264 6.51314 9.45735C10.2398 3.82402 17.7798 2.17735 23.4998 5.64402L28.8732 5.55735C28.0065 4.60402 27.0532 3.73735 25.9265 3.04402C18.5598 -1.89598 8.50648 0.0973525 3.56648 7.55069C-1.37352 14.9174 0.619811 24.9707 8.07315 29.9107C15.4398 34.8507 25.4932 32.8574 30.4332 25.404C32.8598 21.764 33.6398 17.5174 32.8598 13.6174L29.4798 18.2107Z"
                          fill="#E7CC00"
                        />
                      </svg>

                      <h2 class="text-xxl text-gray-900 font-bold">Arkcryo</h2>
                    </div>
                    <div className="flex mt-3 items-center">
                      <p className="text-sm font-normal ">
                        Corporative site for cryodelivery company
                      </p>
                    </div>
                  </div>
                  <ul class="flex flex-col mx-2">
                    <li className="my-2 tooltip" data-tip="figma screen">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_figma.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show code">
                      <a class="flex w-8 max-h-8" href="htts://github.com">
                        <img src="/img/skills/icon_github.svg" alt="" />
                      </a>
                    </li>
                    <li className="my-2 tooltip" data-tip="show site">
                      <a
                        class="flex w-8 max-h-8"
                        href="htts://github.com"
                        title="visit site"
                      >
                        <img src="/img/skills/icon_chrome.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </Layout>
  )
}
