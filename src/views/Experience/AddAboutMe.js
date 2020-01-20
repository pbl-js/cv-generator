import React from "react";

import Box from "components/atoms/Box";
import InfoBox from "components/atoms/InfoBox";
import TextInput from "components/organisms/TextInput";
import BoxHeader from "components/atoms/BoxHeader";
import PhotoUploader from "components/atoms/PhotoUploader";

import { Info } from "styled-icons/fa-solid/Info";
import { Settings } from "styled-icons/material/Settings";

const AddAboutMe = props => {
  return (
    <>
      <Box>
        <BoxHeader>
          <Info />
          <h1>O mnie</h1>
          <Settings />
        </BoxHeader>

        <InfoBox color="orange">
          Podsumuj swoje osiągnięcia i kluczowe umiejętności. Opisz motywację do
          pracy. Przekonaj rekrutera, że masz konkretny plan na siebie i wiesz
          czego szukasz.
        </InfoBox>

        <TextInput
          label="Tu wpisz do czego dążysz w pracy"
          placeholder="Opisz się w kilku zdaniach"
        />
      </Box>
    </>
  );
};

export default AddAboutMe;
