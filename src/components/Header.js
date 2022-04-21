import { Link } from 'gatsby'
import React from 'react'
import NavMenu from './NavMenu'
import { motion } from 'framer-motion'
import cn from 'classnames'
// const isBrowser = typeof window !== `undefined`
const transition = { duration: 4, ease: 'easeInOut' }

export default function Header() {
  const [hideWave, setHideWave] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setHideWave(window.pageYOffset > '420')
      )
    }
  }, [])

  return (
    <header
      className={`header ${hideWave ? 'bg-sky100 backdrop-blur-lg' : 'bg-sky'}`}
    >
      <div className="container mx-auto">
        <div
          className={cn('navbar', 'transition-all', 'relative', {
            'translate-y-5': !hideWave,
          })}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Contacts</a>
                </li>
              </ul>
            </div>
            <Link to="/" className="logo-box">
              <motion.img src="/logo.svg" whileHover={{ scale: 1.2 }} />
            </Link>
          </div>

          <NavMenu
            className="navbar-center hidden lg:flex"
            btnClasses="btn glass"
          />

          <div className="navbar-end">
            <label
              htmlFor="modal-cv"
              className="btn btn-accent text-white tracking-widest"
            >
              show
              <span className="pl-1 text-red-500 text-3xl font-akaya">CV</span>
            </label>
          </div>
        </div>
      </div>
      <motion.svg
        className={`header__svg ${hideWave ? 'top-[98%]' : 'top-[70%]'}`}
        preserveAspectRatio="none"
        // height={hideWave ? 0 : '86px'}
        width="100%"
        viewBox="0 0 1917 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ height: 86 }}
        animate={{ height: hideWave ? 0 : 86 }}
      >
        <motion.path
          d="M0 76.8259L53.25 63.0418C106.5 48.9311 213 21.7548 319.5 24.9558C426 28.1569 532.5 63.1725 639 73.3636C745.5 83.9466 852 69.7052 958.5 66.3735C1065 63.1725 1171.5 69.5746 1278 80.1576C1384.5 90.3487 1491 104.59 1597.5 97.4694C1704 90.3487 1810.5 63.1071 1863.75 49.0617L1917 35.2776V0.458008H0V76.8259Z"
          fill={hideWave ? 'rgba(48, 170, 222, 0.8)' : 'rgba(48, 170, 222, 1)'}
          strokeWidth={hideWave ? 0 : 15}
          stroke="rgba(255, 255, 255, 0.7)"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.488 }}
          transition={transition}
        />
      </motion.svg>
    </header>
  )
}
