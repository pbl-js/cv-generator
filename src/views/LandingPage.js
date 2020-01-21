import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "theme/BreakPoints";

import { routes } from "routes/routes";

import Button from "components/atoms/Button";
import Box from "components/atoms/Box";
import BigHeader from "components/atoms/BigHeader";
import Header from "components/atoms/Header";
import Paragraph from "components/atoms/Paragraph";
import PurpleBackground from "components/molecules/PurpleBackground";

import devices from "assets/images/devices.png";
import laptop from "assets/images/laptop.png";
import template from "assets/images/template.jpg";

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
  padding: 40px 20px;
  max-width: 850px;
`;

const WhiteMainWrapper = styled(MainWrapper)`
  background-color: white;
`;

const CvWrapper = styled.div`
  display: grid;
  margin-top: 20px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-top: 50px;
  }
`;

const PurpleLastWraper = styled(MainPurpleWrapper)`
  padding: 40px;
  background-color: #5b4ab7;
`;

const StyledBox = styled(Box)`
  padding: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 150%;
  margin-top: 15px;
`;

const Devices = styled.img`
  max-width: 300px;
  width: 100%;
  margin: 40px auto 20px auto;
`;

const MultiDevices = styled.img`
  width: 100%;
  max-width: 600px;
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

          <Button wide="true" as={Link} to={routes.personData}>
            Stwórz CV
          </Button>
        </PurpleHeaderWrapper>
      </MainPurpleWrapper>

      <MainWrapper>
        <BigHeader style={{ marginTop: "40px" }}>Dlaczego warto?</BigHeader>
        <ContentWrapper as="section">
          <StyledBox as="article">
            <Header>Nie pozwól się ograniczać</Header>
            <StyledParagraph>
              CV to pierwsza rzecz jaką widzi rekruter. Jeżeli twoje CV nie
              będzie prezentować się estetycznie, już na starcie zniechęcisz do
              siebie pracodawcę. Zadbaj o to aby twoje CV zachęcało do
              zaproszenia cię na rozmowę rekrutacyjną. Cała reszta, zależy od
              ciebie!
            </StyledParagraph>
          </StyledBox>

          <StyledBox as="article">
            <Header>Za darmo i bez logowania</Header>
            <StyledParagraph>
              Znasz to uczucie gdy spędziłeś godzinę na tworzeniu swojego
              wymarzonego CV i nagle okazuje się, że pobranie pliku PDF wymaga
              podania numeru karty kredytowej? Twój czas jest dla mnie równie
              ważny jak mój własny. Dlatego na tej stronie stworzysz CV zupełnie
              za darmo. Nie musisz nawet zakładać konta.
            </StyledParagraph>
          </StyledBox>

          <StyledBox as="article">
            <Header>Twoje dane, twoja sprawa</Header>
            <StyledParagraph>
              Często darmowe serwisy są, darmowe tylko z pozoru. Po prostu
              operują inną walutą. Zamiast pieniędzy, zadowalają się twoimi
              danymi. Używając mojego kreatora, masz pewność, że twoje dane
              nigdy nie opuszczą twojej przeglądarki. Dzieje sie tak dlatego, że
              aplikacja nie wysyła żadnych danych do jakiegokolwiek serwera.{" "}
            </StyledParagraph>
          </StyledBox>
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

          <MultiDevices src={devices} />
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
