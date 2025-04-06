import { useFont } from "../context/SwitchFontContext";
import Select from "./SelectComponent";

const filterOptions = [
  {
    label: "Sans Serif",
    value: ['Inter', 'sans-serif'].join(','),
  },
  {
    label: "Serif",
    value: ['Lora', 'serif'].join(','),
  },
  {
    label: "mono",
    value: ['Inconsolata', 'monospace'].join(','),
  },
]

function SwitchFont() {
  const { font, switchFont } = useFont();

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <Select options={filterOptions} value={
        filterOptions.find((option) => option.value === font)?.label || 'Sans Serif'
      } onChange={switchFont} />
    </div>
  )
}

export default SwitchFont