import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  overflow: auto;
  width: 100%;
  height: calc(100vh - 80px);

  padding: 31px 24px;
  background-color: #e5e5e5;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: auto;
  margin-bottom: 24px;

  .content-card {
    width: 100%;
    min-width: 260px;
    margin: 0 12px;
    padding: 16px;
    background: #ffffff;
    border: 1px solid #efefef;
    box-sizing: border-box;
    border-radius: 8px;

    h5 {
      margin-bottom: 40px;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .second-row {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: #f7f7f7;
      border-radius: 50%;
    }
  }
`;

export const Graphics = styled.div`
  display: flex;

  margin-bottom: 24px;

  .graphs {
    width: 100%;
    min-width: 828px;
    margin-right: 24px;

    .tooltip {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      letter-spacing: -0.025em;
      text-align: center;
      padding: 8px;

      div {
        margin-bottom: 4px;
      }

      small {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 12px;
        text-align: center;
        letter-spacing: -0.025em;
        color: #a3a3a3;
      }
    }
  }
  .leads {
    width: 260px;
    min-width: 260px;
  }
`;

export const ListCars = styled.div`
  position: relative;
`;
