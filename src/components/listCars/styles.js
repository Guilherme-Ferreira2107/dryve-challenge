import styled from "styled-components";

export const Wrapper = styled.div`
  &.c-container-cards {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Title = styled.div`
  border-bottom: 1px solid #efefef;

  h5 {
    padding: 0 24px 24px;
  }
`;

export const ContentsBox = styled.div`
  max-height: 368px;
  overflow: auto;
`;

export const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8px 16px;
  border-bottom: 1px solid #efefef;
`;

export const ContentsLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContentsRight = styled.div`
  text-align: center;
  margin-top: 23px;
  margin-bottom: 23px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    letter-spacing: -0.025em;
    color: #666666;
  }

  div {
    padding: 4px;
    border-radius: 500px;
    text-align: center;
    min-width: 70px;

    &.bg-orange {
      background-color: #ffab00;
    }

    &.bg-blue {
      background-color: #cce8fe;

      span {
        color: #1d2c4b;
      }
    }

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.025em;
      color: #ffffff;
    }
  }
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
