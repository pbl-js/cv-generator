import React, { useState } from "react";
import styled from "styled-components";

import Button from "components/atoms/Button";
import InfoBox from "components/atoms/InfoBox";
import SkillItem from "components/atoms/SkillItem";
import TextInput from "components/organisms/TextInput";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { BarChartGrouped as Skills } from "styled-icons/remix-line/BarChartGrouped";
import { Cancel } from "styled-icons/material/Cancel";

import { ADD_SKILL, DELETE_SKILL } from "actions/actionTypes";

const SkillWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const AddSkills = ({ skills, dispatch }) => {
  const [skillItem, setSkillItem] = useState({
    title: ""
  });

  const handleInput = e => {
    setSkillItem({
      title: e.target.value
    });

    if (e.key === "enter") {
      console.log("siema");
      addSkill();
    }
  };

  const addSkill = () => {
    dispatch({ type: ADD_SKILL, skillItem });
    setSkillItem({
      title: ""
    });
  };

  const deleteSkill = id => {
    dispatch({ type: DELETE_SKILL, id });
  };

  return (
    <AddInfoTemplate title="Umiejętności" icon={<Skills />}>
      <InfoBox color="orange">
        Pokaż swoje mocne strony. Wpisz umiejętności, które pasują do oczekiwań
        pracodawcy opisanych w ogłoszeniu.
      </InfoBox>

      <SkillWrapper>
        {skills.items.map(item => (
          <SkillItem key={item.id}>
            {item.title}
            <Cancel onClick={() => deleteSkill(item.id)} />
          </SkillItem>
        ))}
      </SkillWrapper>

      <TextInput
        label="Wpisz swoje umiejętności*"
        placeholder="Np: Operowanie wózkiem widłowym"
        value={skillItem.title}
        onChange={handleInput}
        keyDown={addSkill}
      />

      <Button onClick={addSkill}>Dodaj pozycję</Button>
    </AddInfoTemplate>
  );
};

export default AddSkills;
