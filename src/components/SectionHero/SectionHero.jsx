import React from 'react'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import { Slider } from './Slider'

const m_itm_left = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
  },
}

const m_itm_right = {
  hide: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
}

export const SectionHero = () => {
  return (
    <motion.section
      initial="hide"
      animate="show"
      exit="hide"
      transition={{ staggerChildren: 0.3 }}
      className="section--top h-screen	flex align-center justify-center items-center relative"
    >
      <div className="hero-content m-auto flex-col lg:flex-row-reverse">
        <motion.div variants={m_itm_right} className="w-2/4">
          <Slider className="w-[600px] h-[600px] mx-auto" />
        </motion.div>

        <motion.div variants={m_itm_left} className="w-2/4">
          <motion.h1 variants={m_itm_left} className="text-8xl font-bold">
            Hello 👋<div className="text-red-600	">I’m Nazar.</div>
          </motion.h1>
          <motion.div variants={m_itm_left} className="py-6 text-2xl type-txt">
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
          <motion.div variants={m_itm_left}>
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
    </motion.section>
  )
}
