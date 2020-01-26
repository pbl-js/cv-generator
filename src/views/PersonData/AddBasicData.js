import React, { useState } from "react";
import PropTypes from "prop-types";

import TextInput from "components/organisms/TextInput";
import PhotoUploader from "components/atoms/PhotoUploader";
import InfoBox from "components/atoms/InfoBox";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { Person } from "styled-icons/octicons/Person";

import { SET_BASICDATA } from "actions/actionTypes";

const AddBasicData = ({ personData = { photo: "", name: "", surname: "", job: "" }, dispatch }) => {
  const [formData, setFormData] = useState(personData);

  const { photo, name, surname, position } = formData;

  const handleInputChange = e => {
    if (e.target.name === "photo") {
      setFormData({
        ...formData,
        photo: URL.createObjectURL(e.target.files[0])
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleBlurEvent = e => {
    console.log("Work");
    dispatch({ type: SET_BASICDATA, name: [e.target.name], value: formData[e.target.name] });
  };

  return (
    <AddInfoTemplate title="Dane podstawowe" icon={<Person />}>
      <InfoBox color="orange">
        Dodaj zdjęcie aby rekruter łatwiej cię zapamiętał oraz skojarzył twoją twarz podczas rozmowy rekrutacyjnej. Nie
        musisz podawać daty urodzenia oraz dokładnego adresu.
      </InfoBox>

      <PhotoUploader
        type="file"
        name="photo"
        accept="image/png, image/jpeg"
        // value={photo}
        onChange={handleInputChange}
        onBlur={handleBlurEvent}
      />

      <TextInput
        label="Imię*"
        name="name"
        placeholder="Np: John"
        value={name}
        onChange={handleInputChange}
        onBlur={handleBlurEvent}
      />

      <TextInput
        label="Nazwisko*"
        name="surname"
        placeholder="Np: Doe"
        value={surname}
        onChange={handleInputChange}
        onBlur={handleBlurEvent}
      />

      <TextInput
        label="Pozycja na którą aplikujesz*"
        name="position"
        placeholder="Np: FrontEnd developer"
        value={position}
        onChange={handleInputChange}
        onBlur={handleBlurEvent}
      />
    </AddInfoTemplate>
  );
};

AddBasicData.propTypes = {
  // addMainInfo: PropTypes.func.isRequired
};

export default AddBasicData;
