import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  input:focus ~ label {
    color: ${({ theme, error }) =>
      error ? theme.color.red : theme.color.orange};
  }

  input:focus ~ span {
    left: 0%;
    width: 100%;
    transition: 0.3s;
  }
`;
const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme, error }) =>
    error ? theme.color.red : theme.color.darkGray};
`;

const StyledInput = styled.input`
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  order: 2;
  border: 0;
  outline: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.standardGray};
  color: ${({ theme }) => theme.color.darkGray};

  ::placeholder {
    color: ${({ theme }) => theme.color.standardGray};
  }
`;

const Bar = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  background-color: ${({ theme }) => theme.color.orange};
  order: 4;
  display: block;
  width: 0%;
  height: 2px;

  ${({ error, theme }) =>
    error &&
    css`
      background-color: ${({ theme }) => theme.color.red};
      left: 0;
      width: 100%;
    `}
`;

const StyledError = styled.p`
  margin-top: 5px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
`;

const TextInput = ({ label, placeholder, value, onChange, error }) => {
  return (
    <>
      <StyledWrapper error={error}>
        <StyledInput
          id={label}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
        />

        <StyledLabel error={error} htmlFor={label}>
          {label}
        </StyledLabel>

        <Bar error={error} />
      </StyledWrapper>
      <StyledError>{error}</StyledError>
    </>
  );
};

TextInput.propTypes = {
  // label: PropTypes.string.isRequired,
  // placeholder: PropTypes.string,
  // value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // onChange: PropTypes.func.isRequired,
  // error: PropTypes.string
};

export default TextInput;