import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { NavMenu, SocialList } from '..'

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query MetaData {
      site {
        siteMetadata {
          title
          description
          contacts {
            adress
            phone
            email
          }
          socials {
            facebook
            instagram
            telegram
            github
            linkedin
            koFi
          }
        }
      }
    }
  `)

  const { socials } = data.site.siteMetadata
  return (
    <footer className="relative z-10 items-center text-neutral-content">
      <svg
        className="absolute top-0 h-6  w-full sm:h-16 "
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="rgb(61, 68, 81)"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="mt-6 flex flex-col bg-neutral pb-8 md:mt-16 md:pb-16">
        <div className="mx-auto mt-7 h-px w-11 rounded-full md:hidden"></div>

        <div className="mt-4 flex flex-col md:mt-0 md:flex-row">
          <NavMenu
            isFooter
            className="flex flex-1 flex-col items-center justify-center border-gray-100 md:items-end md:border-r md:pr-5"
            btnClasses="hover:text-primary dark:hover:text-white"
          />

          <div className="mx-auto mt-4 h-px w-11 rounded-full md:hidden"></div>

          <SocialList
            socials={socials}
            className="mt-4 flex flex-1 items-center justify-center border-gray-100 md:mt-0 md:border-r"
          />

          <div className="mx-auto mt-4 h-px w-11 rounded-full md:hidden"></div>

          <div className="mt-7 flex flex-1 flex-col items-center justify-center md:mt-0 md:items-start md:pl-5">
            <div className="flex items-center">
              <span className="leading-none">© {new Date().getFullYear()}</span>
            </div>

            <span className="mt-7 flex items-center md:mt-1">
              👨‍💻 with
              <a
                className="mx-2 inline-flex max-w-[2rem] transition-transform hover:-translate-y-1 hover:scale-110"
                target="_blank"
                rel="noreferrer"
                href={socials.koFi}
              >
                <img
                  className="h-auto w-full"
                  src="https://storage.ko-fi.com/cdn/nav-logo-stroke.png"
                  alt=""
                />
              </a>
              by
              <a
                className="ml-1 font-bold  underline hover:text-primary"
                href={socials.github}
              >
                0v3nb1rd
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
