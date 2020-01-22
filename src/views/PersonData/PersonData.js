import React, { useContext } from "react";

import AddBasicData from "views/personData/AddBasicData";
import AddContact from "views/personData/AddContact";

import { CVdataContext } from "context/CVdataContext";

const PersonData = props => {
  const {
    cvdata: { personData, contact }
  } = useContext(CVdataContext);
  return (
    <>
      <AddBasicData personData={personData} />
      <AddContact contacts={contact} />
    </>
  );
};

export default PersonData;
