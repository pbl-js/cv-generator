import React, { useState, useEffect } from "react";

import Box from "../components/atoms/Box";
import InfoBox from "../components/atoms/InfoBox";
import TextInput from "../components/organisms/TextInput";
import BoxHeader from "../components/atoms/BoxHeader";
import PhotoUploader from "../components/atoms/PhotoUploader";

import { Person } from "styled-icons/octicons/Person";
import { Settings } from "styled-icons/material/Settings";

import { connect } from "react-redux";
import { addMainInfo, addContacts } from "../redux/actions/cvActions";

const PersonData = props => {
  const [formData, setFormData] = useState({
    photo: "",
    name: "",
    surname: "",
    job: "",
    phone: "",
    email: "",
    home: ""
  });

  const { photo, name, surname, job, phone, email, home } = formData;

  const handleInputChange = e => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveData = () => {
    console.log(name);
    props.addMainInfo({ photo, name, surname, job });
  };

  const handleUpload = e => {
    setFormData({ ...formData, photo: URL.createObjectURL(e.target.files[0]) });
  };

  return (
    <>
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
          accept="image/png, image/jpeg"
          onChange={handleUpload}
        />
        <img src={photo} alt="elo" />

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

      <Box>
        <BoxHeader>
          <Person />
          <h1>Dane kontaktowe</h1>
          <Settings />
        </BoxHeader>

        <InfoBox color="orange">
          Numer telefonu i adres email to podstawowe dane kontaktowe. Dodatkowym
          atutem może być również podanie strony internetowej.
        </InfoBox>

        <InfoBox color="blue">
          Nie martw się, nasza strona nie przechowuje tych danych, nigdy nie
          dostaniesz od nas żadnej wiadomości na podany adres email!
        </InfoBox>

        <TextInput label="Telefon*" placeholder="Np: 439 327 237" />

        <TextInput label="Email*" placeholder="Np: johndoe@darmowecv.pl" />
      </Box>

      <Box>
        <BoxHeader>
          <Person />
          <h1>Dane kontaktowe</h1>
          <Settings />
        </BoxHeader>
      </Box>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addMainInfo: mainInfo => dispatch(addMainInfo(mainInfo)),
  addContacts: contacts => dispatch(addContacts(contacts))
});

export default connect(null, mapDispatchToProps)(PersonData);
