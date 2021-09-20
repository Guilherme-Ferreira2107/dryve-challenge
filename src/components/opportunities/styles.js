import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 31px 24px;
  background-color: #e5e5e5;
`;

export const BoxOpportunities = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 16px;
  margin: 16px;

  p,
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.025em;
    color: #1d2c4b;
    display: inline;
  }

  span {
    font-weight: normal;
  }

  img {
    object-fit: contain;
  }
`;
