import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/effect-cards'
// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper'

export const Slider = (props) => {
  // console.log('first')
  const data = useStaticQuery(graphql`
    query queryScreenProjects {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/(project)/" } }
      ) {
        nodes {
          id
          frontmatter {
            desc
            date(formatString: "DD.MM.YYYY")
            title
            img {
              thumbnail {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.nodes

  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        // modules={[EffectCards, Autoplay, FreeMode, Navigation]}
        modules={[FreeMode, Navigation, Autoplay]}
        // autoplay={{
        //   delay: 1000,
        // }}
        speed={400}
        navigation
        className="swip swip--home"
      >
        {projects.map((project, index) => {
          // console.log(project.frontmatter)
          const thumbnail = getImage(project.frontmatter.img.thumbnail)
          const { title } = project.frontmatter

          return (
            <SwiperSlide key={index + project.id}>
              <div className="img-box flex flex-col justify-center">
                <GatsbyImage image={thumbnail} alt={title} />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
