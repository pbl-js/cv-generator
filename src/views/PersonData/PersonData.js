import React, { useContext } from "react";

import AddBasicData from "views/personData/AddBasicData";
import AddContact from "views/personData/AddContact";

import { CVdataContext } from "context/CVdataContext";

const PersonData = props => {
  const { cvdata } = useContext(CVdataContext);
  return (
    <>
      <AddBasicData context={cvdata} />
      <AddContact />
    </>
  );
};

export default PersonData;
