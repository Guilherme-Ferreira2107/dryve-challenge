import styled from "styled-components";

import searchIcon from "../../assets/icons/search.png";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 31px 24px;
  background-color: #e5e5e5;

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

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.025em;
  }
`;

export const Search = styled.div`
  position: relative;

  input[type="text"] {
    background: #ffffff;
    padding: 12px;
    border: 1px solid #d1d1d1;
    box-sizing: border-box;
    border-radius: 6px;
    min-width: 275px;
    margin-left: 16px;
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

export const TableContacts = styled.div`
  width: 100%;
  margin-top: 24px;

  &.c-container-cards {
    padding: 0;
  }

  table {
    text-align: left;
    border-spacing: 0;
  }

  th,
  td {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.025em;
  }

  thead {
    color: #a3a3a3;

    tr th {
      padding: 16px;
      border-bottom: 1px solid #e5e5e5;
    }
  }

  tbody {
    color: #1d2c4b;

    tr td {
      height: 64px;
      border-bottom: 1px solid #efefef;

      button {
        width: 100%;
        height: 100%;
        border: 0;
        background: transparent;
        text-align: left;
        padding-left: 16px;
        cursor: pointer;

        div {
          width: 48px;
          height: 48px;
          padding: 10px;
          background: #eaf9ff;
          border-radius: 50%;

          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 18px;
          text-align: center;
          letter-spacing: -0.025em;
          color: #0065ff;
          display: inline;
        }

        p {
          margin-left: 16px;
          display: inline;
        }
      }
    }
  }

  tfoot {
    tr td {
      padding: 16px;

      button {
        border: 1px solid #e5e5e5;
        border-radius: 6px;
        background: #fff;
        align-items: center;
        padding: 8px 11px;
        margin-left: 6px;

        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: -0.025em;
        color: #1d2c4b;

        cursor: pointer;

        &.active {
          color: #fff;
          background: #0065ff;
        }

        &.next {
          color: #0065ff;
          border: 0;
          font-weight: 900;
        }
      }

      &.showQtdaRegister {
        text-align: right;

        p {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 12px;
          text-align: right;
          letter-spacing: -0.025em;
          color: #a3a3a3;
          display: inline;
        }

        button {
          position: relative;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 12px;
          letter-spacing: -0.025em;
          color: #1d2c4b;
          width: 40px;
          padding-right: 24px;

          span {
            position: absolute;
            top: 0;
            right: 0;
            margin: 8px 8px 0 0;
            transform: rotate(90deg);
          }
        }
      }
    }
  }

  .w-30 {
    width: 100%;
    min-width: 350px;
  }

  .w-40 {
    width: 100%;
    min-width: 500px;
  }
`;
