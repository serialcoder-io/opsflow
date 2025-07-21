import Sidebar from '@renderer/components/layouts/Sidebar'
import { JSX } from 'react'
import { Outlet } from 'react-router'

export default function Layout(): JSX.Element {
  return (
    <div className="flex p-4 overflow-y-auto" style={{ height: '100vh' }}>
      <Sidebar />
      <main className="flex-1 px-4">
        <Outlet />
      </main>
    </div>
  )
}
