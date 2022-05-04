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
              investors. Join an ambitious ever-growing community with multiple
              benefits and utilities.
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
  )
}
