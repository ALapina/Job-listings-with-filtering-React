import React from "react";

const FilterPanel = ({ selected, setSelected, selectedFilters }) => {
  const renderSelected = () => {
    const items = [];
    for (const [key, value] of Object.entries(selected)) {
      value.forEach((el) => {
        items.push(
          <li className="bg-neutral-200 rounded-md mr-4 mb-4" key={el}>
            <span className="p-2 text-primary sm:p-3">{el}</span>
            <button
              // remove filter element from selected
              onClick={() => {
                setSelected({
                  ...selected,
                  [key]: selected[key].filter((item) => item !== el),
                });
              }}
              aria-label={`delete ${el} filter`}
              className="p-3 bg-primary text-white rounded-r-md hover:bg-neutral-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                />
              </svg>
            </button>
          </li>
        );
      });
    }
    return items;
  };

  return (
    <div className="flex justify-between bg-white rounded-md m-auto -mt-10 max-w-8xl w-11/12 shadow-block">
      <ul className="flex flex-wrap pt-6 pr-6 pl-6">{renderSelected()}</ul>
      <button
        onClick={() => {
          setSelected(selectedFilters);
        }}
        className="self-center font-bold text-neutral-300 mr-5 hover:text-primary hover:underline"
      >
        Clear
      </button>
    </div>
  );
};

export default FilterPanel;
