import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { Slider } from './Slider'

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

export const SectionSlider = () => {
  return (
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

        <div className="w-full lg:w-2/4 text-center lg:text-left">
          <div className=" lg:w-4/5 mx-auto">
            <motion.h2
              variants={m_projText}
              custom={0}
              className="mb-6 text-4xl lg:text-6xl font-bold"
            >
              What
              <span className="text-red-600"> I Do?</span>
            </motion.h2>
            <motion.p
              variants={m_projText}
              custom={1}
              className="my-2 lg:my-3 text-3xl"
            >
              Web Development
            </motion.p>

            <motion.div
              variants={m_projText}
              custom={2}
              className="text-lg text-left lg:text-left"
            >
              <ul>
                <li className="relative">
                  <span className="absolute">❄︎</span>
                  <div className="pl-8 ">
                    Building responsive websites using HTML/SCSS, Bootstrap,
                    ReactJS & NextJS
                  </div>
                </li>
                <li className="relative mt-2">
                  <span className="absolute ">❄︎</span>
                  <div className="pl-8 ">
                    Making animations using Framer Motion, GSAP & CSS
                  </div>
                </li>
                <li className="relative mt-2">
                  <span className="absolute ">❄︎</span>
                  <div className="pl-8 ">
                    Creating application backend in Node & Next
                  </div>
                </li>
                <li className="relative mt-2">
                  <span className="absolute ">❄︎</span>
                  <div className="pl-8 ">
                    SEO Optimization & audit of websites
                  </div>
                </li>
                <li className="relative mt-2">
                  <span className="absolute">❄︎</span>
                  <div className="pl-8">
                    Having experience in Domain & Hosting using Netlify, Vercel,
                    Heroku & Hostinger
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div className="mt-10" variants={m_projText} custom={2}>
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
  )
}
