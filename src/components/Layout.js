import React from 'react'
import ContactForm from './ContactForm'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />

      <main className="main">{children}</main>

      <Footer />

      <input type="checkbox" id="modal-cv" className="modal-toggle" />
      <label htmlFor="modal-cv" className="modal cursor-pointer">
        <label className="modal-box relative">
          <a target="_blank" href="/FrontEndCV.pdf" className="cursor-zoom-in">
            <img className="h-full" src="/CV.jpg" alt="" />
          </a>
        </label>
      </label>

      <input type="checkbox" id="modal-contact" className="modal-toggle" />
      <label htmlFor="modal-contact" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h2 className="text-4xl text-gray-600 text-center font-akaya font-extrabold tracking-wider">
            Write me something
            <span className="text-3xl block w-full"> coool 😜</span>
          </h2>
          <ContactForm className="pt-2" buttonFool />
        </label>
      </label>
    </div>
  )
}
