import React from 'react'
import { Link } from 'gatsby'
import { NavMenu } from '..'
import { AnimatePresence, motion } from 'framer-motion'
import cn from 'classnames'
import { useIsMedium } from '../../hooks/utils'

export const Header = () => {
  const [hideWave, setHideWave] = React.useState(false)
  const [hideMenu, setHideMenu] = React.useState(false)

  const isSmall = useIsMedium()
  const IsMobileHeight = () => (isSmall ? 46 : 64)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setHideWave(window.pageYOffset > '420')
      )
    }
  }, [])

  return (
    <motion.header
      // initial={false}
      initial={{ opacity: 0, height: 0, y: -20 }}
      animate={{ opacity: 1, height: IsMobileHeight(), y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className={`header ${hideWave ? 'bg-sky100 backdrop-blur-lg' : 'bg-sky'}`}
    >
      <div className="container mx-auto">
        <div
          className={`navbar transition-all p-0 lg:p-2 relative 
					${!hideWave ? 'translate-y-0 lg:translate-y-5' : 'min-h-0 lg:min-h-16'}`}
        >
          <div className="navbar-start">
            <Link
              to="/"
              className="logo-box absolute w-[48px] lg:w-auto left-0 top-0 lg:top-4 z-10"
            >
              <motion.img
                src="/logo.svg"
                alt="logo icon"
                whileHover={{ scale: 1.2 }}
              />
            </Link>
          </div>

          <div className="navbar-center order-1 lg:order-none ">
            <div className="mobile-nav lg:hidden">
              <label
                onClick={() => setHideMenu(!hideMenu)}
                className="btn btn-ghost btn-square text-neutral-content"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <AnimatePresence>
                {hideMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <NavMenu
                      isCol
                      className=" menu menu-compact absolute right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-36"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavMenu className="hidden lg:flex" btnClasses="btn glass" />
          </div>

          <div className="navbar-end justify-start lg:justify-end">
            <label
              htmlFor="modal-cv"
              className="btn btn-sm lg:btn-md btn-accent text-white tracking-widest"
            >
              show
              <span className="pl-1 text-red-500 text-xl lg:text-3xl font-akaya">
                CV
              </span>
            </label>
          </div>
        </div>
      </div>
      <motion.svg
        className={`header__svg max-h-full ${
          hideWave ? 'top-[98%]' : 'top-[70%]'
        }`}
        preserveAspectRatio="none"
        // height={hideWave ? 0 : '86px'}
        width="100%"
        viewBox="0 0 1917 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ height: IsMobileHeight() }}
        animate={{ height: hideWave ? 0 : IsMobileHeight() }}
      >
        <motion.path
          d="M0 76.8259L53.25 63.0418C106.5 48.9311 213 21.7548 319.5 24.9558C426 28.1569 532.5 63.1725 639 73.3636C745.5 83.9466 852 69.7052 958.5 66.3735C1065 63.1725 1171.5 69.5746 1278 80.1576C1384.5 90.3487 1491 104.59 1597.5 97.4694C1704 90.3487 1810.5 63.1071 1863.75 49.0617L1917 35.2776V0.458008H0V76.8259Z"
          fill={hideWave ? 'rgba(48, 170, 222, 0.8)' : 'rgba(48, 170, 222, 1)'}
          strokeWidth={hideWave ? 0 : 15}
          stroke="rgba(255, 255, 255, 0.7)"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.488 }}
          transition={{ duration: 4, delay: 0.5, ease: 'easeInOut' }}
        />
      </motion.svg>
    </motion.header>
  )
}
