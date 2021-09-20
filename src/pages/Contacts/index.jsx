import React from "react";

import { Grid } from "@material-ui/core";

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
        <Grid container alignItems="center" alignContent="center">
          <h3>Contatos</h3>
          <Search>
            <input type="text" placeholder="Buscar..." />
          </Search>
        </Grid>
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

      <TableComponent data={contactsMock} />
    </Wrapper>
  );
};

export default Contacts;
