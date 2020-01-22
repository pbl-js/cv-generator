import React from "react";
import styled from "styled-components";
import InfoBox from "components/atoms/InfoBox.js";

import { Edit } from "styled-icons/material/Edit";
import { Trash } from "styled-icons/fa-solid/Trash";

import { DELETE_SCHOOL } from "actions/actionTypes";

const Wrapper = styled(InfoBox)`
  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  svg:last-of-type {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 50px;
    top: 20px;
  }
`;

const ItemBox = ({ children, handleEdit, dispatch, id }) => {
  return (
    <Wrapper>
      <Trash onClick={() => dispatch({ type: DELETE_SCHOOL, id })} />
      <Edit onClick={handleEdit} />
      {children}
    </Wrapper>
  );
};

export default ItemBox;
