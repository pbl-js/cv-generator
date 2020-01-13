import styled from "styled-components";

// Avaible Props:
const PhotoUploader = styled.input`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border: 2px dotted ${({ theme }) => theme.color.standardGray};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.lightGray};

  input {
    background-color: red;
  }
`;

export default PhotoUploader;
