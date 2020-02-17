import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TextInput from "components/organisms/TextInput";
// import DarkBackground from "components/atoms/DarkBackground";
import PopUpBox from "components/atoms/PopUpBox";
import Button from "components/atoms/Button";
import Header from "components/atoms/Header";
import PopupTemplate from "templates/PopupTemplate";
import CheckBox from "components/molecules/CheckBox";
import Paragraph from "components/atoms/Paragraph";

import { School } from "styled-icons/material/School";

const StyledParagraph = styled(Paragraph)`
  text-align: left;
`;

const StyledHeader = styled(Header)`
  width: 100%;
  margin-top: 10px;
  text-align: left;
`;

const SettingsPopup = ({ title, icon, handlePopupShow }) => {
  return (
    <PopupTemplate
      title={title}
      icon={icon}
      handlePopupShow={handlePopupShow}
      onSubmit={true}
      settings
    >
      <StyledHeader>Edytuj nazwę sekcji</StyledHeader>
      <TextInput
        label="Nazwa sekcji, wyświetlana na CV"
        placeholder="Np: 2019"
      />

      <StyledHeader>Ukryj sekcję</StyledHeader>
      <StyledParagraph>
        Ukryj tę sekcję na swoim CV. Dane w tej sekcji będą nadal dostępne do
        edycji.
      </StyledParagraph>
      <CheckBox name="elo" />

      <StyledHeader>Wymuś podział strony sekcji</StyledHeader>
      <StyledParagraph>
        Przenieś tę sekcję na następną stronę (PDF), wymuszając podział strony.
        Na przykład, aby zapobiec podziałowi sekcji przy zwykłym podziale
        strony.
      </StyledParagraph>
      <CheckBox name="siema" />
    </PopupTemplate>
  );
};

SettingsPopup.propTypes = {
  handlePopupShow: PropTypes.func.isRequired
};

export default SettingsPopup;
