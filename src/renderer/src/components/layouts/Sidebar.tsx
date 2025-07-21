import { JSX } from 'react'
import { Container, Box, FolderCode } from 'lucide-react'
import SideLink from '@renderer/ui/layout-elements/SideLink'

export default function Sidebar(): JSX.Element {
  return (
    <aside className="sticky top-0 w-[250px] bg-base-200 rounded-md">
      {/** sidebar head */}
      <div className="bg-primary p-3 text-center rounded-t-md">
        <p className="font-defaul text-2xl font-bold text-primary-content">OpsFlow</p>
      </div>

      {/** sidebar body */}
      <div className="px-5 py-5">
        <div className="containerization">
          <h2 className="flex items-center gap-x-5 px-5 py-3">
            <Container size={18} />
            <span>Containerization</span>
          </h2>
          <div className="h-[1px] w-full bg-neutral opacity-20"></div>
          <nav className="flex flex-col gap-y-2 py-3">
            <SideLink path="/" text="Projects" icon={<FolderCode size={18} />} />
            <SideLink path="/images" text="Images" icon={<Box size={18} />} />
          </nav>
        </div>
      </div>
    </aside>
  )
}
