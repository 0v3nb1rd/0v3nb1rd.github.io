import React from "react"
import Layout from "../components/Layout"
import Typewriter from "typewriter-effect"
import Slider from "../components/Slider"

export default function Home() {
  return (
    <Layout>
      <section className="hero hero-section">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <video
            className="w-2/4 rounded-lg"
            src="/clips.mp4"
            type="video/mp4"
            autoPlay
            loop
          ></video>
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
            <button className="btn btn-wide">write me</button>
          </div>
        </div>
        <svg
          className="hero-section__svg bottom-0"
          width="1805"
          height="99"
          viewBox="0 0 1805 99"
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
          <div className="section__slider w-2/4">
            <div className="wrap">
              <Slider />
            </div>
          </div>
          <div className="w-2/4">
            <h2 className="text-6xl font-bold">
              Welcome To The<div className="text-red-600	">Weirdos Club.</div>
            </h2>
            <p className="py-6 text-2xl">
              The WEIRDOS CLUB is a private collection of NFTs—unique digital
              collectibles. The Weirdos are stored as ERC-721 tokens on the
              Ethereum blockchain and hosted on IPFS.
            </p>
            <p className="py-5 text-1xl">
              With more than 200+ hand drawn traits, each NFT is unique and
              comes with a membership to an exclusive group of successful
              investors. Join an ambitious ever-growing community with multiple
              benefits and utilities.
            </p>

            <button className="btn btn-wide">Show Projects</button>
          </div>
        </div>
        <svg
          className="hero-section__svg  -bottom-20"
          width="1917"
          height="100"
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

      {/* <section className="min-h-screen hero">
        <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
          <div class="w-full bg-white  px-5 py-16 md:py-24 text-gray-800">
            <div class="w-full max-w-6xl mx-auto">
              <div class="text-center max-w-xl mx-auto">
                <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                  What people <br />
                  are saying.
                </h1>
                <h3 class="text-xl mb-5 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <div class="text-center mb-10">
                  <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                  <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
              </div>
              <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-1/3">
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Kenzie Edgar.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos sunt ratione dolor exercitationem minima quas
                        itaque saepe quasi architecto vel! Accusantium, vero
                        sint recusandae cum tempora nemo commodi soluta
                        deleniti.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=2" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Stevie Tifft.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum, dolor sit amet, consectetur adipisicing
                        elit. Dolore quod necessitatibus, labore sapiente, est,
                        dignissimos ullam error ipsam sint quam tempora vel.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 md:w-1/3">
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=3" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Tommie Ewart.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vitae, obcaecati ullam excepturi dicta error
                        deleniti sequi.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=4" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Charlie Howse.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptatum nostrum atque, corrupti,
                        vitae esse id accusamus dignissimos neque reprehenderit
                        natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                        iusto.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 md:w-1/3">
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=5" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Nevada Herbertson.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                        ipsum, laboriosam nostrum facere exercitationem pariatur
                        deserunt tempora molestiae assumenda nesciunt alias
                        eius? Illo, autem!
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=6" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Kris Stanton.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem iusto, explicabo, cupiditate quas totam!
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                        <p class="mb-3 text-base text-yellow-300">
                          1-6 May, 2021
                        </p>
                        <h4 class="mb-3 font-bold text-lg md:text-2xl">
                          Registration
                        </h4>
                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Pick your favourite event(s) and register in that
                          event by filling the form corresponding to that event.
                          Its that easy :)
                        </p>
                      </div>
                    </div>
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                      <div class="order-1 w-5/12"></div>
                      <div class="order-1  w-5/12 px-1 py-4 text-left">
                        <p class="mb-3 text-base text-yellow-300">
                          6-9 May, 2021
                        </p>
                        <h4 class="mb-3 font-bold text-lg md:text-2xl">
                          Participation
                        </h4>
                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Participate online. The links for your registered
                          events will be sent to you via email and whatsapp
                          groups. Use those links and show your talent.
                        </p>
                      </div>
                    </div>
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div class="order-1 w-5/12"></div>
                      <div class="order-1 w-5/12 px-1 py-4 text-right">
                        <p class="mb-3 text-base text-yellow-300">
                          {" "}
                          10 May, 2021
                        </p>
                        <h4 class="mb-3 font-bold text-lg md:text-2xl">
                          Result Declaration
                        </h4>
                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          The ultimate genius will be revealed by our judging
                          panel on 10th May, 2021 and the resukts will be
                          announced on the whatsapp groups and will be mailed to
                          you.
                        </p>
                      </div>
                    </div>
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                      <div class="order-1 w-5/12"></div>

                      <div class="order-1  w-5/12 px-1 py-4">
                        <p class="mb-3 text-base text-yellow-300">
                          12 May, 2021
                        </p>
                        <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                          Prize Distribution
                        </h4>
                        <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          The winners will be contacted by our team for their
                          addresses and the winning goodies will be sent at
                          their addresses.
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
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/adidas-dark.png"
                  alt="Adidas"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/channel-dark.png"
                  alt="Chanel"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/nike-dark.png"
                  alt="Nike"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/toyota-dark.png"
                  alt="Toyota"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/gs1-dark.png"
                  alt="GS1"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/berry-dark.png"
                  alt="BlackBerry"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/min-dark.png"
                  alt="Mini"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/honda-dark.png"
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
