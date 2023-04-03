import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { FreeMode, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Seo, Modal } from '../components'

import 'swiper/css'
import { MFullSection } from '../styles/styled'

const m_top = {
  hide: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
  },
}
const m_projText = {
  hide: { opacity: 0, x: 500 },
  show: {
    opacity: 1,
    x: 0,
  },
}

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  const refContainer = React.useRef(null)
  const refContainerLeft = React.useRef(null)

  const [modal, setModal] = React.useState([])

  React.useEffect(() => {
    const margin = refContainer.current.getClientRects()[0].x
    refContainerLeft.current.style.marginLeft = Math.floor(margin) + 'px'
  }, [])

  const handleModal = (img, title) => {
    setModal([img, title])
  }

  return (
    <>
      <Seo title="Projects" />
      <MFullSection
        initial="hide"
        animate="show"
        exit="hide"
        transition={{ staggerChildren: 0.2 }}
        items="initial"
        col="true"
        className="my-auto"
      >
        <motion.div
          variants={m_top}
          ref={refContainer}
          className="container absolute left-0 right-0 top-28 xl:top-32"
        >
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[510px] text-center lg:mb-2">
                <span className="block text-lg font-semibold text-primary xl:mb-2">
                  Projects
                </span>
                <h2
                  className="
                  text-dark
                  mb-4
                  text-3xl
                  font-bold
                  sm:text-4xl
                  md:text-[40px]"
                >
                  My Recent Projects
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={m_projText}
          ref={refContainerLeft}
          className="container--left"
        >
          <Swiper
            modules={[FreeMode, Mousewheel]}
            slidesPerView={'auto'}
            watchOverflow={'true'}
            spaceBetween={-15}
            // centeredSlides={true}
            // loadslides={3}
            // loop={true}
            freeMode={true}
            mousewheel={{ releaseOnEdges: true }}
            className="swiper--proj"
          >
            {projects.map((project) => {
              const { title, img, desc, links } = project.frontmatter
              const logo = img.logo.publicURL
              const thumbnail = getImage(img.thumbnail)
              const figma = getImage(img.figma)

              return (
                <SwiperSlide key={project.id}>
                  <div className="max-w-sm transform rounded-xl bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl 2xl:max-w-md">
                    <div className="portfolio__slide relative -m-4 -mb-8 h-72 overflow-hidden rounded-xl rounded-tr-none rounded-tl-none 2xl:h-80">
                      <label
                        htmlFor="modal"
                        className="relative z-10 cursor-pointer"
                        onClick={() => handleModal(thumbnail, title)}
                      >
                        <GatsbyImage
                          className="object-cover object-top"
                          image={thumbnail}
                          alt={title}
                        />
                      </label>
                    </div>
                    <div className="relative flex flex-col p-4 pt-10">
                      {/* <div className="py-2">
                        <StackSlider stack={stack} id={project.id} />
                      </div> */}

                      <div className=" flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="flex h-12 space-x-3">
                            <div className="h-auto w-full max-w-[200px]">
                              <img
                                className={cn(
                                  'h-full object-contain object-left'
                                )}
                                src={logo}
                                alt={title}
                              />
                            </div>
                          </div>
                          <div className="mt-3 flex items-center">
                            <p className="text-lg font-normal leading-tight 2xl:text-xl">
                              {desc}
                            </p>
                          </div>
                        </div>
                        <ul className="mx-2 flex flex-col">
                          <li
                            className="tooltip z-10 my-2"
                            data-tip={
                              figma ? 'show screenshot' : 'contact me to show'
                            }
                          >
                            <label
                              className={`flex max-h-8 w-8 ${
                                figma ? 'cursor-pointer' : 'btn-hide'
                              }`}
                              htmlFor="modal"
                              {...(figma && {
                                onClick: () => handleModal(figma, title),
                              })}
                            >
                              <img
                                src="/img/skills/icon_figma.svg"
                                alt="figma icon"
                              />
                            </label>
                          </li>

                          <li
                            className="tooltip z-10 my-2"
                            data-tip={
                              links[1] ? 'show code' : 'contact me to show'
                            }
                          >
                            <a
                              className={`flex max-h-8 w-8 ${
                                links[1] ? 'cursor-pointer' : 'btn-hide'
                              }`}
                              target="_blank"
                              {...(links[1] && {
                                href: links[1],
                              })}
                            >
                              <img
                                src="/img/skills/icon_github.svg"
                                alt="github"
                              />
                            </a>
                          </li>
                          <li
                            className="tooltip z-10 my-2"
                            data-tip={
                              links[2] ? 'show site' : 'contact me to show'
                            }
                          >
                            <a
                              className={`flex max-h-8 w-8 ${
                                links[2] ? 'cursor-pointer' : 'btn-hide'
                              }`}
                              target="_blank"
                              {...(links[2] && {
                                href: links[2],
                              })}
                            >
                              <img
                                src="/img/skills/icon_chrome.svg"
                                alt="chrome"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </motion.div>
      </MFullSection>

      {modal?.length && (
        <Modal className="mod-test max-w-5xl" name="modal">
          <GatsbyImage
            className="object-cover object-top"
            image={modal[0]}
            alt={modal[1]}
          />
        </Modal>
      )}
    </>
  )
}

export const queryProjects = graphql`
  query queryProjects {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(project)/" } }
    ) {
      nodes {
        id
        frontmatter {
          desc
          date(formatString: "DD.MM.YYYY")
          links
          stack
          title
          img {
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            figma {
              extension
              childImageSharp {
                gatsbyImageData
              }
            }
            logo {
              extension
              publicURL
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default Projects
