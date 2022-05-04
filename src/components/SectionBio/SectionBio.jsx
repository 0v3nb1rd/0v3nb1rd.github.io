import React from 'react'
import { motion } from 'framer-motion'

const m_projSlider = {
  hide: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
  },
}
const m_projText = {
  hide: { opacity: 0, x: 100 },
  show: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.4 },
  }),
}
const m_top = {
  hide: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
}

export const SectionBio = () => {
  return (
    <section>
      <div className="bg-neutral text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <motion.div
            variants={m_projSlider}
            initial="hide"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col w-full sticky md:top-1/4 lg:w-1/3 mt-2 md:mt-12 px-8"
          >
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">
              Working Experience
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              My own experiance
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here’s my experiance timeline. By the way, I know how to combine
              work with life.
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="ml-0 md:ml-12 lg:w-2/3 sticky"
          >
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-4 rounded-3xl	border-yellow-300 absolute h-full"></div>
                <div className="border-4 rounded-3xl border-yellow-300 absolute h-full "></div>

                <div>
                  <motion.div
                    variants={m_projText}
                    custom={0}
                    className="mb-8 ml-10 flex justify-between flex-row-reverse items-center w-full left-timeline"
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="text-base text-yellow-300">October, 2020</p>
                      <a
                        href="#"
                        className="flex mb-3 font-bold text-lg md:text-2xl"
                      >
                        <img
                          className="w-40 ml-auto"
                          src="/img/logo_asign.png"
                          alt="asigh logo"
                        />
                      </a>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Asign - web studio that creates websites and modern
                        landings with smooth animation
                      </p>
                      <p className="mt-2">
                        <span className="text-red-500">Stack:</span> HTML,
                        CSS/LESS, JQUERY, JS/ES6, NPM, PHP, LARAVEL, GIT
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={m_projText}
                    custom={1}
                    className="mb-8 flex justify-between items-center w-full right-timeline"
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">
                        6-9 May, 2018
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Freelance
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Work as a web muster, full-stack developer
                        freelancehunt.com
                      </p>
                      <p className="mt-2">
                        <span className="text-red-500">Stack:</span> HTML,
                        CSS/SCSS, JS/ES6, NODE, REACT/REDUX, EXPRESS, SEO
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={m_projText}
                    custom={3}
                    className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        10 May, 2017
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        SEO Link builder
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Created SEO-links and published on forums to increase
                        the ranking of sites, work with rozetka.ua and
                        hotline.ua
                      </p>
                      <p className="mt-2">
                        <span className="text-red-500">Stack:</span> HTML, SEO
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={m_projText}
                    custom={4}
                    className="mb-8 flex justify-between items-center w-full right-timeline"
                  >
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">
                        12 May, 2016
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Self projects
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Create landing-pages, support landing, sales{' '}
                      </p>
                      <p className="mt-2">
                        <span className="text-red-500">Stack: </span>
                        WORDPRESS, OPENCART, HTML, CSS/SCSS, JS, NPM, GULP, SEO
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <motion.img
                variants={m_top}
                initial="hide"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <svg
        className="w-full h-auto"
        width="1440"
        height="54"
        viewBox="0 0 1440 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 32.0001L120 37.3001C240 43.0001 480 53.0001 720 53.3C960 53.0001 1200 43.0001 1320 37.3001L1440 32.0001V6.10352e-05H1320C1200 6.10352e-05 960 6.10352e-05 720 6.10352e-05C480 6.10352e-05 240 6.10352e-05 120 6.10352e-05H0V32.0001Z"
          fill="#3D4451"
        />
      </svg>
    </section>
  )
}
