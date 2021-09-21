import React from "react";

import filterIcon from "../../assets/icons/filter.png";
import filterPlus from "../../assets/icons/plus.png";

import { contactsMock } from "../../mocks/contacts.mock";
import TableComponent from "../../components/table";

import {
  Wrapper,
  Header,
  Search,
  ContentsFilters,
  FilterBtn,
  AddBtn,
} from "./styles";

const Contacts = () => {
  return (
    <Wrapper>
      <Header>
        <div className="c-d-flex">
          <h3>Contatos</h3>
          <Search>
            <input type="text" placeholder="Buscar..." />
          </Search>
        </div>
        <ContentsFilters>
          <FilterBtn>
            <button>
              <img src={filterIcon} alt="" />
              <span>Filtrar</span>
            </button>
          </FilterBtn>
          <AddBtn>
            <button>
              <img src={filterPlus} alt="" />
              <span>Adicionar</span>
            </button>
          </AddBtn>
        </ContentsFilters>
      </Header>

      <div className="container-table">
        <TableComponent data={contactsMock} />
      </div>
    </Wrapper>
  );
};

export default Contacts;
