import React from "react";

import AddSchoolPopUp from "./AddSchoollPopUp";
import withPopup from "../../hoc/withPopup";

import Box from "../../components/atoms/Box";
import BoxHeader from "../../components/atoms/BoxHeader";
import Button from "../../components/atoms/Button";
import InfoBox from "../../components/atoms/InfoBox";

import { Edit } from "styled-icons/material/Edit";
import { Trash } from "styled-icons/fa-solid/Trash";
import { School } from "styled-icons/material/School";
import { Settings } from "styled-icons/material/Settings";

const AddSchool = ({ handlePopupShow, isOpen }) => {
  console.log(isOpen);
  return (
    <Box>
      <BoxHeader>
        <School />
        <h1>Wykształcenie</h1>
        <Settings />
      </BoxHeader>

      <InfoBox color="orange">
        Wpisz ostatnio ukończoną szkołę. Jeśli masz wykształcenie wyższe lub
        podyplomowe, podaj nazwę uczelni i kierunek studiów.
      </InfoBox>

      <InfoBox>
        <Trash />
        <Edit onClick={handlePopupShow} />
        Okres: {"09.2015 - 02.2018"}
        <br />
        Stanowisko: {"Własna działalność gospodarcza"}
        <br />
        Firma: {"PADBOX K.Lipiński P.Miłczak"}
        <br />
        Lokalicaja: {"Lublin"}
        <br />
        <br />
        Opis: {"Zakres"}
      </InfoBox>

      <Button onClick={handlePopupShow}>Dodaj pozycję</Button>

      {isOpen && <AddSchoolPopUp handlePopupShow={handlePopupShow} />}
    </Box>
  );
};

export default withPopup(AddSchool);
