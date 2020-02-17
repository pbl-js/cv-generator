import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
`;

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
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme, error }) =>
    error ? theme.color.red : theme.color.darkGray};
  transition: 0.3s;
`;

const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 250%;
  order: 2;
  border: 0;
  outline: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.standardGray};
  color: ${({ theme }) => theme.color.veryDarkGray};

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
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const TextInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  keyDown = null,
  onBlur,
  error
}) => {
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      keyDown();
    }
  };
  return (
    <MainWrapper>
      <StyledWrapper error={error}>
        <StyledInput
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value} //|| ""
          onChange={e => onChange(e)}
          onKeyDown={e => handleKeyDown(e)}
          onBlur={onBlur}
          error={error}
        />

        <StyledLabel error={error} htmlFor={name}>
          {label}
        </StyledLabel>

        <Bar error={error} />
      </StyledWrapper>
      <StyledError>{error}</StyledError>
    </MainWrapper>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
  // value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // onChange: PropTypes.func.isRequired,
  // error: PropTypes.string
};

export default TextInput;
