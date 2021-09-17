import styled from "styled-components";

export const Wrapper = styled.div`
  width: 260px;
  min-width: 260px;

  &.container-cards {
    padding-right: 0px;
    padding-bottom: 0px;
  }
`;

export const ListLeads = styled.div`
  max-height: 370px;
  overflow: scroll;
`;

export const ContentsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 8px 0px;
  border-bottom: 1px solid #efefef;
  max-height: 48px;

  span {
    font-style: normal;
    font-size: 14px;
    line-height: 100%;
    text-align: right;
    letter-spacing: -0.025em;
    color: #0065ff;
  }
`;

export const ContentsLeft = styled.div`
  display: flex;

  h6 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.025em;
  }

  img {
    object-fit: contain;
    margin-right: 16px;
  }
`;
