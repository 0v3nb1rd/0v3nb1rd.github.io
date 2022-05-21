import React from 'react'
import cn from 'classnames'

export const Modal = ({ className, children, name }) => {
  return (
    <>
      <input type="checkbox" id={name} className="modal-toggle" />
      <label htmlFor={name} className="modal cursor-pointer">
        <label className={cn('p-0 sm:p-6 modal-box relative', [className])}>
          {children}
        </label>
      </label>
    </>
  )
}
