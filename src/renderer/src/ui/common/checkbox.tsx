import { JSX } from 'react'
import { CheckboxProps } from '@renderer/types'

export default function Checkbox({ label, checked, value, onChange }: CheckboxProps): JSX.Element {
  return (
    <label className="label">
      <input
        type="checkbox"
        checked={checked}
        value={value}
        className="checkbox checkbox-sm"
        onChange={(e) => onChange(e.target.checked, value)}
      />
      <span className="text-sm">{label}</span>
    </label>
  )
}
