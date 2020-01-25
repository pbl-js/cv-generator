import React from "react";
import styled from "styled-components";

import InfoBox from "components/atoms/InfoBox.js";
import withPopup from "hoc/withPopup";
import AddSchoolPopUp from "views/education/AddSchoollPopUp";

import { Edit } from "styled-icons/material/Edit";
import { Trash } from "styled-icons/fa-solid/Trash";

import { DELETE_SCHOOL } from "actions/actionTypes";
import { School } from "styled-icons/material/School";

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

const ItemBox = ({ children, dispatch, school, isOpen, handlePopupShow, Popup, icon }) => {
  return (
    <>
      <Wrapper>
        <Trash onClick={() => dispatch({ type: DELETE_SCHOOL, id: school.id })} />

        <Edit onClick={handlePopupShow} />

        {children}
      </Wrapper>
      {isOpen && (
        <Popup
          title="Wykształcenie"
          icon={icon}
          handlePopupShow={handlePopupShow}
          dispatch={dispatch}
          defaultData={school}
        />
      )}
    </>
  );
};

export default withPopup(ItemBox);
