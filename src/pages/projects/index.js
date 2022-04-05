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
      <section className="hero hero-section">
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
          <SwiperSlide className="indicator">
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="m-4 portfolio__slide relative rounded-xl overflow-hidden max-h-72 h-auto min-w-[310px]">
                <img
                  class="object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col p-4 relative">
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

                <div className=" flex justify-betwean">
                  <div class="flex flex-col my-3">
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

                      <h2 class="text-lg text-gray-900 font-bold">Arkcryo</h2>
                    </div>
                    <div className="flex mt-3 items-center">
                      <p className="text-sm font-normal ">
                        Corporative site for cryodelivery company
                      </p>
                      <ul class="flex">
                        <li className="mx-2 w-8 tooltip" data-tip="show code">
                          <a class="github-link" href="htts://github.com">
                            <img src="/img/skills/icon_github.svg" alt="" />
                          </a>
                        </li>
                        <li className="mx-2 w-8 tooltip" data-tip="show site">
                          <a
                            class="github-link"
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
              </div>
              <span class="indicator-item badge badge-primary">new</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="p-4">
                <img
                  class="rounded-xl"
                  src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                  alt="Dog"
                />
              </div>
              <div class="flex justify-between p-6">
                <div class="flex items-center space-x-4">
                  <img
                    class="h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt=""
                  />
                  <h1 class="text-lg text-gray-900 font-bold">
                    Felipe Sacudon
                  </h1>
                </div>
                <div class="flex space-x-6 items-center">
                  <div class="flex space-x-2 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </span>
                    <span class="text-gray-700 font-semibold">20</span>
                  </div>
                  <div class="flex space-x-2 items-center pr-4">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-red-600 hover:text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span class="text-gray-700 font-semibold">22</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="m-4 portfolio__slide relative rounded-xl overflow-hidden">
                <img
                  class="max-h-64 w-full object-cover object-top"
                  src="/img/portfolio/arkcryo.png"
                  alt="Dog"
                />
              </div>
              <div class="flex flex-col pb-5">
                <div class="flex items-center justify-center space-x-4 my-3">
                  <img
                    class="h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt=""
                  />
                  <h2 class="text-lg text-gray-900 font-bold">Arkcryo</h2>
                </div>

                <div className="flex justify-betwean">
                  <div class="flex space-x-2 justify-between">
                    <div class="flex space-x-2 items-center justify-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                      </span>
                      <span class="text-gray-700 font-semibold">20</span>
                    </div>
                    <div class="flex space-x-2 items-center pr-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 text-red-600 hover:text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span class="text-gray-700 font-semibold">22</span>
                    </div>
                    <div class="flex space-x-2 items-center pr-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 text-red-600 hover:text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span class="text-gray-700 font-semibold">22</span>
                    </div>
                  </div>

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
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card lg:card-side bg-base-100 shadow-xl hover:scale-105 transition-all overflow-hidden ">
              <figure>
                <img
                  src="https://api.lorem.space/image/album?w=400&h=400"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card lg:card-side bg-base-100 shadow-xl hover:scale-105 transition-all overflow-hidden ">
              <figure>
                <img
                  src="https://api.lorem.space/image/album?w=400&h=400"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </Layout>
  )
}
