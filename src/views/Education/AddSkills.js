import React from "react";
import styled from "styled-components";

import Box from "../../components/atoms/Box";
import BoxHeader from "../../components/atoms/BoxHeader";
import Button from "../../components/atoms/Button";
import InfoBox from "../../components/atoms/InfoBox";
import SkillItem from "../../components/atoms/SkillItem";
import TextInput from "../../components/organisms/TextInput";

import { Settings } from "styled-icons/material/Settings";
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
    <Box>
      <BoxHeader>
        <Skills />
        <h1>Umiejętności</h1>
        <Settings />
      </BoxHeader>

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
      />

      <Button>Dodaj pozycję</Button>
    </Box>
  );
};

export default AddSkills;
