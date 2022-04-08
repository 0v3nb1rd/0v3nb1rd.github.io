import React from "react"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />

      <main className="main">{children}</main>

      <Footer />
      <input type="checkbox" id="modal-cv" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-1xl">
          <label
            for="modal-cv"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img className="h-full" src="/CV.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
