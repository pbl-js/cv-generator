import React from "react";
import styled from "styled-components";

import Box from "../../components/atoms/Box";
import Button from "../../components/atoms/Button";
import InfoBox from "../../components/atoms/InfoBox";
import TextInput from "../../components/organisms/TextInput";
import BoxHeader from "../../components/atoms/BoxHeader";
import SkillItem from "../../components/atoms/SkillItem";

import AddSchool from "./AddSchool";

import { BarChartGrouped as Skills } from "styled-icons/remix-line/BarChartGrouped";

import { Cancel } from "styled-icons/material/Cancel";
import { Settings } from "styled-icons/material/Settings";

const SkillWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const Education = () => {
  return (
    <>
      <AddSchool />

      <Box>
        <BoxHeader>
          <Skills />
          <h1>Umiejętności</h1>
          <Settings />
        </BoxHeader>

        <InfoBox color="orange">
          Pokaż swoje mocne strony. Wpisz umiejętności, które pasują do
          oczekiwań pracodawcy opisanych w ogłoszeniu.
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
    </>
  );
};

export default Education;
