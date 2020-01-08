import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { routes } from "../routes/routes";

import Button from "../components/atoms/Button";
import Box from "../components/atoms/Box";
import BigHeader from "../components/atoms/BigHeader";
import Header from "../components/atoms/Header";
import Paragraph from "../components/atoms/Paragraph";
import PurpleBackground from "../components/molecules/PurpleBackground";

import devices from "../assets/images/devices.png";
import laptop from "../assets/images/laptop.png";
import template from "../assets/images/template.jpg";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPurpleWrapper = styled(MainWrapper)`
  position: relative;
  overflow: hidden;
`;

const PurpleHeaderWrapper = styled(MainPurpleWrapper)``;

const ContentWrapper = styled(MainWrapper)`
  padding: 20px;
  max-width: 850px;
`;

const WhiteMainWrapper = styled(MainWrapper)`
  background-color: white;
`;

const CvWrapper = styled.div`
  display: grid;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

const PurpleLastWraper = styled(MainPurpleWrapper)`
  padding: 40px;
  background-color: #5b4ab7;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: ${({ big }) => (big ? "10px" : "5px")};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 270px;
  margin-top: 20px;
  margin-bottom: 80px;
`;

const Devices = styled.img`
  min-width: 200px;
  max-width: 300px;
  width: 100%;
  margin: 40px auto 20px auto;
`;

const TemplateCV = styled.img`
  border-radius: 10px;
  border: 10px solid white;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const LandingPage = () => {
  return (
    <div>
      <MainPurpleWrapper>
        <PurpleHeaderWrapper as={"header"}>
          <Devices src={laptop} />

          <BigHeader white="true">Darmowy kreator CV</BigHeader>

          <StyledParagraph big="true" white="true">
            Zyskaj pracę marzeń!
          </StyledParagraph>

          <ButtonWrapper>
            <Button wide="true" as={Link} to={routes.personData}>
              Stwórz CV
            </Button>

            <Button wide="true" secondary="true">
              Jak napisać CV
            </Button>
          </ButtonWrapper>
        </PurpleHeaderWrapper>
      </MainPurpleWrapper>

      <MainWrapper>
        <ContentWrapper as="section">
          <BigHeader>Dlaczego my?</BigHeader>
          <Box as="article">
            <Header>Bez logowania</Header>
            <StyledParagraph>
              Nie musisz nawet zakładać konta. Wszystkie funkcje serwisu
              dostępne Nie musisz nawet zakładać konta. Wszystkie funkcje
              serwisu dostępne Nie musisz nawet zakładać konta. Wszystkie
              funkcje serwisu dostępne są bez logowania
            </StyledParagraph>
          </Box>

          <Box as="article">
            <Header>Bez logowania</Header>
            <StyledParagraph>
              Nie musisz nawet zakładać konta. Wszystkie funkcje serwisu
              dostępne są bez logowania
            </StyledParagraph>
          </Box>

          <Box as="article">
            <Header>Bez logowania</Header>
            <StyledParagraph>
              Nie musisz nawet zakładać konta. Wszystkie funkcje serwisu
              dostępne są bez logowania
            </StyledParagraph>
          </Box>
        </ContentWrapper>
      </MainWrapper>

      <WhiteMainWrapper>
        <ContentWrapper as="section">
          <BigHeader>
            Dzięki przeglądarce dostępny na każdym urządzeniu
          </BigHeader>
          <StyledParagraph big="true">
            Twórz atrakcyjnie wizualnie CV gdzie tylko chcesz. W kawiarni, na
            uczelni lub w zaciszu domowym
          </StyledParagraph>

          <Devices src={devices} />
        </ContentWrapper>
      </WhiteMainWrapper>

      <PurpleHeaderWrapper>
        <ContentWrapper as="section">
          <BigHeader white="true">
            Wybierz jeden z wielu darmowych szablonów
          </BigHeader>
          <CvWrapper>
            <TemplateCV src={template} />
            <TemplateCV src={template} />
            <TemplateCV src={template} />
            <TemplateCV src={template} />
          </CvWrapper>
        </ContentWrapper>
        <PurpleBackground />
      </PurpleHeaderWrapper>

      <PurpleLastWraper as="section">
        <BigHeader white="true">Darmowy i dostępny bez logowania</BigHeader>

        <StyledParagraph big="true" white="true">
          Atrakcyjne CV to pierwszy krok do znalezienia wymarzonej pracy
        </StyledParagraph>
        <br />

        <Button wide="true" as={Link} to={routes.personData}>
          Stwórz CV
        </Button>
      </PurpleLastWraper>
    </div>
  );
};

export default LandingPage;
