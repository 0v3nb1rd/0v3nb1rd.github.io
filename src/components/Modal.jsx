import React from 'react'
import cn from 'classnames'

export const Modal = ({ className, children, name }) => {
  return (
    <>
      <input type="checkbox" id={name} className="modal-toggle" />
      <label htmlFor={name} className="modal cursor-pointer">
        <label className={cn('modal-box relative', [className])}>
          {children}
        </label>
      </label>
    </>
  )
}
