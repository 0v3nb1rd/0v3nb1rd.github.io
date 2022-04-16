import React from "react"
import NavMenu from "./NavMenu"
import SocialList from "./SocialList"
import { useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copiright
        }
      }
    }
  `)
  const { copiright } = data.site.siteMetadata

  return (
    <footer className="items-center pb-12 bg-neutral text-neutral-content relative">
      <svg
        className="absolute top-0 w-full -mt-6 sm:-mt-16 h-6 sm:h-16 "
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="rgb(61, 68, 81)"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="flex flex-col">
        <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>

        <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
          <NavMenu
            className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5"
            btnClasses="hover:text-primary dark:hover:text-white"
          />

          <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>

          <SocialList className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100" />

          <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>

          <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
            <span className="leading-none">© {new Date().getFullYear()}</span>
            <span className="mt-7 md:mt-1">
              Created by
              <a
                className="underline hover:text-primary ml-1"
                href="https://www.linkedin.com/in/crabiller/"
              >
                0v3nb1rd
                <img src="/img/skills/logo_slick.svg" alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
