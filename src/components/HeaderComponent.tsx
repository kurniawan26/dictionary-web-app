import SwitchFont from "./SwitchFont"
import ToggleDarkMode from "./ToggleDarkMode"

function HeaderComponent() {
  return (
    <div className="header flex justify-between items-center">
      <div className="logo-wrapper h-[32px] w-[32px]">
        <img src="assets/images/logo.svg" alt="logo" className="w-full h-full" />
      </div>

      <div className="flex items-center justify-center gap-4">
        <SwitchFont />
        <ToggleDarkMode />
      </div>

    </div>
  )
}

export default HeaderComponent