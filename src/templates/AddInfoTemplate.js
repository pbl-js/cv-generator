import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "theme/BreakPoints";

import Box from "components/atoms/Box";
import BoxHeader from "components/atoms/BoxHeader";
import Header from "components/atoms/Header";

import { Settings } from "styled-icons/material/Settings";

const StyledWrapper = styled.div`
  margin: 20px 0;
  display: grid;
  grid-gap: 20px;
  justify-items: center;

  @media ${device.tablet} {
    margin: 30px 0;
  }
`;

const AddInfoTemplate = ({ children, title, icon }) => {
  return (
    <Box>
      <BoxHeader>
        {icon}
        <Header>{title}</Header>
        <Settings />
      </BoxHeader>
      <StyledWrapper>{children}</StyledWrapper>
    </Box>
  );
};

AddInfoTemplate.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element
};

export default AddInfoTemplate;
