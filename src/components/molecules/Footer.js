import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #383838;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  & a {
    color: white;
    text-decoration: none;
    font-weight: medium;
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <a href="www.google.com">Made with love by PBL-JS</a>
    </Wrapper>
  );
};

export default Footer;
