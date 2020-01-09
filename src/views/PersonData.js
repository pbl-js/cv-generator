import React from "react";
// import styled from "styled-components";

import MainDataPicker from "../components/organisms/MainDataPicker";
import InputBox from "../components/organisms/InputBox";

const PersonData = () => {
  return (
    <>
      <h1>Dodaj dane osobowe</h1>
      <br />
      <MainDataPicker />
      <InputBox>
        <h1>Siemanko</h1>
      </InputBox>
    </>
  );
};

export default PersonData;
