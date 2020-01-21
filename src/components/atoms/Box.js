import styled from "styled-components";
import { device } from "theme/BreakPoints";

// Avaible Props:
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 100%;
  padding: 0 20px;
  background-color: white;
  margin-top: 40px;

  @media ${device.tablet} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export default Box;
