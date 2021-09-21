import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ColsLeft = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const ImageCar = styled.div`
  border-radius: 4px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.08));
`;

export const ColumnInfos = styled.div`
  span,
  p {
    margin: 5px;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.025em;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
  }

  div {
    display: flex;
    align-items: center;
    align-content: center;

    span {
      color: #0065ff;
    }
  }
`;

export const Divisor = styled.div`
  width: 3px;
  height: 3px;
  background: #a3a3a3;
  border-radius: 50%;
`;

export const InputSendBuy = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 16px 16px 10px;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #0065ff;
    margin: 10px 16px 0 0;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #efefef;
    left: 0;
    top: 0;
  }
`;
