import styled from "styled-components";

import searchDate from "../../assets/icons/search-date.png";
import search from "../../assets/icons/search.png";

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
