import React from "react";
import JobSection from "./JobSection";

const JobsList = ({ data, setSelected, selected }) => {
  const renderJobsList = data
    .filter((item) => {
      // Filter jobs that mustn't be rendered
      const rolesNotEmpty = selected.roles.length !== 0;
      const itemRolesIsInSelected = selected.roles.includes(item.role);

      const levelsNotEmpty = selected.levels.length !== 0;
      const offerLevelsIsInSelected = selected.levels.includes(item.level);

      const languagesNotEmpty = selected.languages.length !== 0;
      const offerLanguagesIsInSelected = selected.languages.every(
        (currentValue) => item.languages.includes(currentValue)
      );

      const toolsNotEmpty = selected.tools.length !== 0;
      const offerToolsIsInSelected = selected.tools.every((currentValue) =>
        item.tools.includes(currentValue)
      );

      //return false if job mustn't be rendered
      if (rolesNotEmpty === true && itemRolesIsInSelected === false) {
        return false;
      }
      if (levelsNotEmpty === true && offerLevelsIsInSelected === false) {
        return false;
      }
      if (languagesNotEmpty === true && offerLanguagesIsInSelected === false) {
        return false;
      }
      if (toolsNotEmpty === true && offerToolsIsInSelected === false) {
        return false;
      }
      //else - return true and render this job item
      return true;
    })
    .map((job) => {
      const id = job.id;
      return (
        <JobSection
          job={job}
          setSelected={setSelected}
          selected={selected}
          key={id}
        />
      );
    });
  return <main>{renderJobsList}</main>;
};

export default JobsList;
