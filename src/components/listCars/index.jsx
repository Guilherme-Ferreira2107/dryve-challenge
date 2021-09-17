import React from "react";

import {
  Wrapper,
  Title,
  Divisor,
  ContentsBox,
  Contents,
  ContentsLeft,
  ContentsRight,
  ImageCar,
  ColumnInfos,
} from "./styles";

const ListCarsComponents = ({ title, data }) => {
  return (
    <Wrapper className="container-cards">
      <Title>
        <h5>{title}</h5>
      </Title>

      <ContentsBox>
        {data.map((item, idx) => {
          return (
            <Contents key={idx}>
              <ContentsLeft>
                <ImageCar>
                  <img src={item.urlImage} alt={item.title} />
                </ImageCar>

                <ColumnInfos>
                  <span>{item.title}</span>
                  <p>{item.info.brand}</p>
                  <div>
                    <p>{item.info.year}</p> <Divisor /> <p>{item.info.info}</p>
                  </div>
                  <div>
                    <p>{item.info.km}</p>
                    <Divisor />
                    <span>{item.info.price}</span>
                  </div>
                </ColumnInfos>
              </ContentsLeft>
              <ContentsRight>
                <div
                  className={
                    item.status === "Vencido" ? "bg-orange" : "bg-blue"
                  }
                >
                  <span>{item.status}</span>
                </div>
                <p>{item.published}</p>
              </ContentsRight>
            </Contents>
          );
        })}
      </ContentsBox>
    </Wrapper>
  );
};

export default ListCarsComponents;
