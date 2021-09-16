import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 130px);
  overflow: auto;
  z-index: 1;

  padding: 24px;
  background: #ffffff;
  box-shadow: inset -1px 0px 0px #efefef;

  /* MENU EXPANDIDO */
  &.expanded {
    width: 280px;

    nav ul li button span {
      display: initial;
    }

    .control-menu {
      transition: all 0.3s;

      img {
        transform: rotate(0deg);
      }
    }
  }

  /* NAVBAR */
  nav ul li {
    margin-bottom: 8px;
  }

  nav ul li button {
    transition: all 0.3s;
    width: 100%;
    padding: 11px;
    background: #ffffff;
    border-radius: 6px;
    border: none;
    text-align: left;
    cursor: pointer;
  }

  nav ul li button span {
    display: none;
    transition: all 0.3s;
    position: relative;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.025em;
    vertical-align: super;
    margin-left: 11px;
  }

  li img {
    filter: brightness(0) invert(0);
  }

  li button:hover,
  .menu-active {
    background: #0065ff;

    img {
      filter: brightness(0) invert(1);
    }

    span {
      color: #ffffff;
    }
  }

  /* BOTÃO PARA ABRIR E FECHAR MENU */
  .control-menu {
    display: flex;
    justify-content: flex-end;
    transition: all 0.3s;

    button {
      cursor: pointer;
      border: none;
      background: transparent;
      height: 50px;
      width: 50px;
      border-radius: 50%;

      img {
        transition: all 0.3s;
        margin: auto;
        transform: rotate(180deg);
      }

      &:active,
      &:hover {
        background: rgba(0, 0, 0, 0.12);
      }
    }
  }
`;
