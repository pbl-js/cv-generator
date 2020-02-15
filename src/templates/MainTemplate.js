import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

import Footer from "components/molecules/Footer";
import BigHeader from "components/atoms/BigHeader";
import Button from "components/atoms/Button";

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
`;

const Logo = styled(BigHeader)`
  text-decoration: none;
  text-align: left;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: auto;
`;

const StyledWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <Navbar>
        <InnerWrapper>
          <Logo white="true" as={Link} to={routes.home}>
            DARMOWE-CV.PL
          </Logo>
          Lorem ipsum
        </InnerWrapper>
      </Navbar>

      {children}
      <Footer />
    </StyledWrapper>
  );
};

export default MainTemplate;
