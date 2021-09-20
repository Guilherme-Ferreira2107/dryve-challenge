import styled from "styled-components";

export const ButtonWrapper = styled.button`
  font-family: "Inter";
  display: flex;
  align-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.025em;
  border-radius: 6px;
  padding: 12px 16px;
  height: 36px;
  color: #0065ff;
  background: #fff;
  border: 1px solid #0065ff;
  cursor: pointer;

  span {
    margin-left: 11px;
  }

  &:active {
    filter: brightness(0.9);
  }
`;
