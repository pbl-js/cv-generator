import React, { useContext } from "react";

import AddSchool from "views/education/AddSchool";
import AddSkills from "views/education/AddSkills";
import { CVdataContext } from "context/CVdataContext";

const Education = () => {
  const {
    cvdata: { schools, skills },
    dispatch
  } = useContext(CVdataContext);

  return (
    <>
      <AddSchool schools={schools} dispatch={dispatch} />
      <AddSkills skills={skills} dispatch={dispatch} />
    </>
  );
};

export default Education;
