import styled from "styled-components";

import searchIcon from "../../assets/icons/search.png";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 31px 24px;
  background-color: #e5e5e5;
  margin-top: 80px;

  button {
    &:active {
      filter: brightness(0.9);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  .c-d-flex {
    align-items: center;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.025em;
  }

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

export const Search = styled.div`
  position: relative;

  input[type="text"] {
    position: relative;
    background: #ffffff;
    padding: 12px;
    border: 1px solid #d1d1d1;
    box-sizing: border-box;
    border-radius: 6px;
    min-width: 275px;
  }

  input[type="text"],
  ::-webkit-input-placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.025em;
    color: #a3a3a3;
  }

  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    right: 0;
    top: 0;
    margin: 6px 9px;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: center;
    z-index: 5;
  }

  @media (min-width: 450px) {
    input[type="text"] {
      margin-left: 16px;
    }
  }
`;

export const ContentsFilters = styled.div`
  display: flex;

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
    cursor: pointer;

    span {
      margin-left: 11px;
    }
  }
`;

export const FilterBtn = styled.div`
  button {
    color: #0065ff;
    background: #ffffff;
    border: 1px solid #cce8fe;
    margin-right: 16px;
  }
`;

export const AddBtn = styled.div`
  button {
    color: #ffffff;
    background: #0065ff;
    border: 1px solid #0065ff;
  }
`;
