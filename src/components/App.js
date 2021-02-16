import React from "react";
import VacancyList from "./VacancyList3";

import data from "../data.json";

const App = () => {
  // console.log(data);
  return (
    <div className="container">
      {/* Фильтр панель нужно будет вытащить из VacancyList как отдельный компонент */}
      {/* <div className="filter-panel" id="filter-panel"></div> */}
      <VacancyList data={data} />

      <p>APP</p>
    </div>
  );
};

export default App;
