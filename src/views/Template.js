import React, { useContext } from "react";
import styled from "styled-components";

import AddInfoTemplate from "templates/AddInfoTemplate.js";
import basicTemplate from "assets/images/template.jpg";
import Header from "components/atoms/Header";

import { DocumentText } from "styled-icons/typicons/DocumentText";

import { CVdataContext } from "context/CVdataContext";
import { SET_TEMPLATE } from "actions/actionTypes";

const InnerWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`;

const StyledHeader = styled(Header)`
  color: ${({ theme, active }) => (active ? theme.color.orange : null)};
`;

const TemplateItem = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: 10px;
    margin-top: 15px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border: ${({ active, theme }) => (active ? "5px solid" + theme.color.orange : "transparent")};
    cursor: pointer;
  }
`;

const Template = () => {
  const {
    cvdata: { template },
    dispatch
  } = useContext(CVdataContext);

  const templates = [
    { id: 1, name: "technic", image: basicTemplate },
    { id: 2, name: "stanford", image: basicTemplate },
    { id: 3, name: "harvard", image: basicTemplate },
    { id: 4, name: "creative", image: basicTemplate },
    { id: 5, name: "inspire", image: basicTemplate },
    { id: 6, name: "educational", image: basicTemplate }
  ];

  const handleClick = active => {
    dispatch({ type: SET_TEMPLATE, data: active });
  };

  return (
    <AddInfoTemplate title="Wygląd dokumentu" icon={<DocumentText />}>
      <InnerWrapper>
        {templates.map(item => (
          <TemplateItem key={item.id} active={item.name === template} onClick={() => handleClick(item.name)}>
            <StyledHeader active={item.name === template}>{item.name}</StyledHeader>
            <img src={item.image} alt={item.name} />
          </TemplateItem>
        ))}
      </InnerWrapper>
    </AddInfoTemplate>
  );
};

export default Template;
