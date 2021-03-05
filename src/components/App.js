import React, { useState } from "react";
import JobsList from "./JobsList";
import FilterPanel from "./FilterPanel";
import Attribution from "./Attribution";
import data from "../data.json";

const App = () => {
  const [selected, setSelected] = useState({
    roles: [],
    levels: [],
    languages: [],
    tools: [],
  });
  return (
    <div>
      {/* Если селектед пуст - не отображать панель */}
      <FilterPanel selected={selected} setSelected={setSelected} />
      <JobsList data={data} selected={selected} setSelected={setSelected} />
      <Attribution />
    </div>
  );
};

export default App;
