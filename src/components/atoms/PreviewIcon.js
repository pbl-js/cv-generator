import styled from "styled-components";
import { FileFind } from "styled-icons/boxicons-solid/FileFind";

// Avaible Props:
const PreviewIcon = styled(FileFind)`
  position: fixed;
  right: 10px;
  bottom: 60px;
  width: 50px;
  height: 50px;
  padding: 12px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.orange};
  color: white;
  cursor: pointer;
`;

export default PreviewIcon;
