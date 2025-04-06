'use client';
import { useDarkMode } from '../context/DarkModeContext';

const ToggleDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleDarkMode = () => {
    toggleDarkMode();
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDarkMode}
          className="sr-only peer"
          onChange={handleDarkMode}
        />
        <div className="relative w-11 h-6 bg-gray-light peer-checked:bg-purple peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
      </label>
      <img
        alt='theme icon'
        src={'/./assets/images/icon-moon.svg'}
        width={24}
        height={24}
      />
    </div>
  );
};

export default ToggleDarkMode;