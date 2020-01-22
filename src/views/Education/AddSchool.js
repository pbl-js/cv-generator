import React from "react";

import AddSchoolPopUp from "./AddSchoollPopUp";
import withPopup from "hoc/withPopup";

import Button from "components/atoms/Button";
import InfoBox from "components/atoms/InfoBox";
import ItemBox from "components/molecules/ItemBox";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { School } from "styled-icons/material/School";

const AddSchool = ({ schools, dispatch, handlePopupShow, isOpen }) => {
  console.log(schools.items);
  return (
    <>
      <AddInfoTemplate
        title={"Wykształcenie"}
        icon={<School />}
        handleClick={handlePopupShow}
      >
        <InfoBox color="orange">
          Wpisz ostatnio ukończoną szkołę. Jeśli masz wykształcenie wyższe lub
          podyplomowe, podaj nazwę uczelni i kierunek studiów.
        </InfoBox>

        {schools.items.map(school => (
          <ItemBox
            id={school.id}
            key={school.id}
            handleEdit={handlePopupShow}
            dispatch={dispatch}
          >
            Poziom wykształcenia: {school.educationLevel}
            <br />
            Nazwa szkoły: {school.schoolName}
            <br />
            Specjalizacja: {school.specialization}
            <br />
            Rok rozpoczęcia: {school.start}
            <br />
            Rok zakończenia: {school.end}
          </ItemBox>
        ))}

        <Button onClick={handlePopupShow}>Dodaj pozycję</Button>
      </AddInfoTemplate>

      {isOpen && (
        <AddSchoolPopUp
          title={"Wykształcenie"}
          icon={<School />}
          handlePopupShow={handlePopupShow}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default withPopup(AddSchool);
