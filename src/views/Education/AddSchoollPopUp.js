import React from "react";
import PropTypes from "prop-types";

import TextInput from "../../components/organisms/TextInput";
import BoxHeader from "../../components/atoms/BoxHeader";
// import DarkBackground from "../../components/atoms/DarkBackground";
import PopUpBox from "../../components/atoms/PopUpBox";
import Button from "../../components/atoms/Button";

import { Close } from "styled-icons/material/Close";
import { School } from "styled-icons/material/School";

const AddSchoolPopUp = ({ handlePopupShow }) => {
  return (
    <>
      <PopUpBox>
        <BoxHeader>
          <School />
          <h1>Wykształcenie</h1>
          <Close onClick={handlePopupShow} />
        </BoxHeader>

        <TextInput label="Poziom wykształcenia*" placeholder="Np: Inżynier" />

        <TextInput
          label="Nazwa szkoły*"
          placeholder="Np: Zespół szkół im. Władysława Grabskiego"
        />

        <TextInput
          label="Specjalizacja"
          placeholder="Np: Programowanie i technologie web"
        />

        <TextInput label="Rok rozpoczęcia*" placeholder="Np: 2012" />

        <TextInput label="Rok zakończenia*" placeholder="Np: 2019" />

        <Button>Zapisz</Button>
      </PopUpBox>
      {/* <DarkBackground /> */}
    </>
  );
};

AddSchoolPopUp.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default AddSchoolPopUp;
