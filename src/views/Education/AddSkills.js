import React from "react";
import styled from "styled-components";

import Button from "components/atoms/Button";
import InfoBox from "components/atoms/InfoBox";
import SkillItem from "components/atoms/SkillItem";
import TextInput from "components/organisms/TextInput";
import AddInfoTemplate from "templates/AddInfoTemplate.js";

import { BarChartGrouped as Skills } from "styled-icons/remix-line/BarChartGrouped";
import { Cancel } from "styled-icons/material/Cancel";

const SkillWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const AddSkills = ({ handlePopupShow, isOpen }) => {
  console.log(isOpen);
  return (
    <AddInfoTemplate title="Umiejętności" icon={<Skills />}>
      <InfoBox color="orange">
        Pokaż swoje mocne strony. Wpisz umiejętności, które pasują do oczekiwań
        pracodawcy opisanych w ogłoszeniu.
      </InfoBox>

      <SkillWrapper>
        <SkillItem>
          JavaScritp <Cancel />
        </SkillItem>
        <SkillItem>
          JS <Cancel />
        </SkillItem>
        <SkillItem>
          PHP <Cancel />
        </SkillItem>
        <SkillItem>
          Django <Cancel />
        </SkillItem>
        <SkillItem>
          OOP JS <Cancel />
        </SkillItem>
        <SkillItem>
          HTML <Cancel />
        </SkillItem>
      </SkillWrapper>

      <TextInput
        label="Wpisz swoje umiejętności*"
        placeholder="Np: Operowanie wózkiem widłowym"
        error="elo"
      />

      <Button>Dodaj pozycję</Button>
    </AddInfoTemplate>
  );
};

export default AddSkills;
