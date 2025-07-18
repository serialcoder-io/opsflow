import { Folder, FolderSearch } from 'lucide-react'
import { JSX } from 'react'

export default function NewProjectForm(): JSX.Element {
  return (
    <form className="p-4">
      {/** folder and package manager selection */}
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

        {/** select package manager */}
        <div className="w-full">
          <p className="p-2 text-sm opacity-80">Package manager</p>
          <select defaultValue="Pick a color" className="select w-full">
            <option disabled={true}>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>

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

        {/** select package manager */}
        <div className="w-full">
          <p className="p-2 text-sm opacity-80">Package manager</p>
          <select defaultValue="Pick a color" className="select w-full">
            <option disabled={true}>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>
    </form>
  )
}
