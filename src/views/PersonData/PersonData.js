import React from "react";

import AddBasicData from "views/personData/AddBasicData";
import AddContact from "views/personData/AddContact";

const PersonData = props => {
  return (
    <>
      <AddBasicData />
      <AddContact />
    </>
  );
};

export default PersonData;
