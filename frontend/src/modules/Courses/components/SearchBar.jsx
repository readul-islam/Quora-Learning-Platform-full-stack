import React, { useState } from 'react';
import { searchCourses } from '../api';

const SearchBar = ({ setCourses }) => {
  const [selectCategory, setSelectCategory] = useState('All Categories');
  const [open, setOpen] = useState(false);
  const categories = ['Frontend', 'Backend'];
  // search handler
  const handleOnChangeSearchHandler = async (e) => {
    const result = await searchCourses(e.target.value);
    if (result.data[0]) {
      setCourses(result.data);
    }
  };

  return (
    <>
      <form>
        <div className="flex relative">
          

          <div className="relative w-full">
            <input
              onChange={handleOnChangeSearchHandler}
              name="search"
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border  rounded-full  border-gray-300 focus:ring-0 focus:outline-none"
              placeholder="Search courses name.. author name..."
              required
            />
          
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
