import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "theme/BreakPoints";
import withPopup from "hoc/withPopup";

import Box from "components/atoms/Box";
import BoxHeader from "components/atoms/BoxHeader";
import Header from "components/atoms/Header";
import SettingsPopup from "components/organisms/SettingsPopup";

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

const AddInfoTemplate = ({
  children,
  title,
  icon,
  handleClick,
  isOpen,
  handlePopupShow
}) => {
  return (
    <Box>
      <BoxHeader>
        {icon}
        <Header>{title}</Header>
        <Settings onClick={handlePopupShow} />
      </BoxHeader>

      <StyledWrapper>{children}</StyledWrapper>

      {isOpen ? <SettingsPopup handlePopupShow={handlePopupShow} /> : null}
    </Box>
  );
};

AddInfoTemplate.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element
};

export default withPopup(AddInfoTemplate);
