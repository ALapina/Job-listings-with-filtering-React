import React from "react";

const JobSection = ({ job, setSelected, selected }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;
  const isItNew = job.new;
  return (
    // https://www.pluralsight.com/guides/applying-classes-conditionally-react
    <section
      className={`bg-white max-w-8xl w-11/12 shadow-block mb-14 sm:mb-10 mx-auto rounded-md flex flex-wrap md:flex-nowrap justify-between items-center border-l-8 ${
        featured ? "border-primary" : "border-white"
      }`}
    >
      <div className="flex flex-col sm:flex-row my-6">
        <div className="ml-6 flex-shrink-0 w-16 sm:w-auto -mt-14 mb-4 sm:mb-0 sm:mt-0">
          {/* https://create-react-app.dev/docs/using-the-public-folder/ */}
          <img
            src={process.env.PUBLIC_URL + logo}
            alt={`${company} company logo`}
          />
        </div>

        <div className="ml-6">
          <div className="flex flex-wrap items-center">
            <p className="text-primary">{company}</p>
            <ul className="flex text-white text-xs">
              <li
                className={`bg-primary rounded-2xl ml-3 ${
                  isItNew ? "px-2" : "px-0"
                } ${isItNew ? "py-1" : "py-0"}`}
              >
                {isItNew ? "NEW!" : ""}
              </li>
              <li
                className={`bg-neutral-400 rounded-2xl ml-3 ${
                  featured ? "py-1" : "py-0"
                } ${featured ? "px-2" : "px-0"}`}
              >
                {featured ? "FEATURED" : ""}
              </li>
            </ul>
          </div>
          <h2 className="text-lg my-2">
            <a className="hover:text-primary" href="#top">
              {position}
            </a>
          </h2>
          <div>
            <ul className="flex flex-wrap items-center text-neutral-300 font-medium">
              <li>{postedAt}</li>
              <span className="h-1 w-1 rounded-full bg-neutral-300 mx-2"></span>
              <li>{contract}</li>
              <span className="h-1 w-1 rounded-full bg-neutral-300 mx-2"></span>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-6 md:mx-0md:mb-0 h-0.5 md:h-0 w-full md:w-0 bg-neutral-300 rounded-full"></div>

      <div className="mt-6 ml-6">
        <ul className="flex flex-wrap">
          <li>
            <button
              onClick={() => {
                setSelected({ ...selected, roles: [role] });
              }}
              className="font-bold bg-neutral-200 rounded-md hover:bg-primary hover:text-white mr-4 mb-4 p-2 text-primary"
            >
              {role}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setSelected({ ...selected, levels: [level] });
              }}
              className="font-bold bg-neutral-200 rounded-md hover:bg-primary hover:text-white mr-4 mb-4 p-2 text-primary"
            >
              {level}
            </button>
          </li>
          {languages.map((language) => {
            return (
              <li key={language}>
                <button
                  onClick={() => {
                    if (!selected.languages.includes(language)) {
                      setSelected({
                        ...selected,
                        languages: [...selected.languages, language],
                      });
                    }
                  }}
                  className="font-bold bg-neutral-200 rounded-md hover:bg-primary hover:text-white mr-4 mb-4 p-2 text-primary"
                >
                  {language}
                </button>
              </li>
            );
          })}
          {tools.map((tool) => {
            return (
              <li key={tool}>
                <button
                  onClick={() => {
                    if (!selected.tools.includes(tool)) {
                      setSelected({
                        ...selected,
                        tools: [...selected.tools, tool],
                      });
                    }
                  }}
                  className="font-bold bg-neutral-200 rounded-md hover:bg-primary hover:text-white mr-4 mb-4 p-2 text-primary"
                >
                  {tool}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default JobSection;
