import React from 'react'
import cn from 'classnames'

export const Modal = ({ className, children, name }) => {
  return (
    <>
      <input type="checkbox" id={name} className="modal-toggle" />
      <label htmlFor={name} className="modal cursor-pointer">
        <div className={cn('modal-box relative p-0 sm:p-6', [className])}>
          {children}
        </div>
      </label>
    </>
  )
}
