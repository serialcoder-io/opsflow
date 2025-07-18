import Sidebar from '@renderer/components/layout/Sidebar'
import { JSX } from 'react'
import { Outlet } from 'react-router'

export default function Layout(): JSX.Element {
  return (
    <div className="flex p-3 overflow-y-auto" style={{ height: '100vh' }}>
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet />
        {[...Array(100)].map((_, i) => (
          <p key={i}>Contenu {i + 1}</p>
        ))}
      </main>
    </div>
  )
}
