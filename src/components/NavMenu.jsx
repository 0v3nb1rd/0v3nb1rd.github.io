import React from 'react'
import { Link } from 'gatsby'

export default function NavMenu({ className, btnClasses }) {
  return (
    <nav className={className}>
      <ul className="flex">
        <li className="mx-2">
          <Link to="/" className={btnClasses}>
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/projects" className={btnClasses}>
            Projects
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/blog" className={btnClasses}>
            Blog
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/contacts" className={btnClasses}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  )
}
