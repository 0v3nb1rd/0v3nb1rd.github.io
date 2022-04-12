import React from "react"

export default function Button({ className, children, ...props }) {
  return <props.tag className={className}>{children}</props.tag>
}
