import { useState } from "react";

interface ISelectProps {
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: (value: string) => void;
}

function Select(
  { options, value, onChange }: ISelectProps
) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-34">
      <div
        className="bg-white dark:bg-darkest rounded-md cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span className="text-gray-700 dark:text-gray-300 mr-2">{value}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"} text-purple dark:text-gray-300`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-300"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;