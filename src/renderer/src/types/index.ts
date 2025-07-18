import React from 'react'

export type SideBarLinkProps = {
  path: string
  text: string
  icon: React.JSX.Element
}

export type CheckboxProps = {
  label: string
  checked: boolean
  value: string
  onChange: (checked: boolean, value: string) => void
}
