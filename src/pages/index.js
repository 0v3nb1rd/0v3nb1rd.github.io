import React from "react"
import Layout from "../components/Layout"
import Typewriter from "typewriter-effect"
import Slider from "../components/Slider"

export default function Home() {
  return (
    <Layout>
      <section className="section--top">
        <div className="hero hero-section">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-2/4">
              <div className="max-w-[600px] mx-auto">
                <video src="/clips.mp4" type="video/mp4" autoPlay loop></video>
              </div>
            </div>
            <div className="w-2/4">
              <h1 className="text-8xl font-bold">
                Hello 👋<div className="text-red-600	">I’m Nazar.</div>
              </h1>
              <div className="py-6 text-2xl type-txt">
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
              </div>
              <button className="btn btn-accent tracking-widest text-white btn-wide">
                write me
              </button>
            </div>
          </div>
        </div>

        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1805 99"
          height="86px"
          width="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1805 22.5791L1751.75 36.3727C1698.5 50.4933 1592 77.6884 1485.5 74.4852C1379 71.2819 1272.5 36.242 1166 26.0438C1059.5 15.4534 953 29.7047 846.5 33.0387C740 36.242 633.5 29.8355 527 19.245C420.5 9.04687 314 -5.20443 207.5 1.92121C101 9.04686 -5.50001 36.3074 -58.75 50.3625L-112 64.1562V99H1805V22.5791Z"
            fill="rgb(253, 224, 71)"
          />
        </svg>
      </section>

      <section className="min-h-screen hero bg-yellow-300 relative">
        <div className="hero-content flex-col lg:flex-row">
          <div className="section__slider w-2/4 flex justify-center items-center">
            <div className="wrap">
              <Slider />
            </div>
          </div>
          <div className="w-2/4">
            <div className="w-4/5 mx-auto">
              <h2 className="text-6xl font-bold">
                Welcome To The<div className="text-red-600">Weirdos Club.</div>
              </h2>
              <p className="py-6 text-2xl">
                The WEIRDOS CLUB is a private collection of NFTs—unique digital
                collectibles. The Weirdos are stored as ERC-721 tokens on the
                Ethereum blockchain and hosted on IPFS.
              </p>
              <p className="py-5 text-1xl">
                With more than 200+ hand drawn traits, each NFT is unique and
                comes with a membership to an exclusive group of successful
                investors. Join an ambitious ever-growing community with
                multiple benefits and utilities.
              </p>

              <button className="btn btn-wide btn-accent text-white">
                Show more Projects
              </button>
            </div>
          </div>
        </div>
        <svg
          className="bottom-svg  -bottom-20"
          preserveAspectRatio="none"
          height="86px"
          width="100%"
          viewBox="0 0 1917 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 76.8259L53.25 63.0418C106.5 48.9311 213 21.7548 319.5 24.9558C426 28.1569 532.5 63.1725 639 73.3636C745.5 83.9466 852 69.7052 958.5 66.3735C1065 63.1725 1171.5 69.5746 1278 80.1576C1384.5 90.3487 1491 104.59 1597.5 97.4694C1704 90.3487 1810.5 63.1071 1863.75 49.0617L1917 35.2776V0.458008H0V76.8259Z"
            fill="rgb(253, 224, 71)"
          />
        </svg>
      </section>

      <section>
        <div class="bg-neutral text-white py-8">
          <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div class="flex flex-col w-full sticky md:top-1/4 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p class="ml-2 text-yellow-300 uppercase tracking-loose">
                Working Process
              </p>
              <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Working Process of Fest
              </p>
              <p class="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to the tech fest 2021 process. Go through all
                the steps to know the exact process of the fest.
              </p>
              <a
                href="#"
                class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden p-10 h-full">
                  <div
                    class="border-4 rounded-3xl	border-yellow-300 absolute h-full"
                    // style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
                  <div
                    class="border-4 rounded-3xl border-yellow-300 absolute h-full "
                    // style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>

                  <dir>
                    <div class="mb-8 ml-10 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div class="order-1 w-5/12"></div>
                      <div class="order-1 w-5/12 px-1 py-4 text-right">
                        <p class="text-base text-yellow-300">October, 2020</p>
                        <a
                          href="#"
                          class="flex mb-3 font-bold text-lg md:text-2xl"
                        >
                          <img
                            className="w-40 ml-auto"
                            src="/img/logo_asign.png"
                            alt=""
                          />
                        </a>
                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Asign - web studio that creates websites and modern
                          landings with smooth animation
                        </p>
                        <p className="mt-2">
                          <span className="text-red-500">Stack:</span> HTML,
                          CSS/LESS, JQUERY, JS/ES6, NPM, PHP, LARAVEL, GIT
                        </p>
                      </div>
                    </div>
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                      <div class="order-1 w-5/12"></div>
                      <div class="order-1  w-5/12 px-1 py-4 text-left">
                        <p class="mb-3 text-base text-yellow-300">
                          6-9 May, 2018
                        </p>
                        <h4 class="mb-3 font-bold text-lg md:text-2xl">
                          Freelance
                        </h4>
                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Work as a web muster, full-stack developer
                          freelancehunt.com
                        </p>
                        <p className="mt-2">
                          <span className="text-red-500">Stack:</span> HTML,
                          CSS/SCSS, JS/ES6, NODE, REACT/REDUX, EXPRESS, SEO
                        </p>
                      </div>
                    </div>
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div class="order-1 w-5/12"></div>
                      <div class="order-1 w-5/12 px-1 py-4 text-right">
                        <p class="mb-3 text-base text-yellow-300">
                          10 May, 2017
                        </p>
                        <h4 class="mb-3 font-bold text-lg md:text-2xl">
                          SEO Link builder
                        </h4>
                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Created SEO-links and published on forums to increase
                          the ranking of sites, work with rozetka.ua and
                          hotline.ua
                        </p>
                        <p className="mt-2">
                          <span className="text-red-500">Stack:</span> HTML, SEO
                        </p>
                      </div>
                    </div>
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                      <div class="order-1 w-5/12"></div>

                      <div class="order-1  w-5/12 px-1 py-4">
                        <p class="mb-3 text-base text-yellow-300">
                          12 May, 2016
                        </p>
                        <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                          Self projects
                        </h4>
                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Create landing-pages, support landing, sales{" "}
                        </p>
                        <p className="mt-2">
                          <span className="text-red-500">Stack: </span>
                          WORDPRESS, OPENCART, HTML, CSS/SCSS, JS, NPM, GULP,
                          SEO
                        </p>
                      </div>
                    </div>
                  </dir>
                </div>
                <img
                  class="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
          </div>
        </div>
        <svg
          className="w-full h-auto"
          width="1440"
          height="54"
          viewBox="0 0 1440 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 32.0001L120 37.3001C240 43.0001 480 53.0001 720 53.3C960 53.0001 1200 43.0001 1320 37.3001L1440 32.0001V6.10352e-05H1320C1200 6.10352e-05 960 6.10352e-05 720 6.10352e-05C480 6.10352e-05 240 6.10352e-05 120 6.10352e-05H0V32.0001Z"
            fill="#3D4451"
          />
        </svg>
      </section>

      <section>
        <div className="pb-16">
          <div className="container mx-auto pt-16">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
              <h1
                tabIndex="0"
                className="focus:outline-none xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4"
              >
                Partnerships with Coveted Brands
              </h1>
              <p
                tabIndex="0"
                className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto"
              >
                Our success has come from being committed to the property and
                investing in the development of the product to maximize sales.
                At the same time and maintaining the integrity.
              </p>
            </div>
            <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_js.svg"
                  alt="Adidas"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="1"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_node.svg"
                  alt="Chanel"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_scss.svg"
                  alt="Nike"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_figma.svg"
                  alt="Toyota"
                  role="img"
                />
              </div>

              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:py-10 py-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_react.svg"
                  alt="Adidas"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:py-10 py-16 items-center">
                <img
                  tabIndex="1"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_redux.svg"
                  alt="Chanel"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:py-10 py-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_next.svg"
                  alt="Nike"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:py-10 py-16 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_gatsby.svg"
                  alt="Toyota"
                  role="img"
                />
              </div>

              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_tailwind.svg"
                  alt="GS1"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_bootstrap.svg"
                  alt="BlackBerry"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_styled-components.svg"
                  alt="Mini"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="max-h-16 w-16"
                  src="/img/skills/icon_laravel.svg"
                  alt="Honda"
                  role="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
