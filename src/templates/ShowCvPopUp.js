import React from "react";
import PropTypes from "prop-types";

import PDFViewer from "components/pdfGenerator/PDFViewer";
import PopupTemplate from "templates/PopupTemplate";

const ShowCvPopUp = ({ handlePopupShow }) => {
  return (
    <PopupTemplate title="Podgląd CV" handlePopupShow={handlePopupShow}>
      <PDFViewer />
    </PopupTemplate>
  );
};

ShowCvPopUp.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default ShowCvPopUp;
