import React from 'react'

export const ProjectLink = ({ iconSrc, iconAlt, link, modal, ...props }) => {
  console.log(props)
  return (
    <li className="my-2 tooltip" {...props}>
      {modal ? (
        <label className="cursor-pointer flex w-8 max-h-8" htmlFor="modal">
          <img src={iconSrc} alt={iconAlt} />
        </label>
      ) : (
        <a className="flex w-8 max-h-8" href={link}>
          <img src="/img/skills/icon_github.svg" alt="github" />
        </a>
      )}
    </li>
  )
}
