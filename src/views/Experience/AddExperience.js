import React from "react";

import withPopup from "hoc/withPopup";
import AddExperiencePopUp from "./AddExperiencePopUp";

import InfoBox from "components/atoms/InfoBox";
import ItemBox from "components/molecules/ItemBox";
import Button from "components/atoms/Button";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { Brain } from "styled-icons/fa-solid/Brain";

import { DELETE_EXPERIENCE } from "actions/actionTypes";

const AddExperience = ({ handlePopupShow, isOpen, experience, dispatch }) => {
  return (
    <>
      <AddInfoTemplate title="Doświadczenie" icon={<Brain />}>
        <InfoBox color="orange">
          Wymień najważniejsze obowiązki w danej pracy i podkreśl swoje sukcesy.Postaraj się, żeby z Twojej historii
          zatrudnienia wynikało, że masz doświadczenie i kwalifikacje zgodne z wymaganiami potencjalnego pracodawcy.
        </InfoBox>

        {experience.items.map(item => (
          <ItemBox
            key={item.id}
            defaultData={item}
            icon={<Brain />}
            dispatch={dispatch}
            Popup={AddExperiencePopUp}
            deleteItem={() => dispatch({ type: DELETE_EXPERIENCE, id: item.id })}
          >
            Okres: {`${item.start} - ${item.end}`}
            <br />
            Stanowisko: {item.position}
            <br />
            Firma: {item.company}
            <br />
            Lokalicaja: {item.city}
            <br />
            <br />
            Opis: {item.description}
          </ItemBox>
        ))}

        <Button onClick={handlePopupShow}>Dodaj pozycję</Button>
      </AddInfoTemplate>

      {isOpen && (
        <AddExperiencePopUp
          title="Doświadczenie"
          icon={<Brain />}
          handlePopupShow={handlePopupShow}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default withPopup(AddExperience);
