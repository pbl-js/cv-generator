import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "../../components/atoms/Box";
import TextInput from "../../components/organisms/TextInput";
import BoxHeader from "../../components/atoms/BoxHeader";
import PhotoUploader from "../../components/atoms/PhotoUploader";
import InfoBox from "../../components/atoms/InfoBox";

import { Person } from "styled-icons/octicons/Person";
import { Settings } from "styled-icons/material/Settings";

import { connect } from "react-redux";
import { addMainInfo } from "../../redux/actions/cvActions";

const AddBasicData = ({ addMainInfo }) => {
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

  const saveData = () => {
    console.log(name);
    addMainInfo({ photo, name, surname, job });
  };

  return (
    <Box>
      <BoxHeader>
        <Person />
        <h1>Dane podstawowe</h1>
        <Settings />
      </BoxHeader>

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
      />

      <TextInput label="Nazwisko*" placeholder="Np: Doe" />

      <TextInput
        label="Pozycja na którą aplikujesz*"
        placeholder="Np: FrontEnd developer"
      />
      <button onClick={saveData}>Wyślij</button>
    </Box>
  );
};

AddBasicData.propTypes = {
  addMainInfo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addMainInfo: mainInfo => dispatch(addMainInfo(mainInfo))
});

export default connect(null, mapDispatchToProps)(AddBasicData);
