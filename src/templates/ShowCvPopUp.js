import React from "react";
import PropTypes from "prop-types";

import TextInput from "../components/organisms/TextInput";
import BoxHeader from "../components/atoms/BoxHeader";
// import DarkBackground from "../../components/atoms/DarkBackground";
import PopUpBox from "../components/atoms/PopUpBox";
import Button from "../components/atoms/Button";
import PdfGenerator from "../components/pdfGenerator/PdfGenerator";

import { Close } from "styled-icons/material/Close";
import { School } from "styled-icons/material/School";

const ShowCvPopUp = ({ handlePopupShow }) => {
  return (
    <>
      <PopUpBox>
        <BoxHeader>
          <School />
          <h1>Wykształcenie</h1>
          <Close onClick={handlePopupShow} />
        </BoxHeader>

        <PdfGenerator />

        <Button>Zapisz</Button>
      </PopUpBox>
      {/* <DarkBackground /> */}
    </>
  );
};

ShowCvPopUp.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default ShowCvPopUp;
