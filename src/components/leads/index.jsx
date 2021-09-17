import React from "react";

import { ContentsLeft, ContentsRow, ListLeads, Wrapper } from "./styles";

const LeadsComponents = ({ data }) => {
  return (
    <Wrapper className="container-cards">
      <h5>
        Leads por portal {"("}últimos 30 dias{")"}
      </h5>
      <ListLeads>
        {data.map((item, idx) => {
          return (
            <ContentsRow key={idx}>
              <ContentsLeft>
                <img src={item.urlIcon} alt={item.title} />
                <h6>{item.title}</h6>
              </ContentsLeft>
              <span>{item.valueLeads}</span>
            </ContentsRow>
          );
        })}
      </ListLeads>
    </Wrapper>
  );
};

export default LeadsComponents;
