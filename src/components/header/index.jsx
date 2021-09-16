import React, { useState } from "react";

import { MenuItem, Select } from "@material-ui/core";

import { useStyles, Wrapper } from "./styles";

import logo from "../../assets/images/Logo.png";
import iconHouse from "../../assets/icons/house.png";
import notification from "../../assets/icons/notification.png";
import settings from "../../assets/icons/settings.png";
import imageUser from "../../assets/icons/imageUser.png";

const Header = () => {
  const classes = useStyles();
  const username = "Frederico Boeri";
  const [hasNotification, setHasNotification] = useState(true);

  const enableNotify = () => {
    setHasNotification(!hasNotification);
  };

  return (
    <Wrapper>
      <div className="col-flex">
        <img className="logo" src={logo} alt="Logo Dryve" />
        <div className="content-select">
          <div>
            <img src={iconHouse} alt="ícone" />
          </div>
          <div className="select">
            <Select
              labelId="label"
              id="select"
              value={username}
              className={classes.select}
            >
              <MenuItem value={username}>
                <span>DryveOne - </span>
                {username}
              </MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div className="col-flex">
        <div>
          <button
            onClick={enableNotify}
            className={hasNotification ? "activeNotify" : ""}
          >
            <img src={notification} alt="Notificações" />
          </button>
        </div>
        <div>
          <button onClick={console.info()}>
            <img src={settings} alt="Ferramentas" />
          </button>
        </div>
        <div className="image-user">
          <button onClick={console.info()}>
            <img src={imageUser} alt="Imagem Usuário" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
