import { Grid } from "@material-ui/core";

import {
  Wrapper,
  ColsLeft,
  ColumnInfos,
  Divisor,
  ImageCar,
  InputSendBuy,
} from "./styles";

import filterPlus from "../../assets/icons/plus-blue.png";
import car01 from "../../assets/images/car-07.png";
import car02 from "../../assets/images/car-08.png";

import TitleComponent from "../title";
import ButtonComponent from "../button";

const BuyIntention = () => {
  return (
    <Wrapper className="c-container-cards">
      <TitleComponent value="Intenção de compra" />

      <Grid container spacing={3} className="c-padding-16">
        <Grid item sm={12} md={6} lg={6}>
          <ColsLeft>
            <ImageCar>
              <img src={car01} alt="" />
            </ImageCar>
            <ColumnInfos>
              <span>NISSAN MARCH</span>
              <p>S 1.6 16V FLEX</p>
              <div>
                <p>2013/2014</p> <Divisor /> <p>Etanol/Gasolina</p>
              </div>
              <div>
                <p>70.000 km</p>
                <Divisor />
                <span>R$ 30.900</span>
              </div>
            </ColumnInfos>
          </ColsLeft>
        </Grid>

        <Grid item sm={12} md={6} lg={6}>
          <ColsLeft>
            <ImageCar>
              <img src={car02} alt="" />
            </ImageCar>
            <ColumnInfos>
              <span>NISSAN MARCH</span>
              <p>S 1.6 16V FLEX</p>
              <div>
                <p>2013/2014</p> <Divisor /> <p>Etanol/Gasolina</p>
              </div>
              <div>
                <p>70.000 km</p>
                <Divisor />
                <span>R$ 30.900</span>
              </div>
            </ColumnInfos>
          </ColsLeft>
        </Grid>
      </Grid>

      <InputSendBuy>
        <p>Ver todos</p>
        <ButtonComponent text="Adicionar" srcUrlImage={filterPlus} />
      </InputSendBuy>
    </Wrapper>
  );
};

export default BuyIntention;
