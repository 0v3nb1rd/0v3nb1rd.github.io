import React from 'react'
import styled from 'styled-components'

export default function Button({ className, children, ...props }) {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}

// export const Button = styled.button`
//   &.active {
//   }
// `
