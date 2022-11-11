import React, { useState } from "react";

const Dropdown = (props, {select, setSelect}) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState();
  return (
    <div className="mt-2">
      <label for="combobox" class="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <div class="relative mt-1">
        <input
          id="combobox"
          type="text"
          class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          role="combobox"
          aria-controls="options"
          aria-expanded="false"
          value={selected}
        />
        <button
          onClick={() => setIsActive(!isActive)}
          type="button"
          class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
        >
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {/* Results options here */}
        {isActive && (
          <ul
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            id="options"
            role="listbox"
          >
            {props.options.map((item) => (
              <li
                className="relative select-none py-2 pl-8 pr-4 text-gray-900 cursor-pointer hover:bg-indigo-600 hover:text-white"
                id="option-0"
                tabindex="-1"
                onClick={() => {
                    setSelected(item.name);
                  setIsActive(false);
                }}
              >
                <span class="block truncate">{item.name}</span>

                <span class="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600">
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
