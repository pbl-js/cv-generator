import React from "react";
import PropTypes from "prop-types";

import TextInput from "components/organisms/TextInput";
// import DarkBackground from "components/atoms/DarkBackground";
import PopUpBox from "components/atoms/PopUpBox";
import Button from "components/atoms/Button";
import AddInfoPopUpTemplate from "templates/AddInfoPopUpTemplate";

import { School } from "styled-icons/material/School";

const AddSchoolPopUp = ({ title, icon, handlePopupShow }) => {
  return (
    <>
      <AddInfoPopUpTemplate
        title={title}
        icon={icon}
        handlePopupShow={handlePopupShow}
      >
        <TextInput label="Nazwa sekcji*" placeholder="Np: 2019" />
      </AddInfoPopUpTemplate>
      {/* <DarkBackground /> */}
    </>
  );
};

AddSchoolPopUp.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default AddSchoolPopUp;
