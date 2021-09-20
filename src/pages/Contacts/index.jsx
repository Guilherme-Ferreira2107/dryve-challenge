import React from "react";

import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import filterIcon from "../../assets/icons/filter.png";
import filterPlus from "../../assets/icons/plus.png";

import {
  Wrapper,
  Header,
  Search,
  ContentsFilters,
  FilterBtn,
  AddBtn,
  TableContacts,
} from "./styles";
import { contactsMock } from "../../mocks/contacts.mock";

const Contacts = () => {
  let history = useHistory();

  const redirect = (id) => {
    history.push("/contatos-editar?id=" + id);
  };

  return (
    <Wrapper>
      {/*** HEADER ***/}
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

      {/*** TABLE WITH PAGINATION ***/}
      <TableContacts className="c-container-cards">
        <table>
          <thead>
            <tr className="theader">
              <th className="w-40">Nome do cliente</th>
              <th className="w-30">E-mail</th>
              <th className="w-30">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {contactsMock.dataBody.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td className="w-40">
                    <button onClick={() => redirect(item.id)}>
                      <div>{item.initials}</div>
                      <p>{item.name}</p>
                    </button>
                  </td>
                  <td className="w-30">{item.email}</td>
                  <td className="w-30">{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="w-40 ctrlNumberPage">
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>...</button>
                <button>30</button>
                <button className="next">{">"}</button>
              </td>
              <td className="w-30"></td>
              <td className="w-30 showQtdaRegister">
                <p>Exibindo 8 de 240 registros</p>
                <button>
                  8<span>{">"}</span>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </TableContacts>
    </Wrapper>
  );
};

export default Contacts;
