import React, { useContext } from "react";
import PdfGenerator from "components/pdfGenerator/PdfGenerator";

import { CVdataContext } from "context/CVdataContext";

const Template = () => {
  const { cvdata } = useContext(CVdataContext);

  return (
    <div>
      <PdfGenerator cvdata={cvdata} />
    </div>
  );
};

export default Template;
