import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  overflow: auto;

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
`;
