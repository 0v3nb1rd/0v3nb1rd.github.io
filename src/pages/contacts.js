import React from 'react'
import { graphql } from 'gatsby'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import Dino from '../components/Dino'

export default function Contacts({ data }) {
  const { contacts } = data.site.siteMetadata
  return (
    <Layout mainClass="main--contacts">
      <section className="hero hero-section--full ">
        <div className="container">
          <div className=" sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
              <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div
                    className="p-6 mr-2 bg-ylw  sm:rounded-lg relative z-10"
                    data-sal="slide-right"
                    data-sal-delay="50"
                    data-sel-duration="1500"
                    data-sal-easing="ease-out-back"
                  >
                    <h1 className="text-4xl sm:text-5xl text-white font-akaya dark:text-white font-extrabold tracking-widest	">
                      My contacts is:
                    </h1>
                    <p className="text-normal text-lg sm:text-2xl font-medium text-gray-500  mt-1">
                      Fill in the form to start a conversation
                    </p>

                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-50">
                        {contacts.adress}
                      </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-50">
                        {contacts.phone}
                      </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-50">
                        {contacts.email}
                      </div>
                    </div>
                  </div>

                  <ContactForm
                    data-sal="slide-right"
                    data-sal-delay="300"
                    data-sel-duration="1500"
                    data-sal-easing="ease-out-back"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="absolute bottom-40 right-20 -z-10 "
        data-sal="slide-up"
        data-sal-delay="800"
        data-sel-duration="50"
        data-sal-easing="linear"
      >
        <Dino />
      </div>
    </Layout>
  )
}

export const queryContacts = graphql`
  query queryContacts {
    site {
      siteMetadata {
        contacts {
          adress
          phone
          email
        }
      }
    }
  }
`
