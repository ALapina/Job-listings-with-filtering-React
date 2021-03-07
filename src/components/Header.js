import React from "react";
import FilterPanel from "./FilterPanel";

const Header = ({ selected, setSelected, selectedFilters }) => {
  const isSelectedEmpty = Object.values(selected).every(
    (currentValue) => currentValue.length === 0
  );

  return (
    <header className="mb-14 sm:mb-10">
      <div
        className="bg-primary h-36"
        // https://create-react-app.dev/docs/using-the-public-folder/
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/bg-header-desktop.svg"
          })`,
        }}
      ></div>
      {!isSelectedEmpty && (
        <FilterPanel
          selected={selected}
          setSelected={setSelected}
          selectedFilters={selectedFilters}
        />
      )}
    </header>
  );
};

export default Header;
