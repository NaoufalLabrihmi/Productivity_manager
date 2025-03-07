import React from 'react';
import SearchIcon from '@/Components/Icons/SearchIcon';
import MultipleSelectCheckmarks from '@/Components/Inputs/Select/MultipleSelectCheckmarks';

export default function ProjectIndexFilter(props) {
  function updateFilter(e) {
    props.updateFilter(e.target.name, e.target.value);
  }
  return (
    <div className={'flex flex-col'}>
      <div className="flex flex-row w-full border border-gray-300 rounded-lg">
        <div className="flex items-center px-3 pointer-events-none ">
          <SearchIcon
            svgClassName={'w-5 h-5 text-gray-500 dark:text-gray-400'}
          />
        </div>
        <form>
          <input
            type="text"
            id="simple-search"
            className="bg-white border-0 text-gray-900 text-sm rounded-lg block w-full pl-3 p-2.5  dark:bg-white dark:placeholder-gray-400 dark:text-black"
            placeholder="Search"
            name="search"
            value={props.filter.search}
            onChange={updateFilter}
          ></input>
        </form>
      </div>
      <div className={'flex flex-row mt-2'}>
        <MultipleSelectCheckmarks
          name="skill"
          label={'Skills'}
          data={props.skills}
          onChange={updateFilter}
        />
        <MultipleSelectCheckmarks
          name="region"
          label={'Regions'}
          data={props.regions}
          onChange={updateFilter}
        />
      </div>
    </div>
  );
}
