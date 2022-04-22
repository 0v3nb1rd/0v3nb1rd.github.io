import React from 'react'
import { Header, Modal, ContactForm, Footer } from './'
import cn from 'classnames'

export default function Layout({ children, mainClass }) {
  return (
    <div className="layout">
      <Header />
      <main className={cn('main', [mainClass])}>{children}</main>
      <Footer />

      <Modal name="modal-cv" className="max-w-3xl">
        <a target="_blank" href="/FrontEndCV.pdf" className="cursor-zoom-in">
          <img className="h-full" src="/CV.jpg" alt="" />
        </a>
      </Modal>

      <Modal name="modal-contact">
        <h2 className="text-4xl text-gray-600 text-center font-akaya font-extrabold tracking-wider">
          Write me something
          <span className="text-3xl block w-full"> coool 😜</span>
        </h2>
        <ContactForm className="pt-2" btnFull />
      </Modal>
    </div>
  )
}
