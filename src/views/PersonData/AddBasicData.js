import React, { useState } from "react";
import PropTypes from "prop-types";

import TextInput from "components/organisms/TextInput";
import PhotoUploader from "components/atoms/PhotoUploader";
import InfoBox from "components/atoms/InfoBox";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { Person } from "styled-icons/octicons/Person";

const AddBasicData = ({ context }) => {
  console.log(context);
  const [formData, setFormData] = useState({
    photo: "",
    name: "",
    surname: "",
    job: ""
  });

  const { photo, name, surname, job } = formData;

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
  };

  const saveData = () => {
    console.log(name);
    // addMainInfo({ photo, name, surname, job });
  };

  return (
    <AddInfoTemplate title="Dane podstawowe" icon={<Person />}>
      <InfoBox color="orange">
        Dodaj zdjęcie aby rekruter łatwiej cię zapamiętał oraz skojarzył twoją
        twarz podczas rozmowy rekrutacyjnej. Nie musisz podawać daty urodzenia
        oraz dokładnego adresu.
      </InfoBox>

      <PhotoUploader
        type="file"
        name="photo"
        accept="image/png, image/jpeg"
        onChange={handleInputChange}
      />
      <img src={photo} alt="omg" />

      <TextInput
        label="Imię*"
        name="name"
        placeholder="Np: John"
        onChange={handleInputChange}
        onBlur={handleBlurEvent}
      />

      <TextInput label="Nazwisko*" placeholder="Np: Doe" />

      <TextInput
        label="Pozycja na którą aplikujesz*"
        placeholder="Np: FrontEnd developer"
      />
      <button onClick={saveData}>Wyślij</button>
    </AddInfoTemplate>
  );
};

AddBasicData.propTypes = {
  // addMainInfo: PropTypes.func.isRequired
};

export default AddBasicData;
