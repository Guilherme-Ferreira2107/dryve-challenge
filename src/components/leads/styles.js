import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  &.c-container-cards {
    padding: 0px;
  }
`;

export const Title = styled.div`
  h5 {
    padding: 24px 0 24px 12px;
  }
`;

export const ListLeads = styled.div`
  max-height: 340px;
  padding-left: 12px;
  overflow: scroll;

  @media (min-width: 1430px) {
    max-height: 350px;
  }
`;

export const ContentsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px 4px 0px;
  border-bottom: 1px solid #efefef;
  max-height: 48px;

  &:first-child {
    padding-top: 0px;
  }

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
