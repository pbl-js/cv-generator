import styled from "styled-components";
import { device } from "theme/BreakPoints";
import Button from "components/atoms/Button";

// Avaible Props: left right secondary smaller
const Button = styled(Button)`
  padding: 15px 30px;
  min-width: 130px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Button;
