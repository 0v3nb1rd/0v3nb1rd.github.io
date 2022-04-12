import React from "react"
import { Link } from "gatsby"

export default function NavMenu({ className, children, ...props }) {
  return (
    <nav className={className}>
      <ul className="flex">
        <li className="mx-2">
          <Link to="/" className={props.btnClasses}>
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/projects" className={props.btnClasses}>
            Projects
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/blog" className={props.btnClasses}>
            Blog
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/contacts" className={props.btnClasses}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  )
}
