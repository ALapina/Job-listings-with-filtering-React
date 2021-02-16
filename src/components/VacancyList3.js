import React, { Fragment, useState } from "react";

const VacancyList = ({ data }) => {
  const [selected, setSelected] = useState({
    roles: [],
    levels: [],
    languages: [],
    tools: [],
  });
  // console.log(selected);

  const renderVacancyList = data
    .filter((item) => {
      // Если в в selected.roles что то есть то возвращаем true, если selected.roles пустой то возвращаем false
      const rolesNotEmpty = selected.roles.length !== 0;
      // Берем айтем - это объект с одной вакансией и проверяем, что роль в этой вакансии например Frontent соответсвует той роли что находится в selected.roles
      // Если роль в вакансии соответствует роли в selected.roles то возвращаем true
      const itemRolesIsInSelected = selected.roles.includes(item.role);

      const levelsNotEmpty = selected.levels.length !== 0;
      //все что в селектед вернут тру, все что не в селектед вернут фалсе
      const itemLevelsIsInSelected = selected.levels.includes(item.level);

      const languagesNotEmpty = selected.languages.length !== 0;

      //every проходит по каждому элементу в массиве и проверяем что item.languages содержит этот жлемент
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
      //https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript

      const itemLanguageIsInSelected = selected.languages.every(
        (currentValue) => item.languages.includes(currentValue)
      );

      const toolsNotEmpty = selected.tools.length !== 0;
      const itemToolsIsInSelected = selected.tools.every((currentValue) =>
        item.tools.includes(currentValue)
      );

      // Берем все элементы что не соответствуют тому что в selected.roles, например если в selected.roles у нас Frontend, то фулстак будет возвращать false
      // И если в selected.roles вообще что то есть, тк если в selected.roles ничего нет, то он по умолчанию возвращает false
      // И если эти два условия работают то возвращаем false, то есть никакого фильтра не будет и мы дальше мапаем и рендерим всю дату
      // То есть если selected.roles пустой то рендерим весь объект
      // А если что то есть, то не отображаем все кроме того что в selected.roles
      if (itemRolesIsInSelected === false && rolesNotEmpty === true) {
        return false;
      }
      if (itemLevelsIsInSelected === false && levelsNotEmpty === true) {
        return false;
      }

      if (itemLanguageIsInSelected === false && languagesNotEmpty === true) {
        return false;
      }
      if (itemToolsIsInSelected === false && toolsNotEmpty === true) {
        return false;
      }

      return true;
    })
    .map((vacancy) => {
      // TODO: Create Component VacancyItem

      return (
        <div className="company-wrapper" key={vacancy.company}>
          <div className="filter">
            <div
              className="role filter-element"
              //как сделать setSelected на объект нашла на https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
              onClick={() => {
                setSelected({
                  ...selected,
                  roles: [vacancy.role],
                });
              }}
            >
              {vacancy.role}
            </div>
            <div
              className="level filter-element"
              onClick={() => {
                setSelected({
                  ...selected,
                  levels: [vacancy.level],
                });
              }}
            >
              {vacancy.level}
            </div>
            {/* Опять мап с ретерном */}
            <div className="languages filter-element">
              {vacancy.languages.map((language) => {
                return (
                  <div
                    key={language}
                    className={`filter-element ${language}`}
                    //Если в selected.languages ещё нет данного языка (например html), то пушим этот язык в selected.languages
                    onClick={() => {
                      if (!selected.languages.includes(language)) {
                        setSelected({
                          ...selected,
                          languages: [...selected.languages, language],
                        });
                      }
                    }}
                  >
                    {language}
                  </div>
                );
              })}
            </div>
            <div className="tools filter-element">
              {vacancy.tools.map((tool) => {
                return (
                  <div
                    key={tool}
                    className={`filter-element ${tool}`}
                    onClick={() => {
                      if (!selected.tools.includes(tool)) {
                        setSelected({
                          ...selected,
                          tools: [...selected.tools, tool],
                        });
                      }
                    }}
                  >
                    {tool}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });

  const renderElement = selected.languages.map((element) => {
    return (
      <span
        key={element}
        className="language-element"
        onClick={() => {
          setSelected({
            ...selected,
            languages: selected.languages.filter((item) => item !== element),
          });
        }}
      >
        {element}
      </span>
    );
  });

  const renderTools = selected.tools.map((element) => {
    return (
      <span
        key={element}
        className="tool-element"
        onClick={() => {
          setSelected({
            ...selected,
            tools: selected.tools.filter((item) => item !== element),
          });
        }}
      >
        {element}
      </span>
    );
  });

  //Object entries???
  //https://stackoverflow.com/questions/46187518/object-entries-map-to-render-react-components-array

  return (
    <Fragment>
      {/* TODO: Create component FilterPanel */}

      <div className="filter-panel" id="filter-panel">
        <button
          className="role-element"
          onClick={() => {
            setSelected({
              ...selected,
              roles: selected.roles.filter(
                (item) => item !== selected.roles.toString()
              ),
            });
          }}
        >
          {selected.roles}
        </button>
        <div
          className="level-element"
          onClick={() => {
            setSelected({
              ...selected,
              levels: selected.levels.filter(
                (item) => item !== selected.levels.toString()
              ),
            });
          }}
        >
          {selected.levels}
        </div>
        <div>{renderElement}</div>
        <div>{renderTools}</div>
      </div>
      <div className="main-block">
        <p>hui</p>
        {renderVacancyList}
      </div>
    </Fragment>
  );
};

export default VacancyList;
