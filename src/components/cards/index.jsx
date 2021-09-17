import React from "react";

import { Wrapper, ContentsCards, InfoCards } from "./styles";

const CardComponents = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item, idx) => {
        return (
          <ContentsCards key={idx}>
            <h5>{item.title}</h5>
            <InfoCards>
              <h3>{item.description}</h3>
              <div className="bg-icon">
                <img src={item.urlIcon} alt={item.title} />
              </div>
            </InfoCards>
          </ContentsCards>
        );
      })}
    </Wrapper>
  );
};

export default CardComponents;
