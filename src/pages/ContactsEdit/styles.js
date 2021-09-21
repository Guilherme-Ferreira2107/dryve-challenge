import styled from "styled-components";

import searchDate from "../../assets/icons/search-date.png";
import search from "../../assets/icons/search.png";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 31px 24px;
  background-color: #e5e5e5;
  margin-top: 80px;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.025em;
    color: #0065ff;
    margin: 32px 0 24px;
  }

  button {
    &:active {
      filter: brightness(0.9);
    }
  }

  .c-container-cards {
    margin-bottom: 10px;
    padding: 0;
  }

  .cols-left {
    width: 47.5%;
    margin: 0 16px;
  }

  .c-d-flex {
    flex-wrap: wrap;
  }
`;

export const ColsLeft = styled.div`
  width: 100%;
  margin: 0 16px;
`;

export const ColsRight = styled.div`
  width: 100%;
  margin: 0 16px;

  .c-container-cards {
    width: 100%;
    min-height: 230px;
  }
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 28px;
  width: 100%;

  .btn-back {
    img {
      transform: rotate(180deg);
    }
  }

  h3 {
    display: inline;
    margin-left: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.025em;
  }
`;

export const Title = styled.div`
  border-bottom: 1px solid #efefef;

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    padding: 16px;
  }
`;

export const FormEdit = styled.form`
  padding: 16px;

  .MuiInputBase-input {
    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.025em;
    color: #1d2c4b;
  }

  .box-birthday {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      right: 0;
      top: 0;
      margin: 24px 16px 0 0;
      background-image: url(${searchDate});
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .box-cep {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      right: 0;
      top: 0;
      margin: 12px 12px 0 0;
      background-image: url(${search});
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

export const AddBtn = styled.div`
  button {
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
  }
`;

export const InputSend = styled.div`
  position: relative;
  text-align: right;
  padding: 16px 16px 0px;
  margin-top: 36px;

  input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.025em;
    border-radius: 6px;
    padding: 12px;
    color: #fff;
    background: #0065ff;
    border: 1px solid #0065ff;
    cursor: pointer;
  }

  &:before {
    content: "";
    position: absolute;
    width: calc(100% + 32px);
    height: 1px;
    background: #efefef;
    left: 0;
    top: 0;
    margin-left: -16px;
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

export const InputSendBuy = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: -32px;
  padding: 16px 16px 0px;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #0065ff;
    margin: 10px 16px 0 0;
  }

  button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.025em;
    border-radius: 6px;
    padding: 12px;
    color: #0065ff;
    background: #fff;
    border: 1px solid #0065ff;
    cursor: pointer;

    span {
      margin-left: 11px;
    }
  }

  &:before {
    content: "";
    position: absolute;
    width: calc(100% + 32px);
    height: 1px;
    background: #efefef;
    left: 0;
    top: 0;
    margin-left: -16px;
  }
`;
