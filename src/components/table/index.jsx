import { useHistory } from "react-router-dom";

import { Wrapper } from "./styles";

const TableComponent = ({ data }) => {
  let history = useHistory();

  const redirect = (id) => {
    history.push("/contatos-editar?id=" + id);
  };

  return (
    <Wrapper className="c-container-cards">
      <table>
        <thead>
          <tr className="theader">
            <th className="c-w-40">Nome do cliente</th>
            <th className="c-w-30">E-mail</th>
            <th className="c-w-30">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {data.dataBody.map((item, idx) => {
            return (
              <tr key={idx}>
                <td className="c-w-40">
                  <button onClick={() => redirect(item.id)}>
                    <div>{item.initials}</div>
                    <p>{item.name}</p>
                  </button>
                </td>
                <td className="c-w-30">{item.email}</td>
                <td className="c-w-30">{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="c-w-40">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>...</button>
              <button>30</button>
              <button className="next">{">"}</button>
            </td>
            <td className="c-w-30"></td>
            <td className="c-w-30 showQtdaRegister">
              <p>Exibindo 8 de 240 registros</p>
              <button>
                8<span>{">"}</span>
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </Wrapper>
  );
};

export default TableComponent;
