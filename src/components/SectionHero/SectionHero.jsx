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
      <div className="hero-content">
        <motion.div
          variants={m_itm_right}
          className="h-[40vh] lg:h-auto w-full lg:w-2/4"
        >
          <Slider className="h-full lg:w-[440px] 2xl:w-[600px] mx-auto" />
        </motion.div>

        <motion.div
          variants={m_itm_left}
          className="text-center lg:text-left w-full lg:w-2/4"
        >
          <motion.h1
            variants={m_itm_left}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold"
          >
            Hello 👋
            <div className="block md:inline-block pl-2 lg:pl-0 text-red-600">
              I’m Nazar.
            </div>
          </motion.h1>
          <motion.div
            variants={m_itm_left}
            className="py-2 md:py-6 text-2xl xl:text-[2rem] xl:leading-[54px] tracking-[-0.3px]"
          >
            A modern
            <div className="xl:pl-4 text-4xl md:text-5xl xl:inline-block h-[50px]">
              <Typewriter
                options={{
                  strings: [
                    '<span class="text-red-600 font-akaya">HTML-CSS</span> <span class="text-[2rem]">coder</span>',
                    '<span class="text-sky font-akaya">React.js</span> <span class="text-[2rem]">dev.</span>',
                    '<span class="text-primary font-akaya">Node.js</span> <span class="text-[2rem]">dev.</span>',
                    '<span class="text-warning font-akaya">UI/UX</span> <span class="text-[2rem]">designer</span>',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <span className="hidden lg:block">
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
