import React from "react";

import AddSchoolPopUp from "./AddSchoollPopUp";
import withPopup from "hoc/withPopup";

import Box from "components/atoms/Box";
import BoxHeader from "components/atoms/BoxHeader";
import Button from "components/atoms/Button";
import InfoBox from "components/atoms/InfoBox";
import ItemBox from "components/molecules/ItemBox";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { School } from "styled-icons/material/School";
import { Settings } from "styled-icons/material/Settings";

const AddSchool = ({ handlePopupShow, isOpen }) => {
  console.log(isOpen);
  return (
    <>
      <AddInfoTemplate>
        <BoxHeader>
          <School />
          <h1>Wykształcenie</h1>
          <Settings />
        </BoxHeader>

        <InfoBox color="orange">
          Wpisz ostatnio ukończoną szkołę. Jeśli masz wykształcenie wyższe lub
          podyplomowe, podaj nazwę uczelni i kierunek studiów.
        </InfoBox>

        <ItemBox handleEdit={handlePopupShow}>
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
        </ItemBox>

        <Button onClick={handlePopupShow}>Dodaj pozycję</Button>
      </AddInfoTemplate>

      {isOpen && <AddSchoolPopUp handlePopupShow={handlePopupShow} />}
    </>
  );
};

export default withPopup(AddSchool);
