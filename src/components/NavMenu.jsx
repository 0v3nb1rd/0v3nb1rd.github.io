import React from 'react'
import { Link } from 'gatsby'

export const NavMenu = ({ className, btnClasses, isFooter }) => {
  return (
    <nav className={className}>
      <ul className="flex">
        <li className="mx-2">
          <Link
            to="/"
            className={btnClasses}
            activeClassName={isFooter ? 'text-primary' : 'bg-slate-100/25'}
          >
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/projects"
            className={btnClasses}
            activeClassName={isFooter ? 'text-primary' : 'bg-slate-100/25'}
          >
            Projects
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/blog"
            className={btnClasses}
            activeClassName={isFooter ? 'text-primary' : 'bg-slate-100/25'}
          >
            Blog
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/contacts"
            className={btnClasses}
            activeClassName={isFooter ? 'text-primary' : 'bg-slate-100/25'}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  )
}
