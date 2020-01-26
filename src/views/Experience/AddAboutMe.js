import React, { useState } from "react";

import InfoBox from "components/atoms/InfoBox";
import TextInput from "components/organisms/TextInput";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { Info } from "styled-icons/fa-solid/Info";

import { SET_ABOUTME } from "actions/actionTypes";

const AddAboutMe = ({ aboutMe: { text = "" }, dispatch }) => {
  const [inputValue, setInputValue] = useState(text);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleBlur = e => {
    dispatch({ type: SET_ABOUTME, text: inputValue });
  };

  return (
    <AddInfoTemplate title="U omnie" icon={<Info />}>
      <InfoBox color="orange">
        Podsumuj swoje osiągnięcia i kluczowe umiejętności. Opisz motywację do pracy. Przekonaj rekrutera, że masz
        konkretny plan na siebie i wiesz czego szukasz.
      </InfoBox>

      <TextInput
        label="Tu wpisz do czego dążysz w pracy*"
        name="aboutMe"
        placeholder="Opisz się w kilku zdaniach"
        value={inputValue}
        onChange={e => handleChange(e)}
        onBlur={e => handleBlur(e)}
      />
    </AddInfoTemplate>
  );
};

export default AddAboutMe;
