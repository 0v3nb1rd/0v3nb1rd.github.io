import React from 'react'
import { Layout, Slider, AnimeSlider } from '../components'
import Typewriter from 'typewriter-effect'
import { Link } from 'gatsby'
import { motion, useViewportScroll } from 'framer-motion'

const varik1 = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
      staggerChildren: 0.3,
    },
  },
}
const varik1Itm = {
  hide: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
}

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

export default function Home() {
  // const { scrollYProgress } = useViewportScroll()
  // console.log(scrollYProgress)
  return (
    <>
      <section className="section--top h-screen	flex align-center justify-center items-center relative">
        <div className="hero-content m-auto flex-col lg:flex-row-reverse">
          <motion.div
            variants={varik1}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.6,
              when: 'beforeChildren',
            }}
            exit="hide"
            className="w-2/4"
          >
            <AnimeSlider className="w-[600px] h-[600px] mx-auto" />
          </motion.div>

          <motion.div
            variants={varik1}
            initial="hide"
            animate="show"
            exit="hide"
            className="w-2/4"
          >
            <motion.h1 variants={varik1Itm} className="text-8xl font-bold">
              Hello 👋<div className="text-red-600	">I’m Nazar.</div>
            </motion.h1>
            <motion.div variants={varik1Itm} className="py-6 text-2xl type-txt">
              A modern
              <Typewriter
                options={{
                  strings: [
                    '<span class="text-red-600 text-5xl font-akaya">HTML-CSS</span> coder',
                    '<span class="text-sky text-5xl font-akaya">React.js</span> dev.',
                    '<span class="text-primary text-5xl font-akaya">Node.js</span> dev.',
                    '<span class="text-warning text-5xl font-akaya">UI/UX</span> designer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <span className="block">
                with a strong appetite for creating memorable experiences.
              </span>
            </motion.div>
            <motion.div variants={varik1Itm}>
              <label
                htmlFor="modal-contact"
                className="btn btn-accent modal-button tracking-widest text-white btn-wide"
              >
                write me
              </label>
            </motion.div>
          </motion.div>
        </div>

        <motion.svg
          className={`absolute bottom-0 right-0 w-full left-0`}
          initial={{ opacity: 0, height: 0, y: 200 }}
          animate={{ opacity: 1, height: 86, y: 0 }}
          exit={{ opacity: 0, height: 0, y: 200 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          preserveAspectRatio="none"
          viewBox="0 0 1805 99"
          // height="86px"
          width="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1805 22.5791L1751.75 36.3727C1698.5 50.4933 1592 77.6884 1485.5 74.4852C1379 71.2819 1272.5 36.242 1166 26.0438C1059.5 15.4534 953 29.7047 846.5 33.0387C740 36.242 633.5 29.8355 527 19.245C420.5 9.04687 314 -5.20443 207.5 1.92121C101 9.04686 -5.50001 36.3074 -58.75 50.3625L-112 64.1562V99H1805V22.5791Z"
            fill="rgb(253, 224, 71)"
          />
        </motion.svg>
      </section>

      <section className="min-h-screen hero bg-yellow-300 relative">
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="hero-content flex-col lg:flex-row"
        >
          <motion.div
            variants={m_projSlider}
            className="section__slider w-2/4 flex justify-center items-center"
          >
            <div className="wrap">
              <Slider />
            </div>
          </motion.div>
          <div className="w-2/4">
            <div className="w-4/5 mx-auto">
              <motion.h2
                variants={m_projText}
                custom={0}
                className="text-6xl font-bold"
              >
                Welcome To The<div className="text-red-600">Weirdos Club.</div>
              </motion.h2>
              <motion.p
                variants={m_projText}
                custom={1}
                className="py-6 text-2xl"
              >
                The WEIRDOS CLUB is a private collection of NFTs—unique digital
                collectibles. The Weirdos are stored as ERC-721 tokens on the
                Ethereum blockchain and hosted on IPFS.
              </motion.p>
              <motion.p
                variants={m_projText}
                custom={2}
                className="py-5 text-1xl"
              >
                With more than 200+ hand drawn traits, each NFT is unique and
                comes with a membership to an exclusive group of successful
                investors. Join an ambitious ever-growing community with
                multiple benefits and utilities.
              </motion.p>
              <motion.div variants={m_projText} custom={2}>
                <Link
                  to="/projects"
                  className="btn btn-wide btn-accent text-white"
                >
                  Show more Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <svg
          className="bottom-svg  -bottom-20"
          preserveAspectRatio="none"
          height="86px"
          width="100%"
          viewBox="0 0 1917 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 76.8259L53.25 63.0418C106.5 48.9311 213 21.7548 319.5 24.9558C426 28.1569 532.5 63.1725 639 73.3636C745.5 83.9466 852 69.7052 958.5 66.3735C1065 63.1725 1171.5 69.5746 1278 80.1576C1384.5 90.3487 1491 104.59 1597.5 97.4694C1704 90.3487 1810.5 63.1071 1863.75 49.0617L1917 35.2776V0.458008H0V76.8259Z"
            fill="rgb(253, 224, 71)"
          />
        </svg>
      </section>

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
                Working Process
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Working Process of Fest
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to the tech fest 2021 process. Go through all
                the steps to know the exact process of the fest.
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
                        <p className="text-base text-yellow-300">
                          October, 2020
                        </p>
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
                          WORDPRESS, OPENCART, HTML, CSS/SCSS, JS, NPM, GULP,
                          SEO
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

      <section>
        <div className="pb-16">
          <div className="container mx-auto pt-16">
            <motion.div
              initial="hide"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16"
            >
              <motion.h1
                variants={m_top}
                className="focus:outline-none xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4"
                // data-sal="slide-up"
                // data-sal-delay="100"
              >
                Preferer technical scills
              </motion.h1>
              <motion.p
                variants={m_top}
                className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto"
                // data-sal="slide-up"
                // data-sal-delay="100"
              >
                Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd
                developer from Ukraine, currently working at Asign company as a
                FrontEnd engineer. My success came from a commitment to
                technology and investing in product development to maximize
                results. At the same time, I am fascinated by human psychology
                and develop products for people.
              </motion.p>
            </motion.div>
            <motion.div
              className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap"
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', damping: 11, stiffness: 200 },
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_js.svg"
                  alt="Adidas"
                  role="img"
                />
              </div>
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="1"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_node.svg"
                  alt="Chanel"
                  role="img"
                />
              </div>
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_scss.svg"
                  alt="Nike"
                  role="img"
                />
              </div>
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_figma.svg"
                  alt="Toyota"
                  role="img"
                />
              </div>

              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:py-10 py-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_react.svg"
                  alt="Adidas"
                  role="img"
                />
              </div>
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:py-10 py-16 items-center">
                <img
                  tabIndex="1"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_redux.svg"
                  alt="Chanel"
                  role="img"
                />
              </div>
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:py-10 py-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_next.svg"
                  alt="Nike"
                  role="img"
                />
              </div>
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:py-10 py-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_gatsby.svg"
                  alt="Toyota"
                  role="img"
                />
              </div>

              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_tailwind.svg"
                  alt="GS1"
                  role="img"
                />
              </div>
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_bootstrap.svg"
                  alt="BlackBerry"
                  role="img"
                />
              </div>
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_styled-components.svg"
                  alt="Mini"
                  role="img"
                />
              </div>
              <div className="group w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                  src="/img/skills/icon_laravel.svg"
                  alt="Honda"
                  role="img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
