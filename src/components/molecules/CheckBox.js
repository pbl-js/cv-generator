import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  cursor: pointer;
  width: 40px;
  height: 20px;
  background: gray;
  display: block;
  border-radius: 100px;
  position: relative;
  text-indent: -9999px;

  :after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

const StyledInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;

  :checked + label {
    background: orange;
  }

  :checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const CheckBox = ({ name, value, onChange }) => {
  return (
    <>
      <StyledInput type="checkbox" id={name} onChange={onChange} />
      <StyledLabel for={name}></StyledLabel>
    </>
  );
};

export default CheckBox;
