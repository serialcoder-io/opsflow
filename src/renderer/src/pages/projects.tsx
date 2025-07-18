import { JSX } from 'react'
import NewProjectForm from '@renderer/components/projects/new-project-form'

export default function Projects(): JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/** new project */}
      <div className="border border-neutral rounded-lg">
        {/** header */}
        <div className="bg-slate-100 rounded-t-lg p-4 border-b border-neutral">
          <h2 className="">New project</h2>
        </div>

        {/** body */}
        <NewProjectForm />
      </div>

      {/** Preview */}
      <div></div>
    </div>
  )
}
