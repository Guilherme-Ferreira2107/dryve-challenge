import React, { useState } from "react";

import closeMenu from "../../assets/icons/menu-closed.png";
import { listMenus } from "../../mocks/menu.mock";

import { Wrapper } from "./styles";

const Menu = () => {
  const [activeMenuId, setActiveMenuId] = useState(0);
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <Wrapper className={menuExpanded ? "expanded" : ""}>
      <nav>
        <ul>
          {listMenus.map((item, idx) => {
            return (
              <li key={idx}>
                <button
                  onClick={() => setActiveMenuId(idx)}
                  className={idx === activeMenuId ? "menu-active" : ""}
                >
                  <img src={item.icon} alt={item.title} />
                  <span>{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="control-menu">
        <button onClick={() => setMenuExpanded(!menuExpanded)}>
          <img src={closeMenu} alt="" />
        </button>
      </div>
    </Wrapper>
  );
};

export default Menu;
