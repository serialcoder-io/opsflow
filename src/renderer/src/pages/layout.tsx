import Sidebar from '@renderer/components/layout/Sidebar'
import { JSX } from 'react'
import { Outlet } from 'react-router'

export default function Layout(): JSX.Element {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
