import Sidebar from '@renderer/components/layout/Sidebar'
import { JSX } from 'react'
import { Outlet } from 'react-router'

export default function Layout(): JSX.Element {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
