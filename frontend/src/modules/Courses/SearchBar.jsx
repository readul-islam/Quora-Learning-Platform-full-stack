import React, { useState } from "react";

const SearchBar = () => {
  const [selectCategory, setSelectCategory] = useState("All Categories");
  const [open, setOpen] = useState(false);
  const categories = ["Frontend", "Backend"];
  return (
    <>
      <form>
        <div class="flex relative">
          <label
            for="search-dropdown"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            onClick={() => setOpen(!open)}
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 relative z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-0 focus:outline-none focus:ring-gray-100  "
            type="button"
          >
            {selectCategory}
            <svg
              class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
            <div
              id="dropdown"
              class={`z-10 absolute top-0 left-0   ${
                open ? "block" : "hidden"
              }  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                class={`py-2text-sm text-gray-700 dark:text-gray-200    `}
                aria-labelledby="dropdown-button"
              >
                {categories.map((category) => (
                  <>
                    <li onClick={() => setSelectCategory(category)}>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {category}
                      </button>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </button>

          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-0 focus:outline-none"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
            <button
              type="submit"
              class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
