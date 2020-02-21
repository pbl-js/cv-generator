import React, { useState } from "react";
import PropTypes from "prop-types";
import useForm from "hooks/useForm";
import validateSchool from "functions/validateSchool";

import TextInput from "components/organisms/TextInput";
import PopupTemplate from "templates/PopupTemplate";

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
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    canSubmiting
  } = useForm(defaultData, onSubmit, validateSchool);

  const {
    educationLevel,
    schoolName,
    specialization,
    start,
    end,
    current
  } = values;

  function onSubmit() {
    defaultData.schoolName === ""
      ? dispatch({ type: ADD_SCHOOL, schoolItem: values })
      : dispatch({ type: EDIT_SCHOOL, id: defaultData.id, schoolItem: values });

    handlePopupShow();
  }

  return (
    <>
      <PopupTemplate
        title={title}
        icon={icon}
        handlePopupShow={handlePopupShow}
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Poziom wykształcenia"
          name="educationLevel"
          placeholder="Np: Inżynier"
          value={educationLevel}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.educationLevel}
        />

        <TextInput
          label="Nazwa szkoły*"
          name="schoolName"
          placeholder="Np: Zespół szkół im. Władysława Grabskiego"
          value={schoolName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.schoolName}
        />

        <TextInput
          label="Specjalizacja*"
          name="specialization"
          placeholder="Np: Programowanie i technologie web"
          value={specialization}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.specialization}
        />

        <TextInput
          label="Rok rozpoczęcia*"
          name="start"
          placeholder="Np: 2012"
          value={start}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.start}
        />

        <TextInput
          label="Rok zakończenia*"
          name="end"
          placeholder="Np: 2019"
          value={end}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.end}
        />
      </PopupTemplate>
    </>
  );
};

AddSchoolPopUp.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default AddSchoolPopUp;
