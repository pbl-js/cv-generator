import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "theme/BreakPoints";

import Box from "components/atoms/Box";
import BoxHeader from "components/atoms/BoxHeader";
import Header from "components/atoms/Header";
import Button from "components/atoms/Button";
import DarkBackground from "components/atoms/DarkBackground";

import { Close } from "styled-icons/material/Close";

const StyledBox = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 550px;
  z-index: 999;
  margin: 0;
  max-height: 70vh;
`;

const StyledWrapper = styled.div`
  margin: 20px 0;
  display: grid;
  width: 100%;
  grid-gap: 20px;
  justify-items: center;
  overflow-y: auto;

  @media ${device.tablet} {
    margin: 30px 0;
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  margin-bottom: 30px;
`;

const AddInfoPopUpTemplate = ({
  children,
  title,
  icon,
  handlePopupShow,
  onSubmit
}) => {
  return (
    <>
      <StyledBox as="form" onSubmit={onSubmit}>
        <BoxHeader>
          {icon}
          <Header>{title}</Header>
          <Close onClick={handlePopupShow} />
        </BoxHeader>

        <StyledWrapper>{children}</StyledWrapper>

        <ButtonWrapper>
          <Button secondary onClick={handlePopupShow}>
            Anuluj
          </Button>

          <Button type="submit">Zapisz</Button>
        </ButtonWrapper>
      </StyledBox>
      <DarkBackground onClick={handlePopupShow} />
    </>
    // </ModalBackground>
  );
};

AddInfoPopUpTemplate.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element
};

export default AddInfoPopUpTemplate;
