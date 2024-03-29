import React from 'react'
import { motion } from 'framer-motion'

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

export const SectionStack = () => {
  return (
    <section>
      <div className="lg:pb-16">
        <div className="container mx-auto lg:pt-16">
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto lg:mb-16"
          >
            <motion.h1
              variants={m_top}
              className="focus:outline-none xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4"
            >
              Preferer technical scills & tools
            </motion.h1>
            <motion.p
              variants={m_top}
              className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto"
            >
              Hi, I'm Nazar, a self-taught passionate FrontEnd developer from
              Ukraine, currently working at Asign company as a FrontEnd
              engineer. My success came from a commitment to technology and
              investing in product development to maximize results. At the same
              time, I am fascinated by human psychology and develop products for
              people.
            </motion.p>
          </motion.div>
          <motion.div
            className="xl:py-16 lg:py-16 md:py-16 py-8 px-15 flex flex-wrap"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { type: 'spring', damping: 11, stiffness: 200 },
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_js.svg"
                alt="Adidas"
              />
            </div>
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_node.svg"
                alt="Chanel"
              />
            </div>
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_scss.svg"
                alt="Nike"
              />
            </div>
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_figma.svg"
                alt="Toyota"
              />
            </div>

            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:py-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_react.svg"
                alt="Adidas"
              />
            </div>
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:py-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_redux.svg"
                alt="Chanel"
              />
            </div>
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:py-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_next.svg"
                alt="Nike"
              />
            </div>
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:py-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_gatsby.svg"
                alt="Toyota"
              />
            </div>

            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_tailwind.svg"
                alt="GS1"
              />
            </div>
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 p-4 items-center">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_bootstrap.svg"
                alt="BlackBerry"
              />
            </div>
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 p-4">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_styled-components.svg"
                alt="Mini"
              />
            </div>
            <div className="group w-4/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 p-4">
              <img
                className="max-h-16 w-16 group-hover:drop-shadow-2xl group-hover:scale-105 transform transition-all duration-500"
                src="/img/skills/icon_laravel.svg"
                alt="Honda"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
