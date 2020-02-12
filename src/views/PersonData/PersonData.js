import React, { useContext } from "react";

import AddBasicData from "views/PersonData/AddBasicData";
import AddContact from "views/PersonData/AddContact";

import { CVdataContext } from "context/CVdataContext";

const PersonData = props => {
  const {
    cvdata: { personData, contact },
    dispatch
  } = useContext(CVdataContext);
  return (
    <>
      <AddBasicData personData={personData} dispatch={dispatch} />
      <AddContact contact={contact} dispatch={dispatch} />
    </>
  );
};

export default PersonData;
