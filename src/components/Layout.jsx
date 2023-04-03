import React from 'react'
import { Header, Modal, ContactForm, Footer } from './'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

export const Layout = ({ children, page, location: { pathname } }) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return (
    <motion.div className="layout">
      <Header />
      <AnimatePresence
        exitBeforeEnter
        // initial={false}
        // onExitComplete={() => {
        //   if (typeof window !== 'undefined') {
        //     window.scrollTo({ top: 0 })
        //   }
        // }}
      >
        <main key={pathname} className={cn('main', [page])}>
          {children}
        </main>
      </AnimatePresence>
      <Footer />

      <Modal name="modal-cv" className="max-w-3xl">
        <a target="_blank" href="/FrontEndCV.pdf" className="cursor-zoom-in">
          <img className="" src="/CV.jpg" alt="" />
        </a>
      </Modal>

      <Modal name="modal-contact">
        <h2 className="text-center font-akaya text-4xl font-extrabold tracking-wider text-gray-600">
          Write me something
          <span className="block w-full text-3xl"> coool 😜</span>
        </h2>
        <ContactForm className="pt-2" btnFull />
      </Modal>
    </motion.div>
  )
}
