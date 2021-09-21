import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 142px);
  padding: 31px 24px;
  background-color: #e5e5e5;
  margin-top: 80px;
  overflow: auto;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.025em;
    color: #0065ff;
    margin: 32px 0 24px;
  }

  .c-container-cards {
    margin-bottom: 10px;
    padding: 0;
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
    font-weight: 600;
    font-size: 24px;
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
