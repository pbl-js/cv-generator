import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

import PurpleBackground from "../components/molecules/PurpleBackground";
import Footer from "../components/molecules/Footer";
import BigHeader from "../components/atoms/BigHeader";

const Logo = styled(BigHeader)`
  text-decoration: none;
  text-align: center;
  width: 100%;
  display: block;
`;

const StyledWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  min-height: 100vh;
  padding-bottom: 50px;
  padding-top: 20px;
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <Logo white="true" as={Link} to={routes.home}>
        DARMOWE-CV.PL
      </Logo>
      {children}
      <PurpleBackground />
      {/* <Footer /> */}
    </StyledWrapper>
  );
};

export default MainTemplate;
