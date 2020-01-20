import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { creatorRoutes } from "routes/routes";

import CircleButtonIcon from "components/atoms/CircleButtonIcon";
import Header from "components/atoms/Header";
import ProgressBar from "components/atoms/ProgressBar";

import { Person } from "styled-icons/octicons/Person";
import { School } from "styled-icons/material/School";
import { Brain } from "styled-icons/fa-solid/Brain";
import { Customize } from "styled-icons/boxicons-solid/Customize";
import { Download } from "styled-icons/remix-fill/Download";

const StyledWrapper = styled.div`
  margin: 20px 0;
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const StyledHeader = styled(Header)`
  text-align: left;
  margin-bottom: 15px;
`;

const Navigation = ({ progressData, handlePageChange, actualPage }) => {
  const iconType = index => {
    switch (index) {
      case 1:
        return <Person />;
      case 2:
        return <School />;
      case 3:
        return <Brain />;
      case 4:
        return <Customize />;
      case 5:
        return <Download />;
      default:
        return <Person />;
    }
  };
  return (
    <StyledWrapper>
      <StyledHeader white="routerError">{actualPage}</StyledHeader>
      <InnerWrapper>
        {creatorRoutes.map((item, index) => {
          return (
            <CircleButtonIcon
              key={item.name}
              as={NavLink}
              to={item.url}
              active={progressData.progress >= index + 1 ? "routerError" : null}
              onClick={() => handlePageChange(index + 1)}
            >
              {iconType(index + 1)}
            </CircleButtonIcon>
          );
        })}
        <ProgressBar>
          <ProgressBar
            progress={progressData.progress}
            total={creatorRoutes.length}
          />
        </ProgressBar>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Navigation.propTypes = {
  progressData: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  actualPage: PropTypes.string.isRequired
};

export default Navigation;
