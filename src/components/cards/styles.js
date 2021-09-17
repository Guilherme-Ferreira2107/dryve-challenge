import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: auto;
  margin-bottom: 24px;
`;

export const ContentsCards = styled.div`
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
`;

export const InfoCards = styled.div`
  display: flex;
  justify-content: space-between;

  .bg-icon {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #f7f7f7;
    border-radius: 50%;
  }
`;
