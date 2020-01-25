import React, { useState } from "react";
import PropTypes from "prop-types";

import TextInput from "components/organisms/TextInput";
import AddInfoPopUpTemplate from "templates/AddInfoPopUpTemplate";

import { ADD_EXPERIENCE, EDIT_EXPERIENCE } from "actions/actionTypes";

const AddSchoolPopUp = ({
  dispatch,
  title,
  icon,
  handlePopupShow,
  defaultData = {
    position: "",
    company: "",
    city: "",
    start: "",
    end: "",
    description: ""
  }
}) => {
  const [experience, setExperience] = useState(defaultData);

  const { position, company, city, start, end, description } = experience;

  const onChange = e => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    defaultData.position === ""
      ? dispatch({ type: ADD_EXPERIENCE, experienceItem: experience })
      : dispatch({ type: EDIT_EXPERIENCE, id: defaultData.id, experienceItem: experience });

    handlePopupShow();
  };

  return (
    <>
      <AddInfoPopUpTemplate title={title} icon={icon} handlePopupShow={handlePopupShow} onSubmit={onSubmit}>
        <TextInput
          label="Stanowisko*"
          name="position"
          placeholder="Np: Kierownik ds. dystrybucji"
          value={position}
          onChange={onChange}
        />

        <TextInput
          label="Nazwa firmy*"
          name="company"
          placeholder="Np: Best Software house"
          value={company}
          onChange={onChange}
        />

        <TextInput label="Lokalizacja" name="city" placeholder="Np: Warszawa" value={city} onChange={onChange} />

        <TextInput label="Rok rozpoczęcia*" name="start" placeholder="Np: 2012" value={start} onChange={onChange} />

        <TextInput label="Rok zakończenia*" name="end" placeholder="Np: 2019" value={end} onChange={onChange} />

        <TextInput
          label="Opis wykonywanych czynności"
          name="description"
          placeholder="Tutaj opisz czym zajmowałeś się w pracy"
          value={description}
          onChange={onChange}
        />
      </AddInfoPopUpTemplate>
    </>
  );
};

AddSchoolPopUp.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default AddSchoolPopUp;
