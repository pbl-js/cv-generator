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

import devices from "assets/images/devices.png";
import phone from "assets/images/phone.png";
import template from "assets/images/template.jpg";

import { Lock } from "styled-icons/boxicons-regular/Lock";
import { AttachMoney } from "styled-icons/material/AttachMoney";
import { Document } from "styled-icons/typicons/Document";
import { ShippingFast } from "styled-icons/fa-solid/ShippingFast";

const ColorWrapper = styled.section`
  background: linear-gradient(90deg, #483886 0%, #5b4ab6 100%);
  padding-top: 30px;
`;

const ColorWrapperOrange = styled.section`
  margin-bottom: -40px;
  background-color: ${({ theme }) => theme.color.lightOrange};
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 0 20px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledDevices = styled.img`
  width: 80%;
  margin: 0 auto;
  position: relative;
  transform: translateY(30px);

  @media ${device.mobileL} {
    transform: translateY(40px);
  }

  @media ${device.tablet} {
    transform: translateY(60px);
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 30px auto;
  max-width: 660px;
`;

const ColorBox = styled(Box)`
  box-shadow: none;
  background-color: ${({ theme }) => theme.color.orange};
`;

const Circle = styled.div`
  color: ${({ theme }) => theme.color.orange};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: white;
  border-radius: 1000px;
  line-height: 40px;
  width: 40px;
  margin: 40px 0;
  text-align: center;
`;

const StyledPhoneImg = styled.img`
  margin-top: 30px;
  max-width: 80%;
`;

const StyledBox = styled(Box)`
  margin: 40px 0;
  padding: 40px;

  @media ${device.tablet} {
    padding: 40px;
  }
`;

const OrangeBigHeader = styled(BigHeader)`
  margin-top: 40px;
  color: ${({ theme }) => theme.color.orange};
`;

const OrangeListItem = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
`;

const OrangeHeader = styled(Header)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.orange};
  text-align: left;
`;

const OrangeParagraph = styled(Paragraph)`
  text-align: left;
  color: ${({ theme }) => theme.color.darkGray};
`;

const OrangeListIcon = styled.div`
  min-width: 70px;
  height: 70px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.color.orange};
  border-radius: 50px;
  display: flex;
  flex-grow: 0;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    width: 40px;
    height: 40px;
  }
`;

const LandingPage = () => {
  return (
    <main>
      <ColorWrapper>
        <InnerWrapper>
          <BigHeader
            style={{ marginTop: "30px" }}
            white="routerError"
            big="routerError"
          >
            Za darmo i bez logowania
          </BigHeader>

          <StyledParagraph white="routerError">
            Darmowy kreator CV to narzędzie umożliwiające w łatwy i przyjemny
            sposób stworzyć twoje wymarzone CV.
          </StyledParagraph>

          <Button as={Link} to={routes.personData}>
            Stwórz swoje CV
          </Button>

          <StyledDevices src={devices} alt="devices" />
        </InnerWrapper>
      </ColorWrapper>

      <InnerWrapper>
        <BigHeader style={{ marginTop: "50px" }}>
          Dlaczego warto zadbać CV?
        </BigHeader>

        <StyledParagraph>
          CV to pierwsza rzecz jaką widzi rekruter. Jeżeli twoje CV nie będzie
          prezentować się estetycznie, już na starcie zniechęcisz do siebie
          pracodawcę.
        </StyledParagraph>
      </InnerWrapper>

      <InnerWrapper>
        <BigHeader>Jak to działa?</BigHeader>

        <ColorBox>
          <Circle>1</Circle>

          <BigHeader white="routerError" big="routerError">
            Wybierz szablon
          </BigHeader>

          <StyledParagraph white="routerError">
            Szeroka gama dostępnych szablonów sprawi, ze kazdy znajdzie coś dla
            siebie.
          </StyledParagraph>

          <StyledPhoneImg src={phone} alt="phone" />
        </ColorBox>

        <ColorBox>
          <Circle>1</Circle>

          <BigHeader white="routerError" big="routerError">
            Uzupełnij dane
          </BigHeader>

          <StyledParagraph white="routerError">
            Bez obaw. Nigdy nie otrzymasz od nas zadnej wiadomości.
          </StyledParagraph>

          <StyledPhoneImg src={phone} alt="phone" />
        </ColorBox>

        <ColorBox>
          <Circle>1</Circle>

          <BigHeader white="routerError" big="routerError">
            Pobierz plik PDF
          </BigHeader>

          <StyledParagraph white="routerError">
            Od teraz wszystko zalezy od ciebie! Powodzenia w nowej pracy.
          </StyledParagraph>

          <StyledPhoneImg src={phone} alt="phone" />
        </ColorBox>
      </InnerWrapper>

      <ColorWrapperOrange>
        <InnerWrapper>
          <OrangeBigHeader>Mocne strony</OrangeBigHeader>
          <StyledBox>
            <OrangeListItem>
              <OrangeListIcon>
                <Lock />
              </OrangeListIcon>

              <div>
                <OrangeHeader>Bezpieczeństwo danych</OrangeHeader>
                <OrangeParagraph>
                  Nigdy nie wyślemy zadnej wiadomości na podane przez ciebie
                  dane kontaktowe.
                </OrangeParagraph>
              </div>
            </OrangeListItem>

            <OrangeListItem>
              <OrangeListIcon>
                <AttachMoney />
              </OrangeListIcon>

              <div>
                <OrangeHeader>Całkowicie za darmo</OrangeHeader>
                <OrangeParagraph>
                  To nie jedna z tych "darmowych" stron, gdzie po godzinie
                  tworzenia CV zostaniesz poproszony o nr. karty kredytowej
                </OrangeParagraph>
              </div>
            </OrangeListItem>

            <OrangeListItem>
              <OrangeListIcon>
                <Document />
              </OrangeListIcon>

              <div>
                <OrangeHeader>Dokument PDF</OrangeHeader>
                <OrangeParagraph>
                  Niektóre z generatorów CV zamiast pliku PDF tworzą zdjęcie
                  zapisane do formatu PDF. Taki plik nie ma wielu swoich
                  właściwości.
                </OrangeParagraph>
              </div>
            </OrangeListItem>

            <OrangeListItem style={{ marginBottom: "0" }}>
              <OrangeListIcon>
                <ShippingFast />
              </OrangeListIcon>

              <div>
                <OrangeHeader>Szybko i prosto</OrangeHeader>
                <OrangeParagraph>
                  Z szacunku do twojego czasu do wygenerowania CV nie
                  potrzebujesz tworzyć konta aby pobrać plik.
                </OrangeParagraph>
              </div>
            </OrangeListItem>
          </StyledBox>
        </InnerWrapper>
      </ColorWrapperOrange>

      <InnerWrapper>
        <StyledBox>
          <BigHeader>Zdobądź wymarzoną pracę</BigHeader>

          <StyledParagraph>
            Stwórz razem z nami swoje CV i wykonaj pierwszy krok do podjęcia
            wymarzonej pracy!
          </StyledParagraph>

          <Button as={Link} to={routes.personData}>
            Zaczynamy
          </Button>
        </StyledBox>
      </InnerWrapper>
    </main>
  );
};

export default LandingPage;
