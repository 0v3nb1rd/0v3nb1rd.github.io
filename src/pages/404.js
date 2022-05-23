import React from 'react'
import { Link } from 'gatsby'
import { Seo } from '../components'
export const notFound = () => {
  return (
    <>
      <Seo title="404" />
      <section>
        <div className="bg-gradient-to-r from-purple-300 to-blue-200">
          <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
              <div className="border-t border-gray-200 text-center pt-8">
                <h1 className="text-9xl font-bold text-purple-400">404</h1>
                <h1 className="text-6xl font-medium py-8">
                  oops! Page not found
                </h1>
                <p className="text-2xl pb-8 px-12 font-medium">
                  Oops! The page you are looking for does not exist. It might
                  have been moved or deleted.
                </p>
                <Link
                  to="/"
                  className="btn bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-none mr-6"
                >
                  HOME
                </Link>
                <Link
                  to="/contacts"
                  className="btn bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 border-none"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default notFound
