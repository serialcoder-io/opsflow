import { JSX } from 'react'
import { NavLink } from 'react-router'
import { SideBarLinkProps } from '@renderer/types'

export default function SideLink({ path, text, icon }: SideBarLinkProps): JSX.Element {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `px-5 flex items-center gap-x-5 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-base-300 border-l-4 ${
          isActive ? 'bg-base-300 border-primary' : 'bg-base-200 border-transparent'
        }`
      }
    >
      {icon}
      {text}
    </NavLink>
  )
}
