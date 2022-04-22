import React from 'react'
// import cn from 'classnames'

export default function Modal({ className, children, name }) {
  return (
    <div>
      <input type="checkbox" id={name} className="modal-toggle" />
      <label htmlFor={name} className="modal cursor-pointer">
        <label className={`modal-box relative ${className}`}>{children}</label>
      </label>
    </div>
  )
}
