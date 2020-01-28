import React from "react";
import PropTypes from "prop-types";

import PDFViewer from "components/pdfGenerator/PDFViewer";
import AddInfoPopUpTemplate from "templates/AddInfoPopUpTemplate";

const ShowCvPopUp = ({ handlePopupShow }) => {
  return (
    <AddInfoPopUpTemplate title="Podgląd CV" handlePopupShow={handlePopupShow}>
      <PDFViewer />
    </AddInfoPopUpTemplate>
  );
};

ShowCvPopUp.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default ShowCvPopUp;
