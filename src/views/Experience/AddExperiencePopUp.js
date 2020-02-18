import React, { useState } from "react";
import PropTypes from "prop-types";
import useForm from "hooks/useForm";
import validateExperience from "functions/validateExperience";

import TextInput from "components/organisms/TextInput";
import PopupTemplate from "templates/PopupTemplate";

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
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    canSubmiting
  } = useForm(defaultData, onSubmit, validateExperience);

  const { position, company, city, start, end, description } = values;

  function onSubmit(e) {
    defaultData.position === ""
      ? dispatch({ type: ADD_EXPERIENCE, experienceItem: values })
      : dispatch({
          type: EDIT_EXPERIENCE,
          id: defaultData.id,
          experienceItem: values
        });

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
          label="Stanowisko*"
          name="position"
          placeholder="Np: Kierownik ds. dystrybucji"
          value={position}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.position}
        />

        <TextInput
          label="Nazwa firmy*"
          name="company"
          placeholder="Np: Best Software house"
          value={company}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.company}
        />

        <TextInput
          label="Lokalizacja"
          name="city"
          placeholder="Np: Warszawa"
          value={city}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.city}
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

        <TextInput
          label="Opis wykonywanych czynności"
          name="description"
          placeholder="Tutaj opisz czym zajmowałeś się w pracy"
          value={description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.description}
        />
      </PopupTemplate>
    </>
  );
};

AddSchoolPopUp.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default AddSchoolPopUp;
