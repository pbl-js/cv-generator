import React from "react";

import AddSchoolPopUp from "views/education/AddSchoollPopUp";
import withPopup from "hoc/withPopup";

import Button from "components/atoms/Button";
import InfoBox from "components/atoms/InfoBox";
import ItemBox from "components/molecules/ItemBox";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { School } from "styled-icons/material/School";

import { DELETE_SCHOOL } from "actions/actionTypes";

const AddSchool = ({ schools, dispatch, handlePopupShow, isOpen }) => {
  return (
    <>
      <AddInfoTemplate title={"Wykształcenie"} icon={<School />} handleClick={handlePopupShow}>
        <InfoBox color="orange">
          Wpisz ostatnio ukończoną szkołę. Jeśli masz wykształcenie wyższe lub podyplomowe, podaj nazwę uczelni i
          kierunek studiów.
        </InfoBox>

        {schools.items.map(item => (
          <ItemBox
            key={item.id}
            defaultData={item}
            icon={<School />}
            dispatch={dispatch}
            Popup={AddSchoolPopUp}
            deleteItem={() => dispatch({ type: DELETE_SCHOOL, id: item.id })}
          >
            Poziom wykształcenia: {item.educationLevel}
            <br />
            Nazwa szkoły: {item.schoolName}
            <br />
            Specjalizacja: {item.specialization}
            <br />
            Rok rozpoczęcia: {item.start}
            <br />
            Rok zakończenia: {item.end}
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
