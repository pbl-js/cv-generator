import React, { useContext } from "react";

import AddExperience from "views/experience/AddExperience";
import AddAboutMe from "views/experience/AddAboutMe";

import { CVdataContext } from "context/CVdataContext";

const Experience = () => {
  const {
    cvdata: { experience, aboutMe },
    dispatch
  } = useContext(CVdataContext);

  return (
    <>
      <AddExperience experience={experience} dispatch={dispatch} />
      <AddAboutMe aboutMe={aboutMe} dispatch={dispatch} />
    </>
  );
};

export default Experience;
