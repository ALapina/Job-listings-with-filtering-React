import React, { useState } from "react";
import JobsList from "./JobsList";
import Header from "./Header";
import Attribution from "./Attribution";
import data from "../data.json";

const App = () => {
  const selectedFilters = {
    roles: [],
    levels: [],
    languages: [],
    tools: [],
  };

  const [selected, setSelected] = useState(selectedFilters);
  return (
    <div>
      <Header
        selected={selected}
        setSelected={setSelected}
        selectedFilters={selectedFilters}
      />
      <JobsList data={data} selected={selected} setSelected={setSelected} />
      <Attribution />
    </div>
  );
};

export default App;
