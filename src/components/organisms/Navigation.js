import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { routes } from "../../routes/routes";

import CircleButtonIcon from "../atoms/CircleButtonIcon";

import { Person } from "styled-icons/octicons/Person";
import { School } from "styled-icons/material/School";
import { Brain } from "styled-icons/fa-solid/Brain";
import { Customize } from "styled-icons/boxicons-solid/Customize";
import { Download } from "styled-icons/remix-fill/Download";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Navigation = ({ progressData, handlePageChange }) => {
  return (
    <div>
      <StyledWrapper>
        <CircleButtonIcon
          as={NavLink}
          to={routes.personData}
          active={progressData.progress >= 1 ? true : false}
          onClick={() => handlePageChange(1)}
        >
          <Person />
        </CircleButtonIcon>

        <CircleButtonIcon
          as={NavLink}
          to={routes.education}
          active={progressData.progress >= 2 ? true : false}
          onClick={() => handlePageChange(2)}
        >
          <School />
        </CircleButtonIcon>

        <CircleButtonIcon
          as={NavLink}
          to={routes.experience}
          active={progressData.progress >= 3 ? true : false}
          onClick={() => handlePageChange(3)}
        >
          <Brain />
        </CircleButtonIcon>

        <CircleButtonIcon
          as={NavLink}
          to={routes.template}
          active={progressData.progress >= 4 ? true : false}
          onClick={() => handlePageChange(4)}
        >
          <Customize />
        </CircleButtonIcon>

        <CircleButtonIcon
          as={NavLink}
          to={routes.generateCv}
          active={progressData.progress >= 5 ? true : false}
          onClick={() => handlePageChange(5)}
        >
          <Download />
        </CircleButtonIcon>
      </StyledWrapper>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
