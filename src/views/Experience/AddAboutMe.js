import React from "react";

import InfoBox from "components/atoms/InfoBox";
import TextInput from "components/organisms/TextInput";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { Info } from "styled-icons/fa-solid/Info";

const AddAboutMe = props => {
  return (
    <AddInfoTemplate title="U omnie" icon={<Info />}>
      <InfoBox color="orange">
        Podsumuj swoje osiągnięcia i kluczowe umiejętności. Opisz motywację do
        pracy. Przekonaj rekrutera, że masz konkretny plan na siebie i wiesz
        czego szukasz.
      </InfoBox>

      <TextInput
        label="Tu wpisz do czego dążysz w pracy"
        placeholder="Opisz się w kilku zdaniach"
      />
    </AddInfoTemplate>
  );
};

export default AddAboutMe;
