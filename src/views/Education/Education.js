import React, { useState, useEffect } from "react";
import styled from "styled-components";

import withPopup from "../../hoc/withPopup";

import Box from "../../components/atoms/Box";
import Button from "../../components/atoms/Button";
import InfoBox from "../../components/atoms/InfoBox";
import TextInput from "../../components/organisms/TextInput";
import BoxHeader from "../../components/atoms/BoxHeader";
import SkillItem from "../../components/atoms/SkillItem";

import AddSchool from "./AddSchooll";

import { Edit } from "styled-icons/material/Edit";
import { Trash } from "styled-icons/fa-solid/Trash";
import { School } from "styled-icons/material/School";
import { BarChartGrouped as Skills } from "styled-icons/remix-line/BarChartGrouped";
import { Settings } from "styled-icons/material/Settings";
import { Cancel } from "styled-icons/material/Cancel";

const SkillWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const Education = ({ popups, handlePopupShow }) => {
  return (
    <>
      {popups.education && (
        <AddSchool handlePopupShow={handlePopupShow} popups={popups} />
      )}
      <Box>
        <BoxHeader>
          <School />
          <h1>Wykształcenie</h1>
          <Settings />
        </BoxHeader>

        <InfoBox color="orange">
          Wpisz ostatnio ukończoną szkołę. Jeśli masz wykształcenie wyższe lub
          podyplomowe, podaj nazwę uczelni i kierunek studiów.
        </InfoBox>

        <InfoBox>
          <Trash />
          <Edit />
          Okres: {"09.2015 - 02.2018"}
          <br />
          Stanowisko: {"Własna działalność gospodarcza"}
          <br />
          Firma: {"PADBOX K.Lipiński P.Miłczak"}
          <br />
          Lokalicaja: {"Lublin"}
          <br />
          <br />
          Opis: {"Zakres"}
        </InfoBox>

        <Button onClick={() => handlePopupShow("education")}>
          Dodaj pozycję
        </Button>
      </Box>

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

export default withPopup(Education);
