import React from "react";

import AddBasicData from "./AddBasicData";
import AddContact from "./AddContact";

const PersonData = props => {
  return (
    <>
      <AddBasicData />
      <AddContact />
    </>
  );
};

export default PersonData;
