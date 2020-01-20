import styled from "styled-components";

// Avaible Props:
const SkillItem = styled.div`
  position: relative;
  border-radius: 100px;
  padding: 7px 40px 7px 20px;
  margin: 0 10px 10px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${({ theme }) => theme.color.lightGray};
  color: ${({ theme }) => theme.color.veryDarkGray};
  svg {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  svg:hover {
    color: ${({ theme }) => theme.color.orange};
  }
`;

export default SkillItem;
