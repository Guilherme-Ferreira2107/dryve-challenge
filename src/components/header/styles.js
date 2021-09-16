import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import iconArrow from "../../assets/icons/arrow.png";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  padding: 20px 24px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);

  @media (max-width: 450px) {
    padding: 14px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;

    border: none;
    background: transparent;
    cursor: pointer;

    transition: all 0.25s;

    &:active {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .logo {
    width: 101px;
    height: 32px;

    margin-right: 9.53px;
  }

  .image-user {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 31px;
      height: 31px;
      top: 0;
      left: 0;

      margin: 3px 0 0 3px;
      border: 1.5px solid #0065ff;
      border-radius: 50%;
    }
  }

  .col-flex {
    display: flex;
    flex-wrap: wrap;
  }

  .content-select {
    display: flex;
    align-items: center;
    align-content: center;
  }

  .select {
    position: relative;
    width: 100%;
    max-width: 220px;
    margin: 0 6.5px;

    &:after {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      right: 0;
      bottom: 0;
      margin: 0 -36px -30px 0;
      background-image: url(${iconArrow});
      background-repeat: no-repeat;
    }
  }
`;

export const useStyles = makeStyles({
  label: {
    color: "darkred",
    "&.Mui-focused": {
      color: "darkred",
    },
  },
  select: {
    color: "#1d2c4b !important",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "100%",
    letterSpacing: "-0.025em",

    "&:before": {
      border: "0px",
    },
    "& .MuiSvgIcon-root": {
      display: "none",
    },
    "&:after": {
      border: "0px",
    },
    "&:not(.Mui-disabled):hover::before": {
      border: "0px",
    },
  },
});
