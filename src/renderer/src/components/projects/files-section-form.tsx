import { JSX, useState } from 'react'
import Checkbox from '@renderer/ui/common/checkbox'

export default function FilesSectionsForm(): JSX.Element {
  const [selections, setSelections] = useState({
    dockerfile: true,
    compose: false,
    env: false
  })
  const handleCheckboxChange = (name: string, checked: boolean): void => {
    setSelections((prev) => ({ ...prev, [name]: checked }))
  }

  const onCheck = (checked: boolean, value: string): void => {
    handleCheckboxChange(value, checked)
    console.log(`${checked ? 'Add' : 'Remove'} ${value} file`)
  }

  return (
    <div className="grid grid-cols-1 py-2">
      <div className="">
        <p className="p-2 text-sm opacity-80">Files to generate</p>
        <div className="w-full p-4 border rounded-lg flex flex-wrap gap-x-6 gap-y-3">
          <Checkbox
            label="Dockerfile"
            value="dockerfile"
            checked={selections.dockerfile}
            onChange={onCheck}
          />
          <Checkbox
            label="docker-compose"
            value="compose"
            checked={selections.compose}
            onChange={onCheck}
          />
          <Checkbox label=".env" value="env" checked={selections.env} onChange={onCheck} />
        </div>
      </div>
    </div>
  )
}
