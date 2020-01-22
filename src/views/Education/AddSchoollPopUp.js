import React, { useState } from "react";
import PropTypes from "prop-types";

import TextInput from "components/organisms/TextInput";
import AddInfoPopUpTemplate from "templates/AddInfoPopUpTemplate";

import { ADD_SCHOOL } from "actions/actionTypes";

const AddSchoolPopUp = ({ dispatch, title, icon, handlePopupShow }) => {
  const [school, setSchool] = useState({
    educationLevel: "",
    schoolName: "",
    specialization: "",
    start: 0,
    end: 0,
    current: false
  });

  const {
    educationLevel,
    schoolName,
    specialization,
    start,
    end,
    current
  } = school;

  const onChange = e => {
    setSchool({
      ...school,
      [e.target.name]: e.target.value
    });
    console.log(educationLevel);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD_SCHOOL, schoolItem: school });
    handlePopupShow();
  };

  return (
    <>
      <AddInfoPopUpTemplate
        title={title}
        icon={icon}
        handlePopupShow={handlePopupShow}
        onSubmit={onSubmit}
      >
        <TextInput
          label="Poziom wykształcenia*"
          name="educationLevel"
          placeholder="Np: Inżynier"
          value={educationLevel}
          onChange={onChange}
        />

        <TextInput
          label="Nazwa szkoły*"
          name="schoolName"
          placeholder="Np: Zespół szkół im. Władysława Grabskiego"
          value={schoolName}
          onChange={onChange}
        />

        <TextInput
          label="Specjalizacja"
          name="specialization"
          placeholder="Np: Programowanie i technologie web"
          value={specialization}
          onChange={onChange}
        />

        <TextInput
          label="Rok rozpoczęcia*"
          name="start"
          placeholder="Np: 2012"
          value={start}
          onChange={onChange}
        />

        <TextInput
          label="Rok zakończenia*"
          name="end"
          placeholder="Np: 2019"
          value={end}
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
