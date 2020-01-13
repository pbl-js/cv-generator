import React from "react";

import Box from "../components/atoms/Box";
import InfoBox from "../components/atoms/InfoBox";
import TextInput from "../components/organisms/TextInput";
import BoxHeader from "../components/atoms/BoxHeader";
import PhotoUploader from "../components/atoms/PhotoUploader";

import { Person } from "styled-icons/octicons/Person";
import { Settings } from "styled-icons/material/Settings";

const Experience = props => {
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

        <PhotoUploader type="file" accept="image/png, image/jpeg" />

        <TextInput label="Imię*" name="name" placeholder="Np: John" />

        <TextInput label="Nazwisko*" placeholder="Np: Doe" />

        <TextInput
          label="Pozycja na którą aplikujesz*"
          placeholder="Np: FrontEnd developer"
        />
      </Box>
    </>
  );
};

export default Experience;
