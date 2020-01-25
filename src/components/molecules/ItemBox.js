import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import InfoBox from "components/atoms/InfoBox.js";
import withPopup from "hoc/withPopup";

import { Edit } from "styled-icons/material/Edit";
import { Trash } from "styled-icons/fa-solid/Trash";

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

const ItemBox = ({ children, dispatch, deleteItem, defaultData, isOpen, handlePopupShow, Popup, icon }) => {
  return (
    <>
      <Wrapper>
        <Trash onClick={deleteItem} />

        <Edit onClick={handlePopupShow} />

        {children}
      </Wrapper>
      {isOpen && (
        <Popup
          title="Wykształcenie"
          icon={icon}
          handlePopupShow={handlePopupShow}
          dispatch={dispatch}
          defaultData={defaultData}
        />
      )}
    </>
  );
};

ItemBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  defaultData: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  handlePopupShow: PropTypes.func.isRequired,
  Popup: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired
};

export default withPopup(ItemBox);
