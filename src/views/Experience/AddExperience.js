import React from "react";

import withPopup from "hoc/withPopup";
import AddExperiencePopUp from "./AddExperiencePopUp";

import InfoBox from "components/atoms/InfoBox";
import ItemBox from "components/molecules/ItemBox";
import Button from "components/atoms/Button";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { Brain } from "styled-icons/fa-solid/Brain";

const AddExperience = ({ handlePopupShow, isOpen }) => {
  return (
    <>
      <AddInfoTemplate title="Doświadczenie" icon={<Brain />}>
        <InfoBox color="orange">
          Wymień najważniejsze obowiązki w danej pracy i podkreśl swoje
          sukcesy.Postaraj się, żeby z Twojej historii zatrudnienia wynikało, że
          masz doświadczenie i kwalifikacje zgodne z wymaganiami potencjalnego
          pracodawcy.
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

      {isOpen && <AddExperiencePopUp handlePopupShow={handlePopupShow} />}
    </>
  );
};

export default withPopup(AddExperience);
