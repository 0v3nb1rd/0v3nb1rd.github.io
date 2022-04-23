import React from 'react'
import { Layout, Modal, StackSlider } from '../components'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FreeMode, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  const refContainer = React.useRef(null)
  const refContainerLeft = React.useRef(null)

  React.useEffect(() => {
    const margin = refContainer.current.getClientRects()[0].x
    refContainerLeft.current.style.marginLeft = Math.floor(margin) + 'px'
  })

  const [modal, setModal] = React.useState(false)

  const showFigma = (figma, title) => {
    // console.log(figma, title)
    setModal([figma, title])
  }

  return (
    <Layout mainClass="main--projects">
      <section className="pt-8">
        <div ref={refContainer} className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div
              className="w-full px-4"
              data-sal="slide-down"
              data-sal-delay="100"
              data-sal-easing="ease-out-back"
            >
              <div className="text-center mx-auto lg:mb-2 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  My Projects
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4"
                >
                  My Recent Projects
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={refContainerLeft}
          className="py-4 container--left"
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sel-duration="3000"
          data-sal-easing="ease-out-back"
        >
          <Swiper
            modules={[FreeMode, Mousewheel]}
            slidesPerView={'auto'}
            watchOverflow={'true'}
            // centeredSlides={true}
            // loadslides={3}
            // loop={true}
            freeMode={true}
            mousewheel={{ releaseOnEdges: true }}
            className="swiper--proj"
          >
            {projects.map((project) => {
              const { title, stack, img, desc, links } = project.frontmatter
              const logo = getImage(img.logo)
              const thumbnail = getImage(img.thumbnail)
              const figma = getImage(img.figma)
              // const { logo, thumbnail } = getImage(project.frontmatter.img)
              // console.log(figma)

              return (
                <SwiperSlide key={project.id}>
                  <div className=" max-w-md bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                    <div className="-m-4 -mb-8 portfolio__slide relative rounded-xl rounded-tr-none rounded-tl-none overflow-hidden h-80">
                      <GatsbyImage
                        className="object-cover object-top"
                        image={thumbnail}
                        alt={title}
                      />
                    </div>
                    <div className="flex flex-col p-4 pt-10 relative">
                      <div className="absolute -top-4 py-2 left-0 right-0 w-full">
                        <StackSlider stack={stack} id={project.id} />
                      </div>

                      <div className=" flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="flex space-x-3">
                            <div className="max-w-[200px] max-h-12">
                              {img.logo.extension === 'svg' ? (
                                <img
                                  className="h-full w-full"
                                  src={img.logo.publicURL}
                                  alt={title}
                                />
                              ) : (
                                <GatsbyImage
                                  className="h-full"
                                  placeholder="tracedSVG"
                                  image={logo}
                                  alt={title}
                                />
                              )}
                            </div>
                          </div>
                          <div className="flex mt-3 items-center">
                            <p className="text-sm font-normal ">{desc}</p>
                          </div>
                        </div>
                        <ul className="flex flex-col mx-2">
                          <li
                            className="my-2 tooltip"
                            data-tip={
                              figma ? 'show screanshot' : 'contact me to show'
                            }
                          >
                            <label
                              className="btn-hide flex w-8 max-h-8"
                              {...(figma && {
                                className: 'cursor-pointer flex w-8 max-h-8',
                                htmlFor: 'modal',
                                onClick: () => showFigma(figma, title),
                              })}
                            >
                              <img
                                src="/img/skills/icon_figma.svg"
                                alt="figma icon"
                              />
                            </label>
                          </li>

                          <li
                            className="my-2 tooltip"
                            data-tip={
                              links[1] ? 'show code' : 'contact me to show'
                            }
                          >
                            <a
                              className="btn-hide flex w-8 max-h-8"
                              {...(links[1] && {
                                className: 'cursor-pointer flex w-8 max-h-8',
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
                            className="my-2 tooltip"
                            data-tip={
                              links[2] ? 'show site' : 'contact me to show'
                            }
                          >
                            <a
                              className="btn-hide flex w-8 max-h-8"
                              {...(links[2] && {
                                className: 'cursor-pointer flex w-8 max-h-8',
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
        </div>
      </section>

      {modal && (
        <Modal className="max-w-5xl" name="modal">
          <GatsbyImage
            className="object-cover object-top"
            image={modal[0]}
            alt={modal[1]}
          />
        </Modal>
      )}
    </Layout>
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
