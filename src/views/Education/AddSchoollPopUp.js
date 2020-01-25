import React, { useState } from "react";
import PropTypes from "prop-types";

import TextInput from "components/organisms/TextInput";
import AddInfoPopUpTemplate from "templates/AddInfoPopUpTemplate";

import { ADD_SCHOOL, EDIT_SCHOOL } from "actions/actionTypes";

const AddSchoolPopUp = ({
  dispatch,
  title,
  icon,
  handlePopupShow,
  defaultData = {
    educationLevel: "",
    schoolName: "",
    specialization: "",
    start: "",
    end: "",
    current: ""
  }
}) => {
  const [school, setSchool] = useState(defaultData);

  const { educationLevel, schoolName, specialization, start, end, current } = school;

  const onChange = e => {
    setSchool({
      ...school,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    defaultData.schoolName === ""
      ? dispatch({ type: ADD_SCHOOL, schoolItem: school })
      : dispatch({ type: EDIT_SCHOOL, id: defaultData.id, schoolItem: school });

    handlePopupShow();
  };

  return (
    <>
      <AddInfoPopUpTemplate title={title} icon={icon} handlePopupShow={handlePopupShow} onSubmit={onSubmit}>
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

        <TextInput label="Rok rozpoczęcia*" name="start" placeholder="Np: 2012" value={start} onChange={onChange} />

        <TextInput label="Rok zakończenia*" name="end" placeholder="Np: 2019" value={end} onChange={onChange} />
      </AddInfoPopUpTemplate>
    </>
  );
};

AddSchoolPopUp.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default AddSchoolPopUp;
