import React from "react";

import Box from "../components/atoms/Box";
import InfoBox from "../components/atoms/InfoBox";
import TextInput from "../components/organisms/TextInput";
import BoxHeader from "../components/atoms/BoxHeader";

import { Person } from "styled-icons/octicons/Person";
import { Settings } from "styled-icons/material/Settings";

const PersonData = () => {
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

        <TextInput label="Imię*" placeholder="Np: John" />
        <TextInput label="Nazwisko*" placeholder="Np: Doe" />
        <TextInput
          label="Pozycja na którą aplikujesz*"
          placeholder="Np: FrontEnd developer"
        />
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
    </>
  );
};

export default PersonData;
