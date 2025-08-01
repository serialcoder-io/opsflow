import { Folder, FolderSearch, Package } from 'lucide-react'
import { JSX, useState } from 'react'
import FilesSection from './filesSection'
import Checkbox from '@renderer/ui/common/checkbox'

export default function NewProjectForm(): JSX.Element {
  const [selections, setSelections] = useState({
    redis: false,
    celery: false,
    rabbitmq: false,
    nginx_reverse_proxy: false,
    nginx_web_server: false
  })

  const handleCheckboxChange = (name: string, checked: boolean): void => {
    setSelections((prev) => ({ ...prev, [name]: checked }))
  }

  const onCheck = (checked: boolean, value: string): void => {
    handleCheckboxChange(value, checked)
    console.log(`${checked ? 'Add' : 'Remove'} ${value} file`)
  }

  return (
    <form className="p-4">
      {/** folder and language selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-2">
        {/** select folder path */}
        <div className="md:col-span-2">
          <p className="p-2 text-sm opacity-80">Project folder</p>

          <div className="join border rounded-lg w-full">
            <label className="input validator join-item">
              <Folder size={17} />
              <input type="text" className="outline-none" placeholder="/path/to/project" required />
            </label>
            <button className="btn join-item font-normal" type="button">
              <FolderSearch size={17} />
              <span>Browse</span>
            </button>
          </div>
        </div>

        {/** select Language */}
        <div className="w-full">
          <p className="p-2 text-sm opacity-80">Language</p>
          <select defaultValue="Pick a color" className="select w-full">
            <option disabled={true}>Pick a langugage</option>
            <option>Python</option>
            <option>TypeScript</option>
            <option>JavaScript</option>
          </select>
        </div>
      </div>

      {/** framework and package manager */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-2">
        {/** Framework */}
        <div className="md:col-span-2">
          <p className="p-2 text-sm opacity-80">Framework</p>
          <select defaultValue="Pick a color" className="select w-full">
            <option disabled={true}>Pick a framework</option>
            <option>Django</option>
            <option>FastApi</option>
            <option>Flask</option>
            <option>Next.js</option>
            <option>Angular</option>
            <option>React</option>
          </select>
        </div>

        {/** Package manager */}
        <div className="">
          <p className="p-2 text-sm opacity-80">Package manager</p>
          <select defaultValue="Pick a color" className="select w-full">
            <option disabled={true}>Pick a package manager</option>
            <option>pip</option>
            <option>poetry</option>
            <option>uv</option>
            <option>npm</option>
            <option>pnpm</option>
            <option>yarn</option>
          </select>
        </div>
      </div>

      {/** Base image and database */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-2">
        {/** Base image */}
        <div className="md:col-span-2">
          <p className="p-2 text-sm opacity-80">Base image</p>
          <label className="input w-full">
            <Package size={17} />
            <input type="text" className="" placeholder="base image" />
          </label>
        </div>

        {/** Database */}
        <div className="w-full">
          <p className="p-2 text-sm opacity-80">Database</p>
          <select defaultValue="Pick a Database" className="select w-full">
            <option disabled={true}>Pick a Database</option>
            <option>PostgreSQL</option>
            <option>MySQL</option>
            <option>SQLite</option>
            <option>MongoDB</option>
          </select>
        </div>
      </div>

      {/** services */}
      <div className="grid grid-cols-1 py-2">
        <div className="">
          <p className="p-2 text-sm opacity-80">Services</p>
          <div className="w-full p-4 border rounded-lg flex flex-wrap gap-x-6 gap-y-3">
            <Checkbox label="Redis" value="redis" checked={selections.redis} onChange={onCheck} />
            <Checkbox
              label="Celery"
              value="celery"
              checked={selections.celery}
              onChange={onCheck}
            />
            <Checkbox
              label="RabbitMQ"
              value="rabbitmq"
              checked={selections.rabbitmq}
              onChange={onCheck}
            />
            <Checkbox
              label="Nginx (as reverse proxy)"
              value="nginx_reverse_proxy"
              checked={selections.nginx_reverse_proxy}
              onChange={onCheck}
            />
            <Checkbox
              label="Nginx (as web server)"
              value="nginx_web_server"
              checked={selections.nginx_web_server}
              onChange={onCheck}
            />
          </div>
        </div>
      </div>

      {/** File to generate */}
      <FilesSection />
    </form>
  )
}
