import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "theme/BreakPoints";

import Button from "components/atoms/Button";

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.lightPurple};
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0 5px;
  }

  @media ${device.tablet} {
    position: relative;
    background-color: transparent;
    margin-top: 40px;
  }
`;

const StyledButton = styled(Button)`
  padding: 7px 15px;
  min-width: 100px;

  @media ${device.tablet} {
    padding: 15px 30px;
    min-width: 130px;
  }
`;

const MobileNavigation = ({ progressData, handlePageChange, history }) => {
  const { progress } = progressData;

  const nextOrPreviousPage = type => {
    if (type === "+") {
      if (progress < 5) {
        handlePageChange(progress + 1);
      } else return;
    } else {
      if (progress > 1) {
        handlePageChange(progress - 1);
      }
    }
  };

  return (
    <div>
      <StyledWrapper>
        <StyledButton
          left="true"
          secondary="true"
          onClick={() => nextOrPreviousPage("-")}
        >
          Wstecz
        </StyledButton>
        <StyledButton right="true" onClick={() => nextOrPreviousPage("+")}>
          Dalej
        </StyledButton>
      </StyledWrapper>
    </div>
  );
};

MobileNavigation.propTypes = {
  progressData: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default MobileNavigation;
