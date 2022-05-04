import React from 'react'

export const Button = ({ className, children, ...props }) => {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
